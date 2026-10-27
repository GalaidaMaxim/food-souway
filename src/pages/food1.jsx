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
      console.log(event.target[item]);

      obj[item] = event.target[item].checked;
    });
    const data = { food1: JSON.stringify(obj) };
    return data;
  };

  return (
    <Page
      formDataLoader={formDataLoader}
      prevParam={"email"}
      currentParam={"food1"} //food1
      nextRoute={"/food2"}
    >
      <CheckboxBlock>
        <h2>Оберіть страви які б ви вибрали на сніданок</h2>
        <StyledFoodList>
          <FoodCard
            lable="Йогурт"
            image="./images/yogurt.png"
            value={1}
            name={values[0]}
          />
          <FoodCard
            lable="Кава з круасаном"
            image="./images/coffeCurasan.png"
            value={2}
            name={values[1]}
          />
          <FoodCard
            lable="Молочна каша з фруктами"
            image="./images/bananaBrecfast.jpg"
            value={3}
            name={values[2]}
          />
          <FoodCard
            lable="Млинці з медом"
            image="./images/pancakes.jpg"
            value={4}
            name={values[3]}
          />
        </StyledFoodList>
      </CheckboxBlock>
    </Page>
  );
};
