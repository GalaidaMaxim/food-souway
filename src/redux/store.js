import { configureStore } from "@reduxjs/toolkit";
import { infoSlice, loadingSlice } from "./slices";

export const store = configureStore({
  reducer: {
    info: infoSlice.reducer,
    loading: loadingSlice.reducer,
  },
});
