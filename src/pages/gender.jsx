import { RadioBlock } from "@/components/StyledForm";
import { Page } from "@/components/Page";

export default () => {
  const formDataLoader = (event) => {
    const data = { gender: event.target.gender.value };
    return data;
  };

  return (
    <Page
      formDataLoader={formDataLoader}
      prevParam={"email"}
      currentParam={"gender"}
      nextRoute={"/age"}
    >
      <RadioBlock>
        <h2>Яка ваша стать?</h2>
        <div className="radiGroupt">
          <div>
            <label htmlFor="male">Чоловіча</label>
            <input type="radio" name="gender" value={1} />
          </div>
          <div>
            <label htmlFor="male">Жіноча</label>
            <input type="radio" name="gender" value={2} />
          </div>
          <div>
            <label htmlFor="male">Інша</label>
            <input type="radio" name="gender" value={3} />
          </div>
        </div>
      </RadioBlock>
    </Page>
  );
};
