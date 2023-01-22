import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8888/human";

export const crudGet = createAsyncThunk(
  "crudGet",
  async (payload, { dispatch }) => {
    await axios.get(url).then((res) => {
      console.log(res);
      dispatch(dataState(res.data));
    });
  }
);

export const crudPost = createAsyncThunk(
  "cruddelete",
  async (data, { dispatch }) => {
    await axios.post(url, data).then((res) => {
      dispatch(crudGet());
    });
  }
);

export const crudPut = createAsyncThunk(
  "crudPut",
  async (data, { dispatch }) => {
    await axios.put(`${url}/${data.id}`, data.data).then((res) => {
      dispatch(crudGet());
    });
  }
);

export const crudDelete = createAsyncThunk(
  "cruddelete",
  async (id, { dispatch }) => {
    await axios.delete(`${url}/${id}`).then((res) => {
      dispatch(crudGet());
    });
  }
);

const crudApi = createSlice({
  name: "crudApi",
  initialState: { data: [], status: "" },
  reducers: {
    dataState: (state, action) => {
      state.data = action.payload;
      state.action = "succes";
    },
  },
  extraReducers: {
    [crudGet.pending]: (state, action) => console.log("pending"),
    [crudGet.fulfilled]: (state, action) => console.log("fulfilled"),
    [crudGet.rejected]: (state, action) => console.log("rejected"),
    [crudDelete.pending]: (state, action) => console.log("pending"),
    [crudDelete.fulfilled]: (state, action) => console.log("fulfilled"),
    [crudDelete.rejected]: (state, action) => console.log("rejected"),
    [crudPost.pending]: (state, action) => console.log("pending"),
    [crudPost.fulfilled]: (state, action) => console.log("fulfilled"),
    [crudPost.rejected]: (state, action) => console.log("rejected"),
  },
});

export const { dataState } = crudApi.actions;
export default crudApi.reducer;
