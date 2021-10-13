import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { withRouter } from "react-router-dom";
import WriteActionButtons from "../../components/write/WriteActionButtons";
import client from "../../libs/api/_client";
import { ToastsStore } from "react-toasts";
import PostContext from "../../context/PostContext";
import codeTable from "../../modules/codeTable";
import reverseCodeTable from "../../modules/reverseCodeTable";

const WriteActionButtonsContainer = ({ history }) => {
  const { postInfo, setPostInfo, resetPost } = useContext(PostContext);
  const [isEdit, setIsEdit] = useState(false);
  const { originalPostId } = postInfo;

  // code 변환은 별도 module로 구현
  // const dropDownMap = {
  //   후기: 0,
  //   팁: 1,
  //   등등: 2,
  // };

  // function getKeyByValue(object, value) {
  //   return Object.keys(object).find((key) => object[key] === value);
  // }

  useEffect(() => {
    if (originalPostId !== "") {
      setIsEdit(true);
      async function getData() {
        const response = await client.get(
          `/api/posts/${postInfo.originalPostId}`
        );
        const result = response.data.data;
        const { title, content, tags, category } = result;
        const categoryWord = reverseCodeTable("category", Number(category));
        setPostInfo({
          ...postInfo,
          title: title,
          body: content,
          tags: tags,
          category: categoryWord,
        });
      }
      getData();
    } else {
      setIsEdit(false);
    }
  }, []);

  const onPublish = async (e) => {
    try {
      const response = await client.post("/api/posts", {
        title: postInfo.title,
        content: postInfo.body,
        tags: postInfo.tags,
        category: codeTable("category", postInfo.category.value),
      });
      if (response.status === 200) {
        ToastsStore.success("백신 경험 나눠주셔서 감사해요");
        resetPost();
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onCancel = () => {
    resetPost();
    history.goBack();
  };

  const onEdit = async () => {
    try {
      const response = await client.put(
        `/api/posts/${postInfo.originalPostId}`,
        {
          title: postInfo.title,
          content: postInfo.body,
          tags: postInfo.tags,
          category: codeTable("category", postInfo.category),
        }
      );
      if (response.status === 200) {
        ToastsStore.success("게시물이 수정되었습니다");
        resetPost();
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WriteActionButtons
      isEdit={isEdit}
      onEdit={onEdit}
      onPublish={onPublish}
      onCancel={onCancel}
    />
  );
};

export default withRouter(WriteActionButtonsContainer);
