import { configureStore } from "@reduxjs/toolkit";
import watchlistSliceReducer from "./watchlistSlice";

export const store = configureStore({
  reducer: {
    watchlistSlice: watchlistSliceReducer,
  },
});
