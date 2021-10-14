import React, { useState } from "react";
import styled from "styled-components";
import Responsive from "../../common/Responsive";
import BoldLabel from "../../common/text/BoldLabel";
import EditAvatar from "../../common/avatar/EditAvatar";
import DropDown from "../../common/dropdown/DropDown";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Radio from "../../common/radio/Radio";

import codemgmt from "../../../modules/codemgmt";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";

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
}) {
  const [bDay, setbDay] = useState({
    year: "",
    month: "",
    day: "",
  });

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
                setbDay({ ...bDay, month: Number(month) });
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
          <Radio
            optionArray={codemgmt.genderOptions}
            onChangeSelect={onChangeSelect}
          />
        </EditItemBlock>
        <EditItemBlock>
          <EditLabelWrap>
            <BoldLabel>백신 선택</BoldLabel>
          </EditLabelWrap>
          <Radio
            optionArray={codemgmt.vaccineOptions}
            onChangeSelect={onChangeSelect}
          />
        </EditItemBlock>

        <EditItemBlock>
          <EditLabelWrap>
            <BoldLabel>백신 선택</BoldLabel>
          </EditLabelWrap>
          <StyledDropDown
            options={codemgmt.vaccineOptions}
            onChangeDropDown={onChangeDropDown}
            myPlaceholder={"백신을 선택 해주세요."}
          />
        </EditItemBlock>
        <EditItemBlock>
          <EditLabelWrap>
            <BoldLabel>차수 선택</BoldLabel>
          </EditLabelWrap>
          <StyledDropDown
            options={codemgmt.degreeOptions}
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
    </PageWrap>
  );
}

export default EditProfile;
