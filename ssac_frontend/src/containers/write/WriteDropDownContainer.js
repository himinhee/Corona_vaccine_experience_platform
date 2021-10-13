import React from "react";
import WriteDropDown from "../../components/write/WriteDropDown";

function WriteDropDownContainer() {
  const options = ["접종인증", "후기", "팁", "그 외"];
  const onChangeDropDown = (payload) => {
    console.log(payload);
  };
  return (
    <WriteDropDown onChangeDropDown={onChangeDropDown} options={options} />
  );
}

export default WriteDropDownContainer;
