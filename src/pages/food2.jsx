import { CheckboxBlock } from "@/components/StyledForm";
import { Page } from "@/components/Page";
import styled from "@emotion/styled";
import { FoodCard } from "@/components/FoodFard";

const StyledFoodList = styled.div`
  margin-top: 30px;
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

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

export default () => {
  const values = [
    "yougurt",
    "coffeCurasan",
    "bananaBrecfast",
    "pancakesWithHoney",
  ];
  const formDataLoader = (event) => {
    const obj = {};
    values.forEach((item) => {
      obj[item] = event.target[item].checked;
    });
    const data = { food1: JSON.stringify(obj) };
    return data;
  };

  return (
    <Page
      formDataLoader={formDataLoader}
      prevParam={"food1"}
      currentParam={"food2"} //food1
      nextRoute={"/fix"}
    >
      <CheckboxBlock>
        <h2>Оберіть страви які б ви вибрали на сніданок</h2>
        <StyledFoodList></StyledFoodList>
      </CheckboxBlock>
    </Page>
  );
};
