import styled from "@emotion/styled";
import { useState } from "react";

const StyledLable = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border: none;

  box-shadow: ${({ checked }) => (checked ? "10px 10px 10px black" : "none")};
  background-color: ${({ checked }) => (checked ? "#ffffffb2" : "transparent")};

  border-radius: 20px;
  &:hover {
    outline: 2px solid brown;
  }
  & img {
    display: block;
    width: 100%;
    height: auto;
  }
  & lable {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;
    gap: 20px;
  }
  & input {
    display: none;
  }
`;

export const FoodCard = ({ name, value, image, lable }) => {
  const [checked, setChecked] = useState(false);
  const onClick = () => {
    setChecked((prev) => !prev);
  };
  return (
    <StyledLable checked={checked} type="button" onClick={onClick}>
      <lable htmlFor={name}>
        <img src={image} alt="" />
        <p>{lable}</p>
      </lable>
      <input
        checked={checked}
        id={name}
        type="checkbox"
        name={name}
        value={value}
      />
    </StyledLable>
  );
};
