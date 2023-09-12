import React from "react";
import "./Main.css";

function Main() {
  return (
    <section className="main-container">
      <div className="text-container-box">
        <h1 className="animated fadeIn">
          Keep track of your racket customization!
        </h1>
        <p className="animated fadeIn">Check your racket string and tension</p>
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your name"
          className="animated pulse"
        ></input>
        <button className="submit-button">Submit</button>
      </div>
    </section>
  );
}

export { Main };
