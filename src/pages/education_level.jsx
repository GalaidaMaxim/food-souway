import { RadioBlock } from "@/components/StyledForm";
import { Page } from "@/components/Page";

export default () => {
  const formDataLoader = (event) => {
    const data = { education_level: event.target.education_level.value };
    console.log(data);

    return data;
  };

  return (
    <Page
      formDataLoader={formDataLoader}
      prevParam={"family_income"}
      currentParam={"education_level"} //
      nextRoute={"/eating_habits"}
    >
      <RadioBlock>
        <h2>Освіта</h2>
        <div className="radiGroupt">
          <div>
            <label htmlFor="male">Середня</label>
            <input type="radio" name="education_level" value={1} />
          </div>
          <div>
            <label htmlFor="male">Коледж</label>
            <input type="radio" name="education_level" value={2} />
          </div>
          <div>
            <label htmlFor="male">Вища</label>
            <input type="radio" name="education_level" value={3} />
          </div>
          <div>
            <label htmlFor="male">Маю науковий ступінь</label>
            <input type="radio" name="education_level" value={4} />
          </div>
        </div>
      </RadioBlock>
    </Page>
  );
};
