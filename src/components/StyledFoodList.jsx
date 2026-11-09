import styled from "@emotion/styled";
export const StyledFoodList = styled.div`
  margin-top: 30px;
  gap: 30px;
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
