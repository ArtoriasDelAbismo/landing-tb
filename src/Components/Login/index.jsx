import "./Login.css";
import { useContext } from "react";
import { LandingContext } from "../Context";

function Login({ openModal, setOpenModal }) {

  const context = useContext(LandingContext);
  const closeModal = () => setOpenModal(!openModal)

  return (
    <div className="login">
      <div className="form-container">
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            onChange={context.emailOnChange}
            value={context.newUserValue}
            type="text"
            name="email"
            placeholder="momojour@gmail.com"
            className="input input-email"
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            onChange={context.passwordOnChange}
            value={context.newPasswordValue}
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />

          <button
            onClick={closeModal}
            className="primary-button login-button bg-orangeTB"
            type="button"
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>

        <button
          onClick={closeModal}
          className="secondary-button signup-button bg-textInputField"
          type="button"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export { Login };
