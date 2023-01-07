import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const textGet = createAsyncThunk("textGet", async (payload) => {
  return fetch("https://jsonplaceholder.typicode.com/" + payload).then((res) =>
    res.json()
  );
});

const text = createSlice({
  name: "text",
  initialState: { text: [], status: "" },
  extraReducers: {
    [textGet.pending]: (state, action) => {
      state.status = "pending";
    },
    [textGet.fulfilled]: (state, action) => {
      state.text = action.payload;
      state.status = "succes";
    },
    [textGet.rejected]: (state, acion) => {
      state.status = "failed";
    },
  },
});

export default text.reducer;
