import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import WriteActionButtons from "../../components/write/WriteActionButtons";
import client from "../../libs/api/_client";

const WriteActionButtonsContainer = ({ history }) => {
  // const dispatch = useDispatch();

  const onPublish = async (e) => {
    try {
      const response = await client.post("/api/auth/signin", {
        email: form.email,
        password: form.password,
      });
      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        client.defaults.headers.common["Authorization"] = `${accessToken}`;
        const result = await client.get("/api/auth/profile");
        setAuthInfo({ isLoggedIn: true, userInfo: result.data.data });
        ToastsStore.success("슬기로운 백신생활 함께 해요");
        history.push("/");
      }
    } catch (error) {
      if (error.response.status === 400) {
        window.alert(error.response.data.message);
      } else console.log(error);
    }
  };

  const onCancel = () => {
    history.goBack();
  };

  return (
    <WriteActionButtons
      isEdit={false}
      onPublish={onPublish}
      onCancel={onCancel}
    />
  );
};

export default withRouter(WriteActionButtonsContainer);
