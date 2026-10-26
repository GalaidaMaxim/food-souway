import styled from "@emotion/styled";

export const StyledForm = styled.form`
  min-height: 80vh;
  width: 900px;
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
`;
export const Input = styled.div`
  margin-top: 30px;
`;

export const NamedInput = styled(Input)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & input {
    height: 30px;
  }
`;

export const RadioBlock = styled(Input)`
  & .radiGroupt {
    display: flex;
    justify-content: left;
    margin-top: 20px;
    gap: 20px;
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
