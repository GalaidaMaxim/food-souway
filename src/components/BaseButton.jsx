import styled from "@emotion/styled";

export const BaseButton = styled.button`
  border: 2px solid brown;
  background-color: #e08309;
  color: white;
  font-weight: 700;
  border-radius: 30px;
  padding: 10px;
  box-shadow: none;
  transition-duration: 500ms;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 4px black;
  }
`;
