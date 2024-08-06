import React, { useState } from "react";

import Image from "../../assets/demo1.jpg";
import Card from "../Card/Card";
import AddPlace from "../Place/AddPlace";

import "./Home.css";

const DUMMY_PLACE = [
  {
    id: 1,
    title: "Taj Hotel",
    description: "A place to visit in Mumbai",
    Image: Image,
  },
  {
    id: 2,
    title: "Gateway of India",
    description: "A historic monument in Mumbai",
    Image: Image,
  },
  {
    id: 3,
    title: "Marine Drive",
    description: "A popular spot in Mumbai",
    Image: Image,
  },
  {
    id: 4,
    title: "Haji Ali Dargah",
    description: "A beautiful mosque in Mumbai",
    Image: Image,
  },
  {
    id: 5,
    title: "Elephanta Caves",
    description: "A UNESCO World Heritage site in Mumbai",
    Image: Image,
  },
  {
    id: 6,
    title: "Juhu Beach",
    description: "A famous beach in Mumbai",
    Image: Image,
  },
  {
    id: 7,
    title: "Siddhivinayak Temple",
    description: "A popular Hindu temple in Mumbai",
    Image: Image,
  },
  {
    id: 8,
    title: "Chhatrapati Shivaji Maharaj Terminus",
    description: "A historic railway station in Mumbai",
    Image: Image,
  },
  {
    id: 9,
    title: "Sanjay Gandhi National Park",
    description: "A large protected area in Mumbai",
    Image: Image,
  },
  {
    id: 10,
    title: "Film City",
    description: "The heart of Bollywood in Mumbai",
    Image: Image,
  },
  {
    id: 11,
    title: "Bandra-Worli Sea Link",
    description: "A modern bridge in Mumbai",
    Image: Image,
  },
  {
    id: 12,
    title: "Hanging Gardens",
    description: "A beautiful garden in Mumbai",
    Image: Image,
  },
  {
    id: 13,
    title: "Chor Bazaar",
    description: "A famous market in Mumbai",
    Image: Image,
  },
  {
    id: 14,
    title: "Mumbai Zoo",
    description: "Also known as Veermata Jijabai Bhosale Udyan",
    Image: Image,
  },
  {
    id: 15,
    title: "Worli Fort",
    description: "A historic fort in Mumbai",
    Image: Image,
  },
  {
    id: 16,
    title: "Global Vipassana Pagoda",
    description: "A meditation hall near Mumbai",
    Image: Image,
  },
];

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(DUMMY_PLACE.length / 2);

  const paginatedPlaces = DUMMY_PLACE.slice(
    (currentPage - 1) * 2,
    currentPage * 2
  );

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="left">
          <div className="content">
            {paginatedPlaces.map(({ id, title, description, Image }) => (
              <Card
                key={id}
                title={title}
                description={description}
                Image={Image}
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
              <button>Create Memory</button>
            </div>
          </div>
        </div>
        <div className="right">
          <AddPlace />
        </div>
      </div>
    </div>
  );
}

export default Home;
