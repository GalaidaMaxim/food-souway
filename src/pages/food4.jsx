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
    "appleNuts",
    "yogurtFuts",
    "smuzi",
    "chocolate",
    "appleChips",
    "sandwichCheese",
  ];
  const formDataLoader = (event) => {
    const obj = {};
    values.forEach((item) => {
      obj[item] = event.target[item].checked;
    });
    const data = { food4: JSON.stringify(obj) };
    return data;
  };

  return (
    <Page
      formDataLoader={formDataLoader}
      prevParam={"food3"}
      currentParam={"food4"} //food2
      nextRoute={"/fix"}
    >
      <CheckboxBlock>
        <h2>Оберіть страви, які б ви вибрали на вечерю</h2>
        <StyledFoodList>
          <FoodCard
            name={values[0]}
            image={"./images/appleNuts.jpg"}
            lable={"Яблуко та горіхи"}
          />
          <FoodCard
            name={values[1]}
            image={"./images/yogurtFuts.jpg"}
            lable={"Натуральний йогурт з ягодами"}
          />
          <FoodCard
            name={values[2]}
            image={"./images/smuzi.jpg"}
            lable={"Фруктовий смузі"}
          />
          <FoodCard
            name={values[3]}
            image={"./images/chocolate.jpg"}
            lable={"Шоколад"}
          />
          <FoodCard
            name={values[4]}
            image={"./images/appleChips.jpg"}
            lable={"Яблучні чипси"}
          />
          <FoodCard
            name={values[5]}
            image={"./images/sandwichCheese.jpg"}
            lable={"Бутерброди з сиром та огірками"}
          />
        </StyledFoodList>
      </CheckboxBlock>
    </Page>
  );
};
