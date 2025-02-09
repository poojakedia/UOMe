import React from "react";
import Bubble from "./ChatPage"; // Import your Bubble component
import "./ChatScreen.css"; // Make sure your styles are applied
import { useNavigate } from 'react-router-dom';
import Bar from "../TugOfWar/TugOfWar.jsx";

const ChatScreen = ({ chat_id, sender }) => {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("/friends")
  }
  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <button className = "backbutton"
        onClick={handleNavigate}>Back</button>
        <h2>John Doe</h2>
        <button className="paybutton">Pay</button>
      </div>

      {/* Chat Bubbles */}
      <Bubble chat_id={chat_id} sender={sender} />
      <Bar chat_id={chat_id}/>
    </div>
    
  );
};

export default ChatScreen;