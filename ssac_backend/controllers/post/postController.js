const post = require("../../models/post");

const postController = {
  createPost: function (req, res) {
    const userInfo = req.userInfo;
    const { title, content, tags, category } = req.body;

    const boardModel = new post({
      title,
      content,
      category,
      tags,
      publishDate: new Date(),
      writer: userInfo._id,
    });

    boardModel
      .save()
      .then((savedPost) => {
        console.log(savedPost);
        res.status(200).json({
          message: "게시물 생성 성공",
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "DB 서버 에러",
        });
      });
  },
  updatePost: async function (req, res) {
    const { id } = req.params; //게시물의 id를 parameter로 받음
    const { title, content, tags, category } = req.body;

    try {
      const updated = await post.findByIdAndUpdate(
        id,
        {
          title,
          content,
          tags,
          category,
          updateDate: new Date(),
        },
        { new: true }
      );
      res.status(200).json({
        message: "게시물 수정 완료",
        data: updated,
      });
    } catch (error) {
      res.status(500).json({
        message: "게시물 수정 실패",
        error: error,
      });
      console.log(error);
    }
  },
  deletePost: async function (req, res) {
    const { id } = req.params; //게시물의 id를 parameter로 받음

    try {
      await post.findByIdAndDelete(id);
      res.status(200).json({
        message: "게시물 삭제 완료",
      });
    } catch (error) {
      res.status(500).json({
        message: "게시물 삭제 실패",
        error: error,
      });
    }
  },
};

module.exports = postController;
