import { CheckboxBlock } from "@/components/StyledForm";
import { Page } from "@/components/Page";
import { createInfo } from "@/service/createHabits";
import { infoParams } from "@/service/dataArrs";

export default () => {
  const formDataLoader = async (event) => {
    const data = { info_source: createInfo(event.target, infoParams) };
    return data;
  };

  return (
    <Page
      formDataLoader={formDataLoader}
      prevParam={"choise_paramiters"}
      currentParam={"info_source"} //eating_habits
      nextRoute={"/end"}
    >
      <CheckboxBlock>
        <h2>
          З яких джерел Ви найчастіше отримуєте інформацію про здорове
          харчування? (Можна обрати кілька варіантів)
        </h2>
        <div className="items">
          <div>
            <label htmlFor="">лікарі та дієтологи</label>
            <input type="checkbox" name={infoParams[0]} value={1} />
          </div>
          <div>
            <label htmlFor="">Інтернет-сайти та блоги про здоров'я</label>
            <input type="checkbox" name={infoParams[1]} value={1} />
          </div>
          <div>
            <label htmlFor="">Телебачення та радіо</label>
            <input type="checkbox" name={infoParams[2]} value={1} />
          </div>
          <div>
            <label htmlFor="">Друзі та знайомі</label>
            <input type="checkbox" name={infoParams[3]} value={1} />
          </div>
          <div>
            <label htmlFor="">Соціальні мережі</label>
            <input type="checkbox" name={infoParams[4]} value={1} />
          </div>
          <div>
            <label htmlFor="">Інше</label>
            <input type="checkbox" name={infoParams[5]} value={1} />
          </div>
        </div>
      </CheckboxBlock>
    </Page>
  );
};
