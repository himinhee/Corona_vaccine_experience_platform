import styled, { css } from "styled-components";
import palette from "../../../libs/styles/palette";

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  margin-bottom: 1.4rem;

  background: ${palette.gray[6]};
  &:hover {
    background: ${palette.gray[4]};
  }
  &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

const DefaultButton = styled.button`
  ${buttonStyle}
`;

export default DefaultButton;
