import { CheckboxBlock } from "@/components/StyledForm";
import { Page } from "@/components/Page";
import { createHabits } from "@/components/StyledForm";

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
        <h2>Ваші харчові звички здорового харчування</h2>
        <div className="items">
          <div>
            <label htmlFor="">Вживаю овочі та фрукти</label>
            <input type="checkbox" name="fruts" value={1} />
          </div>
          <div>
            <label htmlFor="">Менше вживання м’яса та м’ясних виробів</label>
            <input type="checkbox" name="meat" value={2} />
          </div>
          <div>
            <label htmlFor="">Зменшення цукру в харчових продуктах</label>
            <input type="checkbox" name="shugar" value={3} />
          </div>
          <div>
            <label htmlFor="">
              Обмежене споживання трансжирів та шкідливих жирів (смажене,
              фастфуду, випічки)
            </label>
            <input type="checkbox" name="fat" value={4} />
          </div>
          <div>
            <label htmlFor="">вживання цільнозернових продуктів</label>
            <input type="checkbox" name="zerno" value={5} />
          </div>
          <div>
            <label htmlFor="">
              вживання продуктів з альтернативних джерел білка (соя, горох,
              водорості)
            </label>
            <input type="checkbox" name="protein" value={6} />
          </div>

          <div>
            <label htmlFor="">збільшення кількості споживання води</label>
            <input type="checkbox" name="water" value={7} />
          </div>
          <div>
            <label htmlFor="">
              застосування принципів інтуїтивного харчування
            </label>
            <input type="checkbox" name="int" value={8} />
          </div>
          <div>
            <label htmlFor="">
              вживання суперфудів (чіа, ягоди, горіхи, насіння льону тощо)
            </label>
            <input type="checkbox" name="superfood" value={9} />
          </div>
          <div>
            <label htmlFor="">
              відвідування закладів громадського харчування зі здоровою їжею
            </label>
            <input type="checkbox" name="protein" value={10} />
          </div>
        </div>
      </CheckboxBlock>
    </Page>
  );
};
