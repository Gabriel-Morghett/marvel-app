import React, { ReactNode } from "react";

interface GridProps {
  children?: ReactNode;
}

export default function Grid({ children }: GridProps) {
  return <div className="grid">{children}</div>;
}