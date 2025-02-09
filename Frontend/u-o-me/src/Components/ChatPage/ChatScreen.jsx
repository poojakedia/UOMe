import React from "react";
import Bubble from "./ChatPage"; // Import your Bubble component
import "./ChatScreen.css"; // Make sure your styles are applied
import { useNavigate } from 'react-router-dom';
import Bar from "../TugOfWar/TugOfWar.jsx";
import { getBalance1, getBalance2, updateBalances } from "../../handlers/chatHandler.js";

const ChatScreen = ({ chat_id, sender, user }) => {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("/friends")
  }

  const handlepay = async() =>{
    const b1 = await getBalance1(chat_id);
    const b2 = await getBalance2(chat_id);
    await updateBalances(chat_id, sender, -b1);
    await updateBalances(chat_id, user, -b2);
  }
  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <button className = "backbutton"
        onClick={handleNavigate}>Back</button>
        <h2>John Doe</h2>
        <button onClick={handlepay}>Pay</button>
      </div>

      {/* Chat Bubbles */}
      <Bubble chat_id={chat_id} sender={sender} />
      <Bar chat_id={chat_id}/>
    </div>
    
  );
};

export default ChatScreen;