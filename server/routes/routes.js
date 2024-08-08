const express = require("express");

const Post = require("../models/post");

const Image =
  "https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=0xb_bb-NBIxjiJL_kqY-o3dCjv2PmKFZfRjHcVEijDc=";

const placesRoutes = express.Router();
const usersRoutes = express.Router();

placesRoutes.get("/", async (req, res) => {
  let posts;
  try {
    posts = await Post.find({});
  } catch (err) {
    res.json({ msg: "Something went wrong, " + err });
  }
  if (posts.length === 0)
    return res.json({ msg: "There are no posts, Please create one" });
  res.json({ posts });
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

  try {
    await postCreate.save();
  } catch (err) {
    res.json("Something went wrong, " + err);
  }

  res.json({ post: postCreate });
});

usersRoutes.get("/", (req, res) => {
  res.json({ msg: "from users routes" });
});

exports.placesRoutes = placesRoutes;
exports.usersRoutes = usersRoutes;
