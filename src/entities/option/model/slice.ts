/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Option {
  A = "A",
  B = "B",
  C = "C",
}

export interface IOptionState {
  value: Option | null;
}

const initialState: IOptionState = {
  value: null,
};

export const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    changeOption(state, { payload }: PayloadAction<Option>) {
      state.value = payload;
    },
  },
});

export const selectOption = (state: { option: IOptionState }) => state.option.value;
export const { changeOption } = optionSlice.actions;
