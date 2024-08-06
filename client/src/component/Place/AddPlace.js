import React from "react";

import "./AddPlace.css";

function AddPlace() {
  return (
    <div className="add-place">
      <form className="add-place__form">
        <label htmlFor="title">Title: </label>
        <input placeholder="Title" />
        <label htmlFor="description">Description: </label>
        <textarea placeholder="Description" />
        <button>Add Memory</button>
      </form>
    </div>
  );
}

export default AddPlace;
