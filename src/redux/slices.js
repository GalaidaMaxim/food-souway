import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "info",
  initialState: {
    value: { email: "qwe" },
  },
  reducers: {
    setInfo(state, { payload }) {
      state.value = { ...state.value, ...payload };
    },
  },
});

export const { setInfo } = infoSlice.actions;
