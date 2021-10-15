import React from "react";
import styled from "styled-components";
import BoldLabel from "../text/BoldLabel";
import Radio from "../radio/Radio";
import codemgmt from "../../../modules/codemgmt";
import Calendar from "react-calendar";
import DefaultButton from "../button/DefaultButton";

const EditItemBlock = styled.div`
  margin-top: 3rem;
  & + & {
    margin-top: 2rem;
  }
`;

const EditItemWrap = styled.div`
  margin-bottom: 2rem;
`;

function InoInfoInput({
  inoInfoArray,
  onChangeSelect,
  onChangeCalender,
  onClickiInoInfoDelete,
}) {
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
                defaultValue={inoInfo.vaccineType}
                addInfo={inoInfo.degree}
              />
            </EditItemWrap>
            <EditItemWrap>
              {inoInfo.inoDate ? (
                <Calendar
                  onChange={onChangeCalender}
                  value={new Date(inoInfo.inoDate)}
                />
              ) : (
                <Calendar onChange={onChangeCalender} value={new Date()} />
              )}
            </EditItemWrap>
            <DefaultButton onClick={() => onClickiInoInfoDelete(index)}>
              접종 정보 삭제
            </DefaultButton>
          </EditItemBlock>
        ))}
      </>
    );
  } else {
    return (
      <EditItemBlock>
        <BoldLabel>백신 접종 정보 - 접종 이력 없음</BoldLabel>
      </EditItemBlock>
    );
  }
}

export default InoInfoInput;
