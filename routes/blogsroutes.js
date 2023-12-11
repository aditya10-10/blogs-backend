const express = require("express");
const router = express.Router();

const { createComment } = require("../controllers/CommentController");
const { createPost } = require("../controllers/PostController");
const { getPost } = require("../controllers/PostController");
const { likePost, unlikePost } = require("../controllers/LikeController");
// Route for creating a comment
router.post("/comment/create", createComment);

// Route for creating a post
router.post("/posts/create", createPost);

// Route for getting a post by the path "aditya"
// Note: The path was changed to "/posts/aditya" for consistency with other paths.
router.get("/posts/aditya", getPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

// Export the router
module.exports = router;
