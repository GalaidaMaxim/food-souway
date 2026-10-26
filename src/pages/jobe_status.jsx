import { RadioBlock } from "@/components/StyledForm";
import { Page } from "@/components/Page";

export default () => {
  const formDataLoader = (event) => {
    const data = { jobe_status: event.target.jobe_status.value };
    console.log(data);

    return data;
  };

  return (
    <Page
      formDataLoader={formDataLoader}
      prevParam={"age"}
      currentParam={"jobe_status"}
      nextRoute={"/fix"}
    >
      <RadioBlock>
        <h2>Статус зайнятості</h2>
        <div className="radiGroupt">
          <div>
            <label htmlFor="male">Працевлаштований</label>
            <input type="radio" name="jobe_status" value={1} />
          </div>
          <div>
            <label htmlFor="male">Безробітний</label>
            <input type="radio" name="jobe_status" value={2} />
          </div>
          <div>
            <label htmlFor="male">Студент</label>
            <input type="radio" name="jobe_status" value={3} />
          </div>
          <div>
            <label htmlFor="male">Пенсіонер</label>
            <input type="radio" name="jobe_status" value={4} />
          </div>
          <div>
            <label htmlFor="male">Інший</label>
            <input type="radio" name="jobe_status" value={5} />
          </div>
        </div>
      </RadioBlock>
    </Page>
  );
};
