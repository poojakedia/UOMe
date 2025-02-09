import React from "react";
import Bubble from "./ChatPage"; // Import your Bubble component
import "./ChatScreen.css"; // Make sure your styles are applied

const ChatScreen = ({ chat_id, sender }) => {
  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <button>Back</button>
        <h2>John Doe</h2>
        <button>Pay</button>
      </div>

      {/* Chat Bubbles */}
      <Bubble chat_id={chat_id} sender={sender} />
    </div>
    
  );
};

export default ChatScreen;