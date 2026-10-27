import { CheckboxBlock } from "@/components/StyledForm";
import { Page } from "@/components/Page";
import { createHabits } from "@/components/StyledForm";
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
  const formDataLoader = (event) => {
    const data = { eating_habits: createHabits(event.target) };
    return data;
  };

  return (
    <Page
      formDataLoader={formDataLoader}
      prevParam={"email"}
      currentParam={"food1"} //food1
      nextRoute={"/fix"}
    >
      <CheckboxBlock>
        <h2>Оберіть страви які б ви вибрали на сніданок</h2>
        <StyledFoodList>
          <FoodCard
            lable="Йогурт"
            image="./images/yogurt.png"
            value={1}
            name="yougurt"
          />
          <FoodCard
            lable="Кава з круасаном"
            image="./images/coffeCurasan.png"
            value={2}
            name="coffeCurasan"
          />
          <FoodCard
            lable="Молочна каша з фруктами"
            image="./images/bananaBrecfast.jpg"
            value={3}
            name="bananaBrecfast"
          />
          <FoodCard
            lable="Млинці з медом"
            image="./images/pancakes.jpg"
            value={3}
            name="pancakesWithHoney"
          />
        </StyledFoodList>
      </CheckboxBlock>
    </Page>
  );
};
