import styled from "@emotion/styled";

export const BaseButton = styled.button`
  border: 2px solid brown;
  background-color: #e08309;
  color: #000000;
  font-weight: 700;
  border-radius: 30px;
  font-weight: 700;
  padding: 10px;
  box-shadow: none;
  transition-duration: 500ms;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 4px black;
  }
  &:disabled {
    background-color: #e4ceb3;
    color: #8d8c8c;
    border: 2px solid #79726a;
  }
`;
