import React from "react";
import "./LoginButton.css";

function LoginButton({ openModal, setOpenModal }) {
  return (
    <div className="sign-up">
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
