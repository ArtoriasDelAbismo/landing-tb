import React, { createContext } from "react";
import { useState } from "react";

export const LandingContext = createContext();

function ContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  

  const [newUserValue, setNewUserValue] = useState("");
  const [newPasswordValue, setNewPasswordValue] = useState("")
  
  const emailOnChange = (event) => setNewUserValue(event.target.value)
  const passwordOnChange = (event) => {setNewPasswordValue(event.target.value)}


  return (
    <LandingContext.Provider
      value={{
        openModal,
        setOpenModal,
        newUserValue,
        newPasswordValue,
        emailOnChange,
        passwordOnChange,
      }}
    >
      {children}
    </LandingContext.Provider>
  );
}

export { ContextProvider };
