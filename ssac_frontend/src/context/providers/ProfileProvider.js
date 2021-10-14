import { useState } from "react";
import ProfileContext from "../ProfileContext";

const ProfileProvider = ({ children }) => {
  const [profileInfo, setProfleInfo] = useState({
    gender: "",
    imgURL: "",
    bDay: {
      year: "",
      month: "",
      day: "",
    },
    inoInfo: [],
    // inoInfo: {
    //   degree: "",
    //   vaccineType: "",
    //   inoDate: "",
    // },
  });

  return (
    <ProfileContext.Provider
      value={{
        profileInfo,
        setProfleInfo,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
