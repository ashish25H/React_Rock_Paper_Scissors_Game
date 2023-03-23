import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from '../ScoreSlice';

export const Store = configureStore({
  reducer: {
    score:scoreReducer,
  },
});
