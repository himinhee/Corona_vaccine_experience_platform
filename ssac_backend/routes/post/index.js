var express = require("express");
const postController = require("../../controllers/post/postController");
var router = express.Router();
const authModule = require("../../modules/authModule");

//readAll에는 권한 확인이 필요 없음. 특정 게시물 조회는 회원이면 접근가능
router.get("/", postController.readAll);
router.get("/:id", authModule.loggedIn, postController.readExactPost);

//Create, Update, Delete에는 권한 확인이 필요 - 가입 회원이고 verified=true인 경우에만 접근 가능
router.post("/", authModule.checkVerified, postController.createPost);
router.put("/:id", authModule.checkVerified, postController.updatePost);
router.delete("/:id", authModule.checkVerified, postController.deletePost);

//Comment의 CUD는 회원이면 접근 가능
router.post("/:id/comments", authModule.loggedIn, postController.createComment);
router.delete(
  "/:id/comments/:commentid",
  authModule.loggedIn,
  postController.deleteComment
);

module.exports = router;
