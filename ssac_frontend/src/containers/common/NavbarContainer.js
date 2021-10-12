import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import NavbarComponent from "../../components/common/NavbarComponent";
import AuthContext from "../../context/AuthContext";

function NavbarContainer() {
  const { authInfo, setAuthInfo } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const onClickProfileImg = () => {
    setVisible(!visible);
  };
  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    setAuthInfo({ isLoggedIn: false, userInfo: null });
    history.push("/");
  };

  console.log(authInfo);
  return (
    <NavbarComponent
      onClickProfileImg={onClickProfileImg}
      visible={visible}
      authInfo={authInfo}
      onClickLogout={onClickLogout}
    />
  );
}

export default NavbarContainer;
