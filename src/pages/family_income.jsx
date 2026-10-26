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
      prevParam={"jobe_status"}
      currentParam={"family_income"} //
      nextRoute={"/fix"}
    >
      <RadioBlock>
        <h2>Дохід родини</h2>
        <div className="radiGroupt">
          <div>
            <label htmlFor="male">до 20000</label>
            <input type="radio" name="family_income" value={1} />
          </div>
          <div>
            <label htmlFor="male">до 30000</label>
            <input type="radio" name="family_income" value={2} />
          </div>
          <div>
            <label htmlFor="male">до 40000</label>
            <input type="radio" name="family_income" value={3} />
          </div>
          <div>
            <label htmlFor="male">50000 і вище</label>
            <input type="radio" name="family_income" value={4} />
          </div>
        </div>
      </RadioBlock>
    </Page>
  );
};
