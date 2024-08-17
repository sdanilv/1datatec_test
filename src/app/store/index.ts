import { configureStore } from "@reduxjs/toolkit";
import { noteSlice } from "entities/note";
import { optionSlice } from "entities/option";

export const store = configureStore({
  reducer: {
    note: noteSlice.reducer,
    option: optionSlice.reducer,
  },
});
