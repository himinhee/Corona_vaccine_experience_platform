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
  const { authInfo } = useContext(AuthContext);
  const [profileImg, setProfileImg] = useState({
    imgBase64: "",
    imgFile: null,
    imgURL: "",
  });
  const { inoInfo, setInoInfo, profileInfo, setProfileInfo } =
    useContext(ProfileContext);

  useEffect(() => {
    console.log(authInfo.userInfo);
    setProfileInfo({
      ...profileInfo,
      gender: authInfo.userInfo.gender,
      imgURL: authInfo.userInfo.profileImage,
      bDay: authInfo.userInfo.bDay,
      inoInfo: [
        { degree: 1, vaccineType: "Moderna", inoDate: "2021-10-15" },
        { degree: 2, vaccineType: "AZ", inoDate: "2021-10-20" },
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

  const onChangeSelect = (e) => {
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const onChangeBDay = (date) => {
    const formatDate = dayjs(date).format("YYYY-MM-DD");
    setProfileInfo({ ...profileInfo, bDay: formatDate });
  };

  const onClickiInoInfoDelete = (index) => {
    const newInoInfo = profileInfo.inoInfo.filter((e, i) => {
      return i !== index;
    });
    setProfileInfo({ ...profileInfo, inoInfo: newInoInfo });
    console.log(profileInfo.inoInfo);
  };

  const addInoInfo = () => {
    const degree =
      profileInfo.inoInfo[profileInfo.inoInfo.length - 1].degree + 1;
    const newInfo = { degree: degree, vaccineType: "", inoDate: "" };
    console.log(newInfo);

    const newInoInfo = profileInfo.inoInfo.concat(newInfo);
    console.log(newInoInfo);

    setProfileInfo({ ...profileInfo, inoInfo: newInoInfo });
    console.log(profileInfo.inoInfo);
  };

  const onChangeInoInfo = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    // const name
    // const degree
    // name+degree

    // setInoInfo(profileInfo.inoInfo[degree-1])
    //   setInoInfo({
    //     ...inoInfo,
    //     [name]: value,
    //   });

    //   const newInoInfo = profileInfo.inoInfo.filter((e, degree) => {
    //     return profileInfo.inoInfo.degree !== degree;
    //   });

    //   const newnewInoInfo = newInInfo.concat(inoInfo);

    //   setProfileInfo({ ...profileInfo, inoInfo: newnewInoInfo });
  };

  const onChangeInoDate = (date) => {
    const formatDate = dayjs(date).format("YYYY-MM-DD");
    setInoInfo({ ...inoInfo, inoDate: formatDate });
    console.log(inoInfo);
  };

  return (
    <EditProfile
      profileImg={profileImg}
      onClickAvatar={onClickAvatar}
      onChangeInoDate={onChangeInoDate}
      onChangeSelect={onChangeSelect}
      onChangeBDay={onChangeBDay}
      profileInfo={profileInfo}
      onClickiInoInfoDelete={onClickiInoInfoDelete}
      addInoInfo={addInoInfo}
      onChangeInoInfo={onChangeInoInfo}
    />
  );
}

export default EditProfileContainer;
