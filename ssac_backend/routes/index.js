var express = require("express");
var router = express.Router();

const authRouter = require("./auth/index");
router.use("/auth", authRouter);

const postRouter = require("./post/index");
router.use("/posts", postRouter);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;