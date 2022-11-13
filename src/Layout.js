import Navbar from "./NavBar";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
