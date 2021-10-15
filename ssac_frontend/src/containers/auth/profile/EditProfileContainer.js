import React, { useEffect } from "react";
import { useState } from "react";
import EditProfile from "../../../components/auth/profile/EditProfile";
import { useHistory } from "react-router-dom";
import ProfileContext from "../../../context/ProfileContext";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import client from "../../../libs/api/_client";
import dayjs from "dayjs";

function EditProfileContainer() {
  const { profileInfo, setProfileInfo } = useContext(ProfileContext);
  const { authInfo } = useContext(AuthContext);
  const [profileImg, setProfileImg] = useState({
    imgBase64: "",
    imgFile: null,
    imgURL: "",
  });

  useEffect(() => {
    console.log(authInfo.userInfo);
    setProfileInfo({
      ...profileInfo,
      gender: authInfo.userInfo.gender,
      imgURL: authInfo.userInfo.profileImage,
      bDay: authInfo.userInfo.bDay,
      inoInfo: [
        { degree: 1, vaccinType: "AZ", inoDate: "2021-10-15" },
        // { degree: 2, vaccinType: "AZ", inoDate: "2021-10-20" },
        //   inoInfo: authInfo.inoInfo,
      ],
    });
    setProfileImg({
      ...profileImg,
      imgBase64: authInfo.userInfo.profileImage,
    });
  }, [authInfo]);

  const onClickAvatar = async (e) => {
    const imageFile = e.target.files[0];
    const imgBase64 = URL.createObjectURL(imageFile);
    setProfileImg({
      ...profileImg,
      imgBase64: imgBase64,
      imgFile: imageFile,
    });
    console.log(profileImg);

    const formData = new FormData();
    formData.append("img", imageFile);

    try {
      const response = await client.post("/api/auth/images", formData, {
        headers: { "Content-type": "multipart/form-data" },
      });
      if (response.status === 200) {
        const result = response.data;
        const resultImgUrl = result.imgUrl;
        setProfileImg({
          ...profileImg,
          imgURL: resultImgUrl,
        });
        setProfileInfo({
          ...profileInfo,
          imgURL: resultImgUrl,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeDropDown = (payload) => {
    console.log(payload);
  };

  const onChangeCalender = (date) => {
    console.log(date);
  };

  const onChangeSelect = (e) => {
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const onChangeBDay = (date) => {
    const formatDate = dayjs(date).format("YYYY-MM-DD");
    setProfileInfo({ ...profileInfo, bDay: formatDate });
  };
  return (
    <EditProfile
      onChangeDropDown={onChangeDropDown}
      profileImg={profileImg}
      onClickAvatar={onClickAvatar}
      onChangeCalender={onChangeCalender}
      onChangeSelect={onChangeSelect}
      onChangeBDay={onChangeBDay}
      profileInfo={profileInfo}
    />
  );
}

export default EditProfileContainer;
