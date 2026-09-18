import React from "react";
import TopBar from "./TopBar";

interface Props {
  children: React.ReactNode;
}
function RootLayout({ children }: Props) {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
}

export default RootLayout;
