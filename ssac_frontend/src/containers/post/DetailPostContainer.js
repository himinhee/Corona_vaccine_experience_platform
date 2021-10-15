import React from "react";
import DetailPost from "../../components/post/DetailPost";
import PostsContext from "../../context/PostsContext";
import { useContext } from "react";
import client from "../../libs/api/_client";
import { useEffect } from "react";

function DetailPostContainer() {
  const { postsInfo } = useContext(PostsContext);
  let result = "";
  useEffect(() => {
    async function getPostData() {
      try {
        const response = await client.get(
          `/api/posts/${postsInfo.currentPostId}`
        );
        result = response.data.data;
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    getPostData();
  }, []);

  return <DetailPost postsInfo={result} />;
}

export default DetailPostContainer;
