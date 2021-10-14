import React from "react";
import WriteDropDown from "../../components/write/WriteDropDown";
import { useContext } from "react";
import PostContext from "../../context/PostContext";
import codemgmt from "../../modules/codemgmt";
function WriteDropDownContainer() {
  const { postInfo, setPostInfo } = useContext(PostContext);

  const options = codemgmt.category;
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
