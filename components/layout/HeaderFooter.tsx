import React, { ReactNode } from "react";
import Header from "../Header";

type Props = {
  children: ReactNode;
};

const HeaderFooter = ({ children }: Props) => {
  return (
    <div className="absolute flex flex-col h-screen w-full">
      <Header />
      <main className="relative flex flex-1 max-w-screen-lg w-full mx-auto">{children}</main>
    </div>
  );
};

export default HeaderFooter;
