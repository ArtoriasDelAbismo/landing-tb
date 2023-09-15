import React from "react";
import "./Login.css";

function Login({ openModal, setOpenModal }) {

  
  return (
    <div className="login">
      <div className="form-container">
        <form action="/" className="form" >
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="momojour@gmail.com"
            className="input input-email"
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />

          <button 
          onClick={() => {
            setOpenModal(!openModal);
          }}
          className="primary-button login-button"
          type="button"
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>

        <button 
        onClick={() => {
          setOpenModal(!openModal);
        }}
        className="secondary-button signup-button"
        type="button"
        >Sign up</button>
      </div>
    </div>
  );
}

export { Login };
