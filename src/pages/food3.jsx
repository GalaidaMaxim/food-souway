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
    "syrnyk",
    "omlet",
    "zapikanka",
    "chickenVegitables",
    "beens",
    "lazyVarenyks",
  ];
  const formDataLoader = (event) => {
    const obj = {};
    values.forEach((item) => {
      obj[item] = event.target[item].checked;
    });
    const data = { food3: JSON.stringify(obj) };
    return data;
  };

  return (
    <Page
      formDataLoader={formDataLoader}
      prevParam={"food2"}
      currentParam={"food3"} //food2
      nextRoute={"/food4"}
    >
      <CheckboxBlock>
        <h2>Оберіть страви, які б ви вибрали на вечерю</h2>
        <StyledFoodList>
          <FoodCard
            name={values[0]}
            image={"./images/syrnyk.jpg"}
            lable={"Сирники зі сметаною"}
          />
          <FoodCard
            name={values[1]}
            image={"./images/omlet.jpg"}
            lable={"Омлет з помідорами та зеленню"}
          />
          <FoodCard
            name={values[2]}
            image={"./images/zapikanka.jpg"}
            lable={"Несолодка сирна запіканка із зеленню"}
          />
          <FoodCard
            name={values[3]}
            image={"./images/chickenVegitables.jpg"}
            lable={"Курка, запечена з овочами"}
          />
          <FoodCard
            name={values[4]}
            image={"./images/beens.jpg"}
            lable={"Тушкована квасоля з овочами"}
          />
          <FoodCard
            name={values[5]}
            image={"./images/lazyVarenyks.jpg"}
            lable={"Ліниві вареники із кисломолочного сиру"}
          />
        </StyledFoodList>
      </CheckboxBlock>
    </Page>
  );
};
