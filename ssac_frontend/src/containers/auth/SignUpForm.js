import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";
import client from "../../libs/api/_client";
import AuthContext from "../../context/AuthContext";
import { ToastsStore } from "react-toasts";

function SignUpForm() {
  const history = useHistory();
  const { setAuthInfo } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    nickName: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onClickSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.passwordConfirm) {
      window.alert("비밀번호를 다시 확인해주세요.");
    } else {
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
          setAuthInfo({ isLoggedIn: true, userInfo: result.data.data });
          ToastsStore.success("회원가입 완료! 슬기로운 백신생활 시작!");
          history.push("/"); //추후 회원정보 수정 화면으로 변경
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 409) {
          window.alert(error.response.data.message);
        } else {
          console.log(error);
        }
      }
      // const response = await client.post("/api/auth/signup", {
      //   email: "ehdgns17616@naver.com",
      //   nickName: "동훈",
      //   password: "ehdgns2797",
      // });
    }
  };

  return (
    <AuthForm
      onChangeInput={onChangeInput}
      onClickSubmit={onClickSubmit}
      type="register"
      error={error}
      form={form}
    />
  );
}

export default SignUpForm;
