import React from "react";
import styled from "styled-components";

const OptionLabel = styled.label`
  font-size: 1.3rem;
`;

const RadioButton = styled.input`
  font-size: 1.3rem;
`;

function Radio({ optionArray, onChangeSelect, defaultValue, addInfo }) {
  //   const optionArray = [];
  //   optionArray = inputArray;
  let degree;
  if (addInfo) {
    degree = addInfo;
  } else {
    degree = "";
  }
  return (
    <>
      {optionArray.map((option, index) =>
        option.value != defaultValue ? (
          <OptionLabel key={index}>
            <RadioButton
              type="radio"
              name={option.key + degree}
              value={option.value}
              onChange={onChangeSelect}
            />
            {option.label}
          </OptionLabel>
        ) : (
          <OptionLabel key={index}>
            <RadioButton
              type="radio"
              name={option.key + degree}
              value={option.value}
              onChange={onChangeSelect}
              checked="checked"
            />
            {option.label}
          </OptionLabel>
        )
      )}
    </>
  );
}

export default Radio;
