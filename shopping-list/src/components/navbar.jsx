import React, { Component } from "react";

//Stateless Functional Component

const NavBar = ({ totalItems }) => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">{totalItems}</span>
      </a>
    </nav>
  );
};

export default NavBar;
