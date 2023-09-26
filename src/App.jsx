import React from "react";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Login } from "./Components/Login";
import { Modal } from "./Components/Modal";
import { LoginButton } from "./Components/LoginButton";
import { useState } from "react";
import { ContextProvider } from "./Components/Context";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Components/Routes/index";
import { ChatBot } from "./Components/ChatBot/index";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
          <LoginButton
            openModal={openModal}
            setOpenModal={setOpenModal}
          ></LoginButton>
          <ChatBot />
          <Footer />
          {openModal && (
            <Modal>
              <Login setOpenModal={setOpenModal} openModal={openModal}></Login>
            </Modal>
          )}
        </BrowserRouter>
      </ContextProvider>
  );
}

export default App;
