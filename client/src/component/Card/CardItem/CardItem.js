import React, { useEffect, useState } from "react";

import Like from "../../../assets/like.svg";

import "./CardItem.css";

function CardItem({ itemIsOpen, setItemIsOpen, userId }) {
  const [post, setPost] = useState({});
  useEffect(() => {
    async function fetchData() {
      let post;
      try {
        post = await fetch(`${process.env.REACT_APP_API_KEY}api/posts/${userId}`, {
          method: "get",
        });
        const responseData = await post.json();
        setPost(responseData.post);
      } catch (err) {
        console.log("Can not get the post " + err);
      }
    }
    fetchData();
  }, [userId]);

  return (
    <div className="card-item-container">
      <button className="go-back" onClick={() => setItemIsOpen(false)}>
        Go Back
      </button>
      <div className="card-item">
        <h1>{post.title}</h1>

        <div className="image-container">
          <img src={post.image} alt={post.title} />
        </div>
        <div className="description">
          <p>{post.description}</p>
        </div>
      </div>
      <div className="card-footer">
        <button>Like</button>
        <span>
          <img className="like" src={Like} alt="like" />
        </span>
      </div>
    </div>
  );
}

export default CardItem;
