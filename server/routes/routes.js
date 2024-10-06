const express = require("express");
const cloudinary = require("cloudinary");
const Multer = require("multer");

const { json } = require("body-parser");
const Post = require("../models/post");

const placesRoutes = express.Router();
const usersRoutes = express.Router();

placesRoutes.get("/", async (req, res) => {
  let posts;
  try {
    posts = await Post.find({});
  } catch (err) {
    return res.json({ msg: "Something went wrong, " + err });
  }
  if (posts.length === 0) {
    return res.json({ msg: "There are no posts, Please create one" });
  }
  res.json({ posts });
});

placesRoutes.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  let post;
  try {
    post = await Post.findById(userId);
    if (!post) {
      return res.json({ msg: "Post does not exist for the provided id." });
    }
  } catch (err) {
    return res.json({ msg: "Something went wrong, " + err });
  }
  res.json({ post });
});

placesRoutes.post("/", async (req, res) => {
  const { title, description, image } = req.body;
  if (!title || !description) {
    res.json({ err: "Please provided required information" });
  }

  const postCreate = new Post({
    title,
    description,
    image,
  });

  try {
    await postCreate.save();
  } catch (err) {
    res.json("Something went wrong, " + err);
  }

  res.json({ post: postCreate });
});

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

const handleUpload = async (file) => {
  const res = await cloudinary.uploader.upload(file, { resource_type: "auto" });
  return res;
};

placesRoutes.post("/upload", upload.single("my_file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({ msg: "No file uploaded" });
    }

    const b64 = req.file.buffer.toString("base64");
    let dataURI = `data:${req.file.mimetype};base64,${b64}`;

    const cldRes = await handleUpload(dataURI);

    return res.json(cldRes);
  } catch (error) {
    console.error("Upload Error:", error);
    return res.status(500).send({ msg: error.message });
  }
});

usersRoutes.get("/", (req, res) => {
  res.json({ msg: "from users routes" });
});

exports.placesRoutes = placesRoutes;
exports.usersRoutes = usersRoutes;
