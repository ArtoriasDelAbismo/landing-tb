import React from "react";
import ReactDOM from "react-dom";
import './Modal.css'

function Modal({children, openModal}) {
    
    return ReactDOM.createPortal(
     <div className="modalBackground">
         {children}
     </div>,
     document.getElementById('modal')
    )
 }
 
 export { Modal }