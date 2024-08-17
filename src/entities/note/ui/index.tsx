import React from "react";
import { Textarea } from "shared/ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { selectNote, changeNote } from "../model/slice";

export const Note = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNote);
  return (
    <Textarea
      value={value}
      placeholder="Enter you note"
      onChange={({ currentTarget }) => {
        dispatch(changeNote(currentTarget.value));
      }}
    />
  );
};
