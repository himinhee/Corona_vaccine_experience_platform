import { useState } from "react";
import ProfileContext from "../ProfileContext";

const ProfileProvider = ({ children }) => {
  const [profileInfo, setProfleInfo] = useState({
    vachine: "",
    gender: "",
    type: "",
    degree: 0,
    imgURL: "",
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
