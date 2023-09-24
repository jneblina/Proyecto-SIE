import React from "react";
import Nav from "./Nav";

const SieLayout = ({ children }) => {
  //Aquí se puede usar el hook useSession() de NextAuth

  return (
    <div className="flex flex-row">
      <Nav />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default SieLayout;
