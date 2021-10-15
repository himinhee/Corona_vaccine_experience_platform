import { useState } from "react";
import ProfileContext from "../ProfileContext";

const ProfileProvider = ({ children }) => {
  const [profileInfo, setProfileInfo] = useState({
    gender: "",
    imgURL: "",
    bDay: "",
    inoInfo: [],
    // inoInfo: {
    //   degree: "",
    //   vaccineType: "",
    //   inoDate: "",
    // },
  });

  const resetProfileInfo = () => {
    setProfileInfo({
      gender: "",
      imgURL: "",
      bDay: "",
      inoInfo: [],
    });
  };

  return (
    <ProfileContext.Provider
      value={{
        profileInfo,
        setProfileInfo,
        resetProfileInfo,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
