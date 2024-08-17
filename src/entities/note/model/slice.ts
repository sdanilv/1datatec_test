/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INoteState {
  value: string;
}

const initialState: INoteState = {
  value: "",
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    changeNote(state, { payload }: PayloadAction<string>) {
      state.value = payload;
    },
  },
});

export const selectNote = (state: { note: INoteState }) => state.note.value;
export const { changeNote } = noteSlice.actions;
