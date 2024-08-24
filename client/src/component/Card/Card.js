import React from "react";

import "./Card.css";

function Card({ id, Image, title, description, setItemIsOpen, setUserId }) {
  function handleClick() {
    setItemIsOpen(true);
    setUserId(id);
  }

  return (
    <div className="card" onClick={handleClick}>
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
