import { configureStore } from "@reduxjs/toolkit";
import counter from "./action/counter";
import text from "./action/text";
import crud from "./action/crud";

export const store = configureStore({
  reducer: { counter, text, crud },
});
