import { useState } from "react";
import PostContext from "../PostContext";

const PostProvider = ({ children }) => {
  const [postInfo, setPostInfo] = useState({
    tags: [],
    title: "",
    body: "",
    category: "",
    originalPostId: "",
    // originalPostId: "61668c7b27ab4f5e880ee635",
  });

  const resetPost = () => {
    setPostInfo({
      tags: [],
      title: "",
      body: "",
      category: "",
      originalPostId: "",
    });
  };

  return (
    <PostContext.Provider
      value={{
        postInfo,
        setPostInfo,
        resetPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
