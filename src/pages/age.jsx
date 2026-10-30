import { NamedInput } from "@/components/StyledForm";
import { Page } from "@/components/Page";

export default () => {
  const formDataLoader = (event) => {
    const data = { age: event.target.age.valueAsNumber };
    console.log(data);
    return data;
  };

  return (
    <Page
      formDataLoader={formDataLoader}
      prevParam={"gender"}
      currentParam={"age"}
      nextRoute={"/jobe_status"}
    >
      <NamedInput>
        <label htmlFor="age">Скільки вам повних років?</label>
        <input type="number" id="age" />
      </NamedInput>
    </Page>
  );
};
