import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "info",
  initialState: {
    value: {
      email: "23",
      gender: "123",
    },
  },
  reducers: {
    setInfo(state, { payload }) {
      state.value = { ...state.value, ...payload };
    },
  },
});

export const { setInfo } = infoSlice.actions;
