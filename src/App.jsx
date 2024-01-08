import React from "react";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Login } from "./Components/Login";
import { Modal } from "./Components/Modal";
import { useState } from "react";
import { ContextProvider } from "./Components/Context";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Components/Routes/index";
import { ChatBot } from "./Components/ChatBot/index";
import { ChatBotButton } from "./Components/ChatBotButton";
import { SideMenu } from "./Components/SideMenu";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openChatBot, setOpenChatbot] = useState(false);

  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <SideMenu />
        <AppRoutes />

        <ChatBotButton
          openChatBot={openChatBot}
          setOpenChatbot={setOpenChatbot}
        />
        {openChatBot && <ChatBot />}
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

/*<LoginButton
          openModal={openModal}
          setOpenModal={setOpenModal}
></LoginButton>*/
