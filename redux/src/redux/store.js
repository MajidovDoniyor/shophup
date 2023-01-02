import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import text from "./text";

export const store = configureStore({
  reducer: { counter, text },
});
