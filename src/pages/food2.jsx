import { CheckboxBlock } from "@/components/StyledForm";
import { Page } from "@/components/Page";
import styled from "@emotion/styled";
import { FoodCard } from "@/components/FoodFard";
import { StyledFoodList } from "@/components/StyledFoodList";

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
    "borsh",
    "chickenFile",
    "golubzhi",
    "heckPotato",
    "chickenSoup",
    "chicknRice",
  ];
  const formDataLoader = (event) => {
    const obj = {};
    values.forEach((item) => {
      obj[item] = event.target[item].checked;
    });
    const data = { food2: JSON.stringify(obj) };
    return data;
  };

  return (
    <Page
      formDataLoader={formDataLoader}
      prevParam={"food1"}
      currentParam={"food2"} //food2
      nextRoute={"/food3"}
    >
      <CheckboxBlock>
        <h2>Які страви ви обрали б на обід?</h2>
        <StyledFoodList>
          <FoodCard
            name={values[0]}
            image={"./images/borsh.jpg"}
            lable={"Український борщ зі сметаною"}
          />
          <FoodCard
            name={values[1]}
            image={"./images/chickedFile.jpg"}
            lable={"Запечене куряче філе з гречкою та салатом"}
          />
          <FoodCard
            name={values[2]}
            image={"./images/golubzhi.jpg"}
            lable={"Голубці з м'ясом і рисом"}
          />
          <FoodCard
            name={values[3]}
            image={"./images/heckPotato.jpg"}
            lable={"Запечений хек з картоплею та овочами"}
          />
          <FoodCard
            name={values[4]}
            image={"./images/chickenSoup.jpg"}
            lable={"Курячий суп із вермішеллю"}
          />
          <FoodCard
            name={values[5]}
            image={"./images/chicknRice.jpg"}
            lable={"Курячі тефтелі з рисом і тушкованими овочами"}
          />
        </StyledFoodList>
      </CheckboxBlock>
    </Page>
  );
};
