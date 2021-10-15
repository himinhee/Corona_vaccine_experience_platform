import React, { useState } from "react";
import DetailPost from "../../components/post/DetailPost";
import PostsContext from "../../context/PostsContext";
import { useContext } from "react";
import client from "../../libs/api/_client";
import { useEffect } from "react";

function DetailPostContainer() {
  const { postsInfo } = useContext(PostsContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [writerInfo, setWriterInfo] = useState({});
  const [writer, setWriter] = useState("");

  useEffect(() => {
    setLoading(true);
    // client
    //   .get(`/api/posts/${postsInfo.currentPostId}`)
    //   .then((response) => {
    //     const result = response.data.data;
    //     console.log(result.writer);
    //     setData(result);
    //     setWriter(result.writer);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //   });

    // client
    //   .get(`/api/auth/writerProfile/${writer}`)
    //   .then((response) => {
    //     const writerProfile = response.data.data;
    //     setWriterInfo(writerProfile);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //   });

    async function getPostData() {
      try {
        const response = await client.get(
          `/api/posts/${postsInfo.currentPostId}`
        );
        if (response.status === 200) {
          const result = response.data.data;
          setData(result);
          setWriter(result.writer);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    async function getWriterData() {
      if (writer != "") {
        try {
          const response = await client.get(
            `/api/auth/writerProfile/${writer}`
          );
          if (response.status === 200) {
            const writerData = response.data.data;
            setWriterInfo(writerData);
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }
    }
    getPostData();
    getWriterData();
  }, [writer]);

  return (
    <DetailPost eachPost={data} writerInfo={writerInfo} loading={loading} />
  );
}

export default DetailPostContainer;
