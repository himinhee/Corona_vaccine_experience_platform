var express = require("express");
const postController = require("../../controllers/post/postController");
var router = express.Router();
const authModule = require("../../modules/authModule");

router.post("/", authModule.loggedIn, postController.createPost);
router.put("/:id", authModule.loggedIn, postController.updatePost);
router.delete("/:id", authModule.loggedIn, postController.deletePost);

module.exports = router;
