import React, { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => (
  <div className="w-full max-w-sm space-y-1 border p-4 rounded">{children}</div>
);
