// import models
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

// write a business logic
exports.createComment = async (req, res) => {
  try {
    // fetch data from request body
    const { post, user, body } = req.body;

    // create object of data received from request
    const comment = new Comment({
      post,
      user,
      body,
    });
    // save new comment to database
    const savedComment = await comment.save();

    // FIND POST DATA using id

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: savedComment._id },
      },
      { new: true }
    )
      .populate("comments")
      .exec();

    res.json({
      message: "Comment created successfully",
      comment: savedComment,
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
