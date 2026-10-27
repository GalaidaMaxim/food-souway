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
