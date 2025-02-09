import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import signInHandler from '../../handlers/signin';
import createUserHandler from '../../handlers/signup';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInHandler(email, password);
  };

  const handleSignUp = () => {
    createUserHandler(firstName, lastName, email, password);
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <>
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input 
                type="text" 
                placeholder="First Name" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
              />
            </div>
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input 
                type="text" 
                placeholder="Last Name" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
              />
            </div>
          </>
        )}
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => {
                setEmail((e.target.value).trim())}} 
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
      </div>
      <div className="submit-container">
        <div 
          className={action === "Sign Up" ? "submit gray" : "submit"} 
          onClick={() => {
            if (action === "Login") {
              handleSignIn();
            } else {
              setAction("Login");
            }
          }}
        >
          Login
        </div>
        <div 
          className={action === "Login" ? "submit gray" : "submit"} 
          onClick={() => {
            if (action === "Sign Up") {
              handleSignUp();
            } else {
              setAction("Sign Up");
            }
          }}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
