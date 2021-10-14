import React from "react";
import styled from "styled-components";

const OptionLabel = styled.label`
  font-size: 1.3rem;
`;

const RadioButton = styled.input`
  font-size: 1.3rem;
`;

function Radio({ optionArray, onChangeSelect }) {
  //   const optionArray = [];
  //   optionArray = inputArray;
  return (
    <>
      {optionArray.map((option, index) => (
        <OptionLabel key={index}>
          <RadioButton
            type="radio"
            name={option.key}
            value={option.value}
            onChange={onChangeSelect}
          />
          {option.label}
        </OptionLabel>
      ))}
    </>
  );
}

export default Radio;
