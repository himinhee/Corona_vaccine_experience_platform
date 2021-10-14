import React, { useState } from "react";
import styled from "styled-components";
import Responsive from "../../common/Responsive";
import BoldLabel from "../../common/text/BoldLabel";
import EditAvatar from "../../common/avatar/EditAvatar";
import DropDown from "../../common/dropdown/DropDown";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import codemgmt from "../../../modules/codemgmt";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";

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

const EditInput = styled.input`
  width: 20rem;
  box-sizing: border-box;
  font-size: 1.3rem;
  border: 1px solid #ccc;
  padding: 0.8rem 1rem;
  &:focus {
    outline: none;
  }
`;
const OptionLabel = styled.label`
  font-size: 1.3rem;
`;

const RadioButton = styled.input`
  font-size: 1.3rem;
`;

function EditProfile({
  onClickAvatar,
  profileImg,
  onChangeDropDown,
  onChangeCalender,
}) {
  const [bDay, setbDay] = useState({
    year: "",
    month: "",
    day: "",
  });

  const genderOptions = [
    { value: "male", label: "남자", key: "gender", className: "gender" },
    { value: "female", label: "여자", key: "gender", className: "gender" },
  ];

  const vachineOptions = [
    { value: "MD", label: "모더나", key: "vachine", className: "gender" },
    { value: "AZ", label: "AZ", key: "vachine", className: "gender" },
  ];

  const degreeOptions = [
    { value: 0, label: "접종 안함", key: "degree", className: "gender" },
    { value: 1, label: "1차", key: "degree", className: "gender" },
    { value: 2, label: "2차", key: "degree", className: "gender" },
  ];

  return (
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
          <BoldLabel>생년월일을 입력하세요</BoldLabel>
        </EditLabelWrap>
        {/* <EditInput type="number" /> */}
        <DatePickerWrap>
          <YearPicker
            defaultValue={"년"}
            start={1910} // default is 1900
            reverse // default is ASCENDING
            value={bDay.year} // mandatory
            onChange={(year) => {
              // mandatory
              setbDay({ ...bDay, year: year });
              console.log(year);
            }}
            id={"year"}
            name={"year"}
            classes={"classes"}
            optionClasses={"option classes"}
          />
          <MonthPicker
            defaultValue={"월"}
            numeric // to get months as numbers
            year={bDay.year} // mandatory
            value={bDay.month} // mandatory
            onChange={(month) => {
              // mandatorys
              setbDay({ ...bDay, month: Number(month) + 1 });
              console.log(month);
            }}
            id={"month"}
            name={"month"}
            classes={"classes"}
            optionClasses={"option classes"}
          />
          <DayPicker
            defaultValue={"일"}
            year={bDay.year} // mandatory
            month={bDay.month} // mandatory
            endYearGiven // mandatory if end={} is given in YearPicker
            value={bDay.day} // mandatory
            onChange={(day) => {
              // mandatory
              setbDay({ ...bDay, day: day });
              console.log(day);
            }}
            id={"day"}
            name={"day"}
            classes={"classes"}
            optionClasses={"option classes"}
          />
        </DatePickerWrap>
      </EditItemBlock>

      <EditItemBlock>
        <EditLabelWrap>
          <BoldLabel>성별 선택</BoldLabel>
        </EditLabelWrap>
        <StyledDropDown
          onChangeDropDown={onChangeDropDown}
          options={genderOptions}
          myPlaceholder={"성별을 선택 해주세요."}
        />
      </EditItemBlock>

      <EditItemBlock>
        <EditLabelWrap>
          <BoldLabel>성별</BoldLabel>
        </EditLabelWrap>
        {codemgmt.gender.map((option) => (
          <OptionLabel>
            <RadioButton type="radio" name="gender" value={option} />
            {option}
          </OptionLabel>
        ))}
      </EditItemBlock>
      <EditItemBlock>
        <EditLabelWrap>
          <BoldLabel>백신 선택</BoldLabel>
        </EditLabelWrap>
        {codemgmt.vacType.map((option) => (
          <OptionLabel>
            <RadioButton type="radio" name="gender" value={option} />
            {option}
          </OptionLabel>
        ))}
      </EditItemBlock>

      <EditItemBlock>
        <EditLabelWrap>
          <BoldLabel>백신 선택</BoldLabel>
        </EditLabelWrap>
        <StyledDropDown
          options={vachineOptions}
          onChangeDropDown={onChangeDropDown}
          myPlaceholder={"백신을 선택 해주세요."}
        />
      </EditItemBlock>
      <EditItemBlock>
        <EditLabelWrap>
          <BoldLabel>차수 선택</BoldLabel>
        </EditLabelWrap>
        <StyledDropDown
          options={degreeOptions}
          onChangeDropDown={onChangeDropDown}
          myPlaceholder={"차수를 선택 해주세요."}
        />
      </EditItemBlock>
      <EditItemBlock>
        <EditLabelWrap>
          <BoldLabel>백신 접종 날짜 선택</BoldLabel>
        </EditLabelWrap>
        <Calendar onChange={onChangeCalender} value={new Date()} />
      </EditItemBlock>
    </EditProfileWrap>
  );
}

export default EditProfile;
