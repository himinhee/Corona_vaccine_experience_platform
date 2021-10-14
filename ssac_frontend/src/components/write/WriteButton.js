import React from "react";
import styled from "styled-components";
import ButtonComponent from "../common/ButtonComponent";
import palette from "../../libs/styles/palette";
import { BsPlusLg } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const StyledButton = styled(ButtonComponent)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${palette.cyan[5]};
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  &:hover {
    background-color: ${palette.cyan[4]};
  }
`;

const StyledIcon = styled(BsPlusLg)`
  font-size: 2rem;
  vertical-align: bottom;
`;

function WriteButton() {
  const { authInfo, setAuthInfo } = useContext(AuthContext);
  const history = useHistory();

  function onClickWrite() {
    if (authInfo.isLoggedIn === false) {
      window.alert("로그인 후 이용해주세요");
    } else {
      if (authInfo.userInfo.verified === true) {
        history.push("/write");
      } else {
        window.alert("추가정보를 입력해야 글을 쓸 수 있습니다.");
        history.push("/edit/profile");
      }
    }
  }
  return (
    <StyledButton onClick={onClickWrite}>
      <StyledIcon />
    </StyledButton>
  );
}

export default WriteButton;
