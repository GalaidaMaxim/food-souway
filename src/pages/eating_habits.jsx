import { CheckboxBlock } from "@/components/StyledForm";
import { Page } from "@/components/Page";
import { createHabits } from "@/service/createHabits";
import { habits } from "@/service/dataArrs";

export default () => {
  const formDataLoader = (event) => {
    const data = { eating_habits: createHabits(event.target) };
    return data;
  };

  return (
    <Page
      formDataLoader={formDataLoader}
      prevParam={"family_income"}
      currentParam={"eating_habits"} //eating_habits
      nextRoute={"/food1"}
    >
      <CheckboxBlock>
        <h2>
          Ваші харчові звички здорового харчування (Можна обрати кілька
          варіантів)
        </h2>
        <div className="items">
          <div>
            <label htmlFor="">Вживаю овочі та фрукти</label>
            <input type="checkbox" name={habits[0]} value={1} />
          </div>
          <div>
            <label htmlFor="">Менше вживання м’яса та м’ясних виробів</label>
            <input type="checkbox" name={habits[1]} value={2} />
          </div>
          <div>
            <label htmlFor="">Зменшення цукру в харчових продуктах</label>
            <input type="checkbox" name={habits[2]} value={3} />
          </div>
          <div>
            <label htmlFor="">
              Обмежене споживання трансжирів та шкідливих жирів (смажене,
              фастфуду, випічки)
            </label>
            <input type="checkbox" name={habits[3]} value={4} />
          </div>
          <div>
            <label htmlFor="">Вживання цільнозернових продуктів</label>
            <input type="checkbox" name={habits[4]} value={5} />
          </div>
          <div>
            <label htmlFor="">
              Вживання продуктів з альтернативних джерел білка (соя, горох,
              водорості)
            </label>
            <input type="checkbox" name={habits[5]} value={6} />
          </div>

          <div>
            <label htmlFor="">Збільшення кількості споживання води</label>
            <input type="checkbox" name={habits[6]} value={7} />
          </div>
          <div>
            <label htmlFor="">
              Застосування принципів інтуїтивного харчування
            </label>
            <input type="checkbox" name={habits[7]} value={8} />
          </div>
          <div>
            <label htmlFor="">
              Вживання суперфудів (чіа, ягоди, горіхи, насіння льону тощо)
            </label>
            <input type="checkbox" name={habits[8]} value={9} />
          </div>
          <div>
            <label htmlFor="">
              Відвідування закладів громадського харчування зі здоровою їжею
            </label>
            <input type="checkbox" name={habits[9]} value={10} />
          </div>
        </div>
      </CheckboxBlock>
    </Page>
  );
};
