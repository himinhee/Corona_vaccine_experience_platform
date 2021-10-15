import React, { useContext, useEffect } from "react";
import PostsList from "../../components/posts/PostsList";
import PostsContext from "../../context/PostsContext";
import client from "../../libs/api/_client";

function PostsListContainer() {
  const { postsInfo, setPostsInfo } = useContext(PostsContext);

  useEffect(() => {
    async function getAllData() {
      try {
        const response = await client.get(`/api/posts`);
        const result = response.data.data;
        setPostsInfo({
          allPosts: result,
          currentPostId: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
    getAllData();
  }, []);

  return <PostsList posts={postsInfo.allPosts} />;
}

export default PostsListContainer;
