import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import ChatPage from './Components/ChatPage/ChatPage';
import ReactDOM from "react-dom/client";
import Landing from './Components/Landing/Landing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing />}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
