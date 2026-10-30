import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "info",
  initialState: {
    value: {},
  },
  reducers: {
    setInfo(state, { payload }) {
      state.value = { ...state.value, ...payload };
    },
  },
});

export const { setInfo } = infoSlice.actions;
