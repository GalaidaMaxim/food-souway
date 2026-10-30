import styled from "@emotion/styled";

export const StyledForm = styled.form`
  min-height: 90vh;

  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  margin-top: 30px;
  margin-bottom: 80px;
  border: 3px solid brown;
  box-shadow: 10px 10px 10px black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  @media screen and (min-width: 1000px) {
    width: 900px;
    min-height: 80vh;
  }
  & h1 {
    @media screen and (max-width: 767px) {
      font-size: 24px;
    }
  }
  & h2 {
    font-size: 24px;

    @media screen and (min-width: 768px) {
      font-size: 32px;
    }
  }
  & .error {
    color: red;
  }
  & p {
    margin-top: 40px;
  }
`;
export const Input = styled.div`
  margin-top: 30px;
`;

export const NamedInput = styled(Input)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & label {
    font-size: 32px;
    font-weight: 700;
  }
  & input {
    margin-top: 80px;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid brown;
    padding: 20px;
    font-size: 24px;
    height: 30px;
  }
`;

export const RadioBlock = styled(Input)`
  & .radiGroupt {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-top: 100px;
    gap: 20px;
    & label {
      font-size: 24px;
    }
    & input {
      margin-left: 10px;
    }
  }
`;

export const CheckboxBlock = styled(Input)`
  & .items {
    display: flex;
    justify-content: left;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
    & div {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      gap: 20px;
    }
  }
`;

export const createHabits = (form) => {
  const arr = [];
  if (form.fruts.checked) {
    arr.push(1);
  }
  if (form.meat.checked) {
    arr.push(2);
  }
  if (form.shugar.checked) {
    arr.push(3);
  }
  return arr;
};
