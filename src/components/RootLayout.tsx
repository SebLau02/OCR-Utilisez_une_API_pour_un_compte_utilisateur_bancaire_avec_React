import React from "react";
import TopBar from "./TopBar";
import Footer from "./Footer/Footer";

interface Props {
  children: React.ReactNode;
}
function RootLayout({ children }: Props) {
  return (
    <>
      <TopBar />
      {children}

      <Footer />
    </>
  );
}

export default RootLayout;
