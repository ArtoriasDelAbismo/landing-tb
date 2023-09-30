import "./ChatBotButton.css";

function ChatBotButton({ setOpenChatbot }) {
  return (
    <div>
      <span
        onClick={() => {
          setOpenChatbot(prev => !prev);
        }}
        className="chat-button-image"
      ></span>
    </div>
  );
}

export { ChatBotButton };
