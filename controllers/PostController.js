const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({ title, body });
    const savedPost = await post.save();

    res.json({
      message: "Post created successfully",
      post: savedPost,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getPost = async (req, res) => {
  try {
    const posts = await Post.find()
    .populate("comments")
    .populate("likes")
    .exec();

    res.json({
      message: "Posts fetched successfully",
      posts,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
