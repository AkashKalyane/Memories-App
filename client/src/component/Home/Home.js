import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Card from "../Card/Card";
import AddPlace from "../Place/AddPlace";

import "./Home.css";
import CardItem from "../Card/CardItem/CardItem";

function Home() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [itmeIsOpen, setItemIsOpen] = useState(false);
  const [userId, setUserId] = useState("");

  const isMobileView = useMediaQuery({ maxWidth: 720 });
  const isTableView = useMediaQuery({ maxWidth: 1050 });
  const itemPerPage = isMobileView ? 2 : isTableView ? 4 : 6;
  const totalPages = Math.ceil(data.length / itemPerPage);

  useEffect(() => {
    const fetchData = async () => {
      let posts;
      try {
        posts = await fetch(process.env.REACT_APP_API_KEY + "posts/", {
          method: "get",
        });
        const responseData = await posts.json();
        setData(responseData.posts);
      } catch (err) {
        console.log("Something went wrong, while fetching data, " + err);
      }
    };
    fetchData();
  }, [data]);

  const paginatedPlaces = data.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  return (
    <div className="home-wrapper">
      <div className={"home-container " + (itmeIsOpen && "active")}>
        <div className={"left "}>
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
          <div className="footer">
            <div className="pagination">
              <div className="items">
                <button
                  className="arrow"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                >
                  {"<<"}
                </button>
                <button
                  className="arrow"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  {"<"}
                </button>
                <span>{`${currentPage}/${totalPages}`}</span>
                <button
                  className="arrow"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  {">"}
                </button>
                <button
                  className="arrow"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                >
                  {">>"}
                </button>
              </div>
            </div>
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
