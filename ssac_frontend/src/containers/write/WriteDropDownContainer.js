import React from "react";
import WriteDropDown from "../../components/write/WriteDropDown";
import { useContext } from "react";
import PostContext from "../../context/PostContext";

function WriteDropDownContainer() {
  const { postInfo, setPostInfo } = useContext(PostContext);

  const options = ["접종인증", "후기", "팁", "그 외"];
  const onChangeDropDown = (payload) => {
    setPostInfo({
      ...postInfo,
      category: payload,
    });
  };
  return (
    <WriteDropDown
      defaultOption={postInfo.category}
      onChangeDropDown={onChangeDropDown}
      options={options}
      postInfo={postInfo}
    />
  );
}

export default WriteDropDownContainer;
