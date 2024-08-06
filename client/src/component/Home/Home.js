import React from "react";

import Image from "../../assets/demo1.jpg";
import Card from "../Card/Card";
import "./Home.css";
import AddPlace from "../Place/AddPlace";

const DUMMY_PLACE = [
  {
    id: 1,
    title: "Taj Hotel",
    description: "A place to visit in mumbai",
    Image: Image,
  },
  {
    id: 2,
    title: "Taj Hotel",
    description: "A place to visit in mumbai",
    Image: Image,
  },
  // {
  //   id: 3,
  //   title: "Taj Hotel",
  //   description: "A place to visit in mumbai",
  //   Image: Image,
  // },
  // {
  //   id: 4,
  //   title: "Taj Hotel",
  //   description: "A place to visit in mumbai",
  //   Image: Image,
  // },
];

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="left">
          <div className="content">
            {DUMMY_PLACE.map(({ id, title, description, Image }) => (
              <Card
                key={id}
                title={title}
                description={description}
                Image={Image}
              />
            ))}
          </div>
          <div className="footer">
            <div className="scroll">scroll</div>
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
