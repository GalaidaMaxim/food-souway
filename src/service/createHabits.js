import { habits, choiceParams } from "./dataArrs";

export const createHabits = (form) => {
  const arr = [];
  habits.forEach((item) => {
    arr.push({ [item]: form[item].checked });
  });
  console.log(arr);

  return arr;
};

export const createInfo = (form, info) => {
  const arr = [];
  info.forEach((item) => {
    arr.push({ [item]: form[item].checked });
  });
  return arr;
};
