import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = "underline"

  return (
    <nav className="navbar flex py-5 px-8">
      <div className="img-logo">
        <a href="/">
          <img
            src={require("../../assets/logos/logo-tierra-batida 1.svg").default}
            alt="Logo"
            className="logoTB animated flipInY rounded-xl"
          ></img>
        </a>

      </div>

      <ul className="flex items-center gap-10 text-xl text-white mr-32 cursor-pointer">
        <li>momojour@gmail.com</li>
        <li>
          <NavLink 
          to="/My-Account"
          className={({ isActive }) => (isActive ? activeStyle : undefined)}>My Account</NavLink>
        </li>
        <li>Sign Out</li>
      </ul>
    </nav>
  );
}

export { Navbar };
