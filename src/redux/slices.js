import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "info",
  initialState: {
    value: {
      email: "23",
      gender: "123",
      age: "123",
      jobe_status: "123",
      family_income: "123",
      education_level: "123",
      eating_habits: 123,
      food1: 123,
      food2: 123,
      food3: 123,
      food4: 1234,
    },
  },
  reducers: {
    setInfo(state, { payload }) {
      state.value = { ...state.value, ...payload };
    },
  },
});

export const { setInfo } = infoSlice.actions;
