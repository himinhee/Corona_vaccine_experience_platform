import React from "react";
import { useState } from "react";
import AuthForm from "../../components/auth/AuthForm";
import client from "../../libs/api/_client";
import AuthContext from "../../context/AuthContext";

function SignUpForm() {
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    nickName: "",
  });

  const onClickSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await client.post("/api/auth/signup", {
        email: form.email,
        password: form.password,
        nickName: form.nickName,
      });
      console.log(response);
      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        client.defaults.headers.common["Authorization"] = `${accessToken}`;
        const result = await client.get("/api/auth/profile");
        // setAuthInfo({ isLoggedIn: true, authInfo: result.data.data });
        // history.push("/");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        setError("이메일 / 비밀번호를 확인해 주시기 바랍니다.");
      }
    }
    // const response = await client.post("/api/auth/signup", {
    //   email: "ehdgns17616@naver.com",
    //   nickName: "동훈",
    //   password: "ehdgns2797",
    // });
  };

  return (
    <AuthForm
      onClickSubmit={onClickSubmit}
      type="register"
      error={error}
      form={form}
    />
  );
}

export default SignUpForm;
