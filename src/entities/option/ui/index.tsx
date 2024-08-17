import React from "react";
import { RadioGroup, RadioGroupItem } from "shared/ui/radio-group";
import { useDispatch, useSelector } from "react-redux";
import { selectOption, Option, changeOption } from "entities/option/model/slice";
import { Label } from "shared/ui/label";
import { Container } from "shared/ui/container";

export const OptionComponent = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectOption);

  return (
    <Container>
      <RadioGroup
        value={value || undefined}
        onValueChange={(option) => {
          dispatch(changeOption(option as Option));
        }}
      >
        Please choose your option
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={Option.A} id="option-a" />
          <Label htmlFor="option-a">Option A</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={Option.B} id="option-b" />
          <Label htmlFor="option-b">Option B</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={Option.C} id="option-c" />
          <Label htmlFor="option-c">Option C</Label>
        </div>
      </RadioGroup>
    </Container>
  );
};
