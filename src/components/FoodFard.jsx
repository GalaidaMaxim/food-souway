import styled from "@emotion/styled";

const StyledLable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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
`;

export const FoodCard = ({ name, value, image, lable }) => {
  return (
    <StyledLable>
      <lable htmlFor={name}>
        <img src={image} alt="" />
        <p>{lable}</p>
      </lable>
      <input id={name} type="checkbox" name={name} value={value} />
    </StyledLable>
  );
};
