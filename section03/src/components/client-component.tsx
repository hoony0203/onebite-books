"use client";

import { ReactNode } from "react";
import SeverComponent from "./server-component";

const ClientComponent = ({ children }: { children: ReactNode }) => {
  console.log("클라이언트 컴포넌트");

  return <div>{children}</div>;
};

export default ClientComponent;
