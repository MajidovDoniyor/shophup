import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: { num: 0 },
  reducers: {
    qushish: (state, action) => {
      state.num += 1;
    },
    ayirish: (state, action) => {
      state.num -= 1;
    },
  },
});

export const { qushish, ayirish } = counter.actions;

export default counter.reducer;
