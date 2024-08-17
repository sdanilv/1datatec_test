import React from "react";
import { OptionComponent } from "entities/option";
import { Note } from "entities/note";
import { DiscountGenerate, DiscountValidate } from "entities/discount";
import { Container } from "shared/ui";

export const Home = () => (
  <div className="flex flex-col items-center justify-center w-full gap-3">
    <h1 className="text-center text-3xl font-bold">Testing app</h1>
    <Container>
      <OptionComponent />
      <DiscountValidate />
      <DiscountGenerate />
      <Note />
    </Container>
  </div>
);
