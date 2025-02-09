import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing/Landing'
import ChatScreen from './Components/ChatPage/ChatScreen'
import FriendsPage from './Components/FriendsPage/FriendsPage'
import LoginSignup from './Components/LoginSignup/LoginSignup'

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  // return (
  //   <BrowserRouter>
  //   <Routes>
  //   <Route path="/" element={<Landing />}/>
  //   </Routes>
  //   </BrowserRouter>
    
  // );

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing />}/>
    <Route path="/login" element={<LoginSignup />}/>
    <Route path="/friends" element={<FriendsPage />}/>
    <Route path="/chat" element={<ChatScreen 
    chat_id="2VN4N96qdXVnywAnGaJ8vKi1Qny1 3EI2zYnQdsUk1FB7kaJIq4I64Ce2"
    sender="2VN4N96qdXVnywAnGaJ8vKi1Qny1"/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
