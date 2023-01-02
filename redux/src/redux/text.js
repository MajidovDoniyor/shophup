import { createSlice } from "@reduxjs/toolkit";

const text = createSlice({
  name: "text",
  initialState: { text: "doniyor" },
  reducers: {
    uzgartir: (state, action) => {
      if (state.text === "doniyor") state.text = "majidov";
      else state.text = "doniyor";
    },
  },
});

export const { uzgartir } = text.actions;

export default text.reducer;
