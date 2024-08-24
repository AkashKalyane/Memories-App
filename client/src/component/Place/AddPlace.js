import React, { useState } from "react";

import "./AddPlace.css";

function AddPlace({ data }) {
  const [createdPlace, setCreatedPlace] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setCreatedPlace((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!createdPlace.title || !createdPlace.description) {
      console.log("Please provide required information");
    } else {
      try {
        const response = await fetch(process.env.REACT_APP_API_KEY + "posts/", {
          method: "post",
          body: JSON.stringify(createdPlace),
          headers: { "Content-Type": "Application/JSON" },
        });
        const responseData = await response.json();
        data.push(responseData.post);
      } catch (err) {
        console.log("Something went wrong, " + err);
      }
      setCreatedPlace({
        title: "",
        description: "",
      });
    }
  };

  return (
    <div className="add-place ">
      <form className="add-place__form" onSubmit={handleSubmit}>
        <label id="title">Title: </label>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={createdPlace.title}
        />
        <label id="description">Description: </label>
        <textarea
          name="description"
          onChange={handleChange}
          placeholder="Description"
          value={createdPlace.description}
        />
        <button type="submit">Add Memory</button>
      </form>
    </div>
  );
}

export default AddPlace;
