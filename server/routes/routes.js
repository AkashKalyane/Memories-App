const express = require("express");

const Post = require("../models/post");

const placesRoutes = express.Router();
const usersRoutes = express.Router();

placesRoutes.get("/", (req, res) => {
  res.json({ msg: "from places routes" });
});

placesRoutes.post("/", async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.json({ err: "Please provided required information" });
  }

  const postCreate = new Post({
    title,
    description,
    image:
      "https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=0xb_bb-NBIxjiJL_kqY-o3dCjv2PmKFZfRjHcVEijDc=",
  });

  await postCreate.save();

  res.json({ post: postCreate });
});

usersRoutes.get("/", (req, res) => {
  res.json({ msg: "from users routes" });
});

exports.placesRoutes = placesRoutes;
exports.usersRoutes = usersRoutes;
