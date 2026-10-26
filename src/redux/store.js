import { configureStore } from "@reduxjs/toolkit";
import { infoSlice } from "./slices";

export const store = configureStore({
  reducer: {
    info: infoSlice.reducer,
  },
});
