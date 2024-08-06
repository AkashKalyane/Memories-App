import React from "react";

import "./Card.css";

function Card({ Image, title, description }) {
  return (
    <div className="card">
      <div className="image">
        <img src={Image} alt="sample-image" />
      </div>
      <div className="details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
