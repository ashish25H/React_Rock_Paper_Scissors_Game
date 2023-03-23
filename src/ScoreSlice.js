import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const scourSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = scourSlice.actions;
export default scourSlice.reducer;
