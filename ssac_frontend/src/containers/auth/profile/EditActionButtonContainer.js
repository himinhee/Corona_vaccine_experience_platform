import React from "react";
import EditActionButtons from "../../../components/auth/profile/EditActionButtons";

function EditActionButtonContainer() {
  const onEdit = () => {
    console.log("회원정보 수정 - router.put");
  };
  const onCancel = () => {
    console.log("회원정보 수정 취소 - 저장된 내용 reset & move to Home");
  };
  return <EditActionButtons onEdit={onEdit} onCancel={onCancel} />;
}

export default EditActionButtonContainer;
