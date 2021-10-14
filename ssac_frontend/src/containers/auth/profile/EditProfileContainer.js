import React from "react";
import { useState } from "react";
import EditProfile from "../../../components/auth/profile/EditProfile";

function EditProfileContainer() {
  const [profileImg, setProfileImg] = useState({
    imgBase64: "",
    imgFile: null,
    imgURL: "",
  });

  const [profileInfo, setProfileInfo] = useState({
    vachine: "",
    gender: "",
    type: "",
    degree: 0,
    imgURL: "",
  });

  const onClickAvatar = (e) => {
    const imageFile = e.target.files[0];
    const imgBase64 = URL.createObjectURL(imageFile);
    setProfileImg({
      ...profileImg,
      imgBase64: imgBase64,
      imgFile: imageFile,
    });
  };

  const onChangeDropDown = (payload) => {
    console.log(payload);
  };

  const onChangeCalender = (date) => {
    console.log(date);
  };

  const onChangeSelect = (e) => {
    console.log(e.target);
  };
  return (
    <EditProfile
      onChangeDropDown={onChangeDropDown}
      profileImg={profileImg}
      onClickAvatar={onClickAvatar}
      onChangeCalender={onChangeCalender}
      onChangeSelect={onChangeSelect}
    />
  );
}

export default EditProfileContainer;
