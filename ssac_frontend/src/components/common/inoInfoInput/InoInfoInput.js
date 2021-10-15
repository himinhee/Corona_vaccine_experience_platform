import React from "react";
import styled from "styled-components";
import BoldLabel from "../text/BoldLabel";
import Radio from "../radio/Radio";
import codemgmt from "../../../modules/codemgmt";
import Calendar from "react-calendar";

const EditItemBlock = styled.div`
  margin-top: 3rem;
  & + & {
    margin-top: 2rem;
  }
`;

const EditItemWrap = styled.div`
  margin-bottom: 2rem;
`;

function InoInfoInput({ inoInfoArray, onChangeSelect, onChangeCalender }) {
  if (inoInfoArray.length > 0) {
    return (
      <>
        {inoInfoArray.map((inoInfo, index) => (
          <EditItemBlock>
            <EditItemWrap>
              <BoldLabel>백신 접종 정보 - {inoInfo.degree} 차</BoldLabel>
            </EditItemWrap>
            <EditItemWrap>
              <Radio
                optionArray={codemgmt.vaccineOptions}
                onChangeSelect={onChangeSelect}
              />
            </EditItemWrap>
            <EditItemWrap>
              <Calendar
                onChange={onChangeCalender}
                value={new Date("2020-01-23")}
              />
            </EditItemWrap>
          </EditItemBlock>
        ))}
      </>
    );
  } else {
    return <BoldLabel>백신 접종 정보 - 접종 이력 없음</BoldLabel>;
  }
}

export default InoInfoInput;
