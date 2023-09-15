import React from "react";
import { Navbar } from "./Components/Navbar";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";
import { Login } from "./Components/Login";
import { Modal } from "./Components/Modal";
import { LoginButton } from "./Components/LoginButton";
import { useState } from "react";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar />
      <Main />
      <LoginButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></LoginButton>
      <Footer />
      {openModal && (
        <Modal>
          <Login setOpenModal={setOpenModal} openModal={openModal}></Login>
        </Modal>
      )}
    </>
  );
}

export default App;
