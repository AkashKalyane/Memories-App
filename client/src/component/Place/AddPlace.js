import React, { useState } from "react";

import "./AddPlace.css";

function AddPlace() {
  const [createdPlace, setCreatedPlace] = useState({
    title: null,
    description: null,
  });

  const handleChange = (e) => {
    setCreatedPlace((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!createdPlace.title || !createdPlace.description) {
      console.log("Please provide required information");
    } else {
      console.log(createdPlace);
    }
    setCreatedPlace({
      title: "",
      description: "",
    });
  };

  return (
    <div className="add-place ">
      <form className="add-place__form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={createdPlace.title}
        />
        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          onChange={handleChange}
          placeholder="Description"
          value={createdPlace.description}
        />
        <button>Add Memory</button>
      </form>
    </div>
  );
}

export default AddPlace;
