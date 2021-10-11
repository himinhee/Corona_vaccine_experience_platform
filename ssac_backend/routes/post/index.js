var express = require("express");
const postController = require("../../controllers/post/postController");
var router = express.Router();
const authModule = require("../../modules/authModule");

//Read에는 권한 확인이 필요 없음
router.get("/", postController.readAll);
router.get("/:id", postController.readExactPost);

//Create, Update, Delete에는 권한 확인이 필요 - 가입 회원이고 verified=true인 경우에만 접근 가능
router.post("/", authModule.loggedIn, postController.createPost);
router.put("/:id", authModule.loggedIn, postController.updatePost);
router.delete("/:id", authModule.loggedIn, postController.deletePost);

//Comment의 CUD는 회원이고 verified=true인 경우에만 접근 가능
router.post("/:id/comments", authModule.loggedIn, postController.createComment);
router.delete(
  "/:id/comments/:commentid",
  authModule.loggedIn,
  postController.deleteComment
);

module.exports = router;
