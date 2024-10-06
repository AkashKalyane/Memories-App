import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Card from "../Card/Card";
import AddPlace from "../Place/AddPlace";
import CardItem from "../Card/CardItem/CardItem";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";

import "./Home.css";

function Home() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [itmeIsOpen, setItemIsOpen] = useState(false);
  const [userId, setUserId] = useState("");

  const isMobileView = useMediaQuery({ maxWidth: 720 });
  const isTableView = useMediaQuery({ maxWidth: 1050 });

  const itemPerPage = isMobileView ? 2 : isTableView ? 4 : 6;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let posts;
      try {
        posts = await fetch(process.env.REACT_APP_API_KEY + "api/posts/", {
          method: "get",
        });
        const responseData = await posts.json();
        setData(responseData.posts);
      } catch (err) {
        console.log("Something went wrong, while fetching data, " + err);
      }
    };
    fetchData();
    setIsLoading(false);
  }, [data]);

  const paginatedPlaces = data.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  return (
    <div className="home-wrapper">
      <div className={"home-container " + (itmeIsOpen && "active")}>
        <div className={"left "}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {itmeIsOpen && (
                <CardItem
                  itmeIsOpen={itmeIsOpen}
                  setItemIsOpen={setItemIsOpen}
                  userId={userId}
                />
              )}
              <div className="content">
                {paginatedPlaces.map(({ _id, title, description, image }) => (
                  <Card
                    key={_id}
                    id={_id}
                    title={title}
                    description={description}
                    Image={image}
                    setItemIsOpen={setItemIsOpen}
                    setUserId={setUserId}
                  />
                ))}
              </div>
            </>
          )}

          <div className="footer">
            <Pagination
              dataLength={data.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              itemPerPage={itemPerPage}
            />
            <div className="create-button">
              <button onClick={() => setIsOpen(!isOpen)}>Create Memory</button>
            </div>
          </div>
        </div>
        <div className={"right " + (isOpen && "active")}>
          <div className={"backdrop " + (isOpen && "active")}>
            {isOpen && (
              <div className="cancel-button" onClick={() => setIsOpen(!isOpen)}>
                <span className="line1"></span> <span className="line2"></span>
              </div>
            )}
            <AddPlace data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
