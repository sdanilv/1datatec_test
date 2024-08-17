import React, { useState } from "react";
import { Input } from "shared/ui/input";
import { Button } from "shared/ui/button";
import { Container } from "shared/ui/container";

// DISCOUNT2024

const validReg = /\w+\d+/;

export const DiscountValidate = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");

  const validateHandler = () => {
    let error = "";
    if (!validReg.test(code)) error = "Wrong code";

    if (error) setError(error);
    else setSuccess(true);
  };

  return (
    <Container>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          placeholder="Enter discount code"
          maxLength={12}
          onChange={({ target }) => {
            setCode(target.value);
            setError("");
            setSuccess(false);
          }}
          value={code}
        />
        <Button onClick={validateHandler}>Check</Button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">You have successfully applied the discount</div>}
    </Container>
  );
};
