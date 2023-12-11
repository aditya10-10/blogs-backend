const express = require('express');
const router = express.Router();

const {createComment} = require('../controllers/CommentController');;

router.post('/comment/create', createComment);


module.exports = router;