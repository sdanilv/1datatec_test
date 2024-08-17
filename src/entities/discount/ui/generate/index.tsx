import React, { useState } from "react";
import { Button } from "shared/ui/button";
import { Container } from "shared/ui/container";

const generateRandomString = (length: number) => {
  let result = "";

  for (let i = 0; i < length; i += 1) {
    // Генерируем случайное число: 0 или 1, чтобы выбрать между заглавной и строчной буквой
    const isUpperCase = Math.random() < 0.5;
    const charCode = isUpperCase
      ? 65 + Math.floor(Math.random() * 26) // Заглавные буквы 'A'-'Z'
      : 97 + Math.floor(Math.random() * 26); // Строчные буквы 'a'-'z'

    result += String.fromCharCode(charCode);
  }

  return result;
};

export const DiscountGenerate = () => {
  const [code, setCode] = useState("");

  const generateCodeHandler = () => {
    const stringLength = Math.floor(Math.random() * 11);
    const code =
      generateRandomString(stringLength) + Math.floor(Math.random() * 10 ** (12 - stringLength));
    setCode(code);
  };
  return (
    <Container>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Button onClick={generateCodeHandler}>Discount Code Generation</Button>
        <div>{code}</div>
      </div>
    </Container>
  );
};
