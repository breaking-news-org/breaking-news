import React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";

function MainLayout({ children }) {
  // navlinks
  const navLinks = [
    { url: "home", label: "HOME" },
    { url: "search", label: "SEARCH" },
    { url: "contacts", label: "ABOUT" },
  ];

  return (
    <div id="main">
      <Header>
        <Navbar links={navLinks} />
      </Header>
      <div id="main-content" className={"container p-4"}>
        {children}
      </div>
      <footer className="container bottom-0 py-4 border-top">
        <div className="row">
          <div className="col-12 col-md-6 fw-bold">FDP Limited</div>
          <div className="col-12 col-md-6 text-end">
            All right reserved, &#169; Copyright 2022
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;