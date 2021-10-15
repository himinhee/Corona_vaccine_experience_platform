import React, { useState } from "react";
import styled from "styled-components";
import Responsive from "../../common/Responsive";
import BoldLabel from "../../common/text/BoldLabel";
import EditAvatar from "../../common/avatar/EditAvatar";
import DropDown from "../../common/dropdown/DropDown";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Radio from "../../common/radio/Radio";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import InoInfoInput from "../../common/inoInfoInput/InoInfoInput";

import codemgmt from "../../../modules/codemgmt";

const PageWrap = styled.div`
  padding-top: 4rem;
`;
const EditProfileWrap = styled(Responsive)``;

const EditLabelWrap = styled.div`
  margin-bottom: 2rem;
`;

const EditItemBlock = styled.div`
  & + & {
    margin-top: 2rem;
  }
`;

const DatePickerWrap = styled.div`
  display: flex;
  font-size: 1.3rem;
`;

const StyledDropDown = styled(DropDown)`
  width: 20rem;

  .DropDown_Control {
    font-size: 1.3rem !important;
  }

  .DropDown_Menu {
    font-size: 1.3rem !important;
  }

  .DropDown_Arrow {
    top: 11px !important;
  }
`;

function EditProfile({
  onClickAvatar,
  profileImg,
  onChangeDropDown,
  onChangeCalender,
  onChangeSelect,
  onChangeBDay,
  profileInfo,
}) {
  return (
    <PageWrap>
      <EditProfileWrap>
        <EditItemBlock>
          <EditLabelWrap>
            <BoldLabel>프로필 이미지 선택</BoldLabel>
          </EditLabelWrap>
          <EditAvatar
            imgURL={profileImg.imgBase64}
            onClickAvatar={onClickAvatar}
          />
        </EditItemBlock>

        <EditItemBlock>
          <EditLabelWrap>
            <BoldLabel>성별 선택</BoldLabel>
          </EditLabelWrap>
          <Radio
            optionArray={codemgmt.genderOptions}
            onChangeSelect={onChangeSelect}
            defaultValue={profileInfo.gender}
          />
        </EditItemBlock>

        <EditItemBlock>
          <EditLabelWrap>
            <BoldLabel>생년월일을 입력하세요</BoldLabel>
          </EditLabelWrap>
          {profileInfo.bDay && (
            <Calendar
              onChange={onChangeBDay}
              value={new Date(profileInfo.bDay)}
            />
          )}
        </EditItemBlock>
        <InoInfoInput inoInfoArray={profileInfo.inoInfo} />
      </EditProfileWrap>
    </PageWrap>
  );
}

export default EditProfile;
