import React from "react";
import EditActionButtons from "../../../components/auth/profile/EditActionButtons";
import { useHistory } from "react-router-dom";
import ProfileContext from "../../../context/ProfileContext";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import client from "../../../libs/api/_client";
import { ToastsStore } from "react-toasts";

function EditActionButtonContainer() {
  const { profileInfo, setProfileInfo, resetProfileInfo } =
    useContext(ProfileContext);
  const history = useHistory();
  const { authInfo } = useContext(AuthContext);
  // const { authInfo } = useContext(AuthContext);
  // const { userId } = authInfo;

  const onEdit = async () => {
    try {
      console.log(profileInfo);
      const response = await client.put(
        `/api/auth/updateInfo/${authInfo.userInfo._id}`,
        {
          gender: profileInfo.gender,
          bDay: profileInfo.bDay,
          profileImage: profileInfo.imgURL,
          inoInfo: profileInfo.inoInfo,
        }
      );
      if (response.status === 200) {
        ToastsStore.success("게시물이 수정되었습니다");
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
    console.log("회원정보 수정 - router.put");
  };

  const onCancel = () => {
    console.log("회원정보 수정 취소 - 저장된 내용 reset & move to Home");
    resetProfileInfo();
    history.push("/");
  };
  return <EditActionButtons onEdit={onEdit} onCancel={onCancel} />;
}

export default EditActionButtonContainer;
