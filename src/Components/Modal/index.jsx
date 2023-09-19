import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import "transition-style";

function Modal({ children }) {
    return ReactDOM.createPortal(
      <div className="modalBackground" transition-style="in:custom:circle-swoop">
        {children}
      </div>,
      document.getElementById("modal")
    );
  }


export { Modal };
