import React, { useState, useRef } from "react";

import "./AddPlace.css";

function AddPlace({ data }) {
  const [createdPlace, setCreatedPlace] = useState({
    title: "",
    description: "",
    image: "",
  });

  const [file, setFile] = useState(null);

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setCreatedPlace((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectedFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      console.log("There was a problem when selecting the file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!createdPlace.title || !createdPlace.description) {
      console.log("Please provide required information");
      return;
    }
    try {
      if (file) {
        const imageData = new FormData();
        imageData.append("my_file", file);

        const uploadRes = await fetch(
          process.env.REACT_APP_API_KEY + "api/posts/upload",
          {
            method: "POST",
            body: imageData,
          }
        );

        if (uploadRes.ok) {
          const uploadData = await uploadRes.json();
          createdPlace.image = uploadData.url;
        } else {
          console.log("Image upload failed");
          return;
        }
      }
      const response = await fetch(
        process.env.REACT_APP_API_KEY + "api/posts/",
        {
          method: "post",
          body: JSON.stringify(createdPlace),
          headers: { "Content-Type": "Application/JSON" },
        }
      );
      const responseData = await response.json();
      data.push(responseData.post);

      setCreatedPlace({
        title: "",
        description: "",
        image: "",
      });
      setFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      console.log("Something went wrong, " + err);
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
        <label>Upload Image: </label>
        <input
          id="file"
          ref={fileInputRef}
          type="file"
          onChange={handleSelectedFile}
          multiple={false}
        />
        <button type="submit">Add Memory</button>
      </form>
    </div>
  );
}

export default AddPlace;
