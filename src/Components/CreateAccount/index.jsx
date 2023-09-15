import { React } from "react"
import { LandingContext } from "../Context";
import { useContext } from "react";
import "./CreateAccount.css";

function CreateAccount() {
  const context = useContext(LandingContext);

  const onChange = (event) => {
    context.setNewUserValue(event.target.value);
  };


  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">Create your account</h1>

        <form action="/" className="form">
          <div className="form">
            <label for="name" className="label">
              Name
            </label>
            <input
              onChange={onChange}
              type="text"
              id="name"
              placeholder="Momo"
              className="input input-name"
            />

            <label for="email" className="label">
              Email
            </label>
            <input
              onChange={onChange}
              type="text"
              id="email"
              placeholder="momojour@gmail.com"
              className="input input-email"
            />

            <label for="password" className="label">
              Password
            </label>
            <input
              onChange={onChange}
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />
          </div>

          <input
            type="submit"
            value="Sign Up"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
}

export { CreateAccount };
