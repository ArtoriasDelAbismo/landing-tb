import React from "react";
import "./LoginButton.css";

function LoginButton({ setOpenModal }) {
  return (
    <div className="sign-up top-9 mr-3">
      <button
        onClick={(event) => {
          console.log(event);
          setOpenModal(true);
        }}
        className="sign-up-button"
      >
        Log In
      </button>
    </div>
  );
}

export { LoginButton };
