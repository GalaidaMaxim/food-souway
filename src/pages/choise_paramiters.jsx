import { CheckboxBlock } from "@/components/StyledForm";
import { Page } from "@/components/Page";
import { createInfo } from "@/service/createHabits";
import { choiceParams } from "@/service/dataArrs";

export default () => {
  const formDataLoader = (event) => {
    const data = { choise_paramiters: createInfo(event.target, choiceParams) };
    return data;
  };

  return (
    <Page
      formDataLoader={formDataLoader}
      prevParam={"food4"}
      currentParam={"choise_paramiters"} //eating_habits
      nextRoute={"/food112"}
    >
      <CheckboxBlock>
        <h2>Що найчастіше впливає на Ваш вибір продуктів?</h2>
        <div className="items">
          <div>
            <label htmlFor="">Cклад продукту</label>
            <input type="checkbox" name={choiceParams[0]} value={1} />
          </div>
          <div>
            <label htmlFor="">Ціна</label>
            <input type="checkbox" name={choiceParams[1]} value={1} />
          </div>
          <div>
            <label htmlFor="">Місце купівлі</label>
            <input type="checkbox" name={choiceParams[2]} value={1} />
          </div>
          <div>
            <label htmlFor="">Pеклама</label>
            <input type="checkbox" name={choiceParams[3]} value={1} />
          </div>
          <div>
            <label htmlFor="">Популярність бренду</label>
            <input type="checkbox" name={choiceParams[4]} value={1} />
          </div>
          <div>
            <label htmlFor="">Екологічне маркування</label>
            <input type="checkbox" name={choiceParams[5]} value={1} />
          </div>
        </div>
      </CheckboxBlock>
    </Page>
  );
};
