import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    
      <nav className="navbar">
        <div className="img-logo">
          <a href="logo">
            <img
              src={require("../../assets/logos/logo-tierra-batida 1.svg").default}
              alt="Logo"
              className="logoTB"
            ></img>
          </a>
        </div>

        <div className="sign-up">
          <button className="sign-up-button">Sign Up</button>
        </div>
      </nav>
    
  );
}

export { Navbar };
