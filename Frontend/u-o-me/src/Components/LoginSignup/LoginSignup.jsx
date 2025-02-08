import React, {useState} from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import signInHandler from '../../handlers/signin'
import createUserHandler from '../../handlers/signup'
const LoginSignup = () => {
    const[action,setAction] = useState("Login");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className ="inputs">
            {action==="Login"?<div></div>:<div className = "input" id="firstNInput">
                <img scr={user_icon} alt=""/>
                <input type="text" placeholder="First Name"/>
            </div>}
            {action==="Login"?<div></div>:<div className = "input" id="lastNInput">
                <img scr={user_icon} alt=""/>
                <input type="text" placeholder="Last Name"/>
            </div>}
            <div className = "input" id="emailInput">
                <img scr={email_icon} alt=""/>
                <input type="email" placeholder="Email"/>
            </div>
            <div className = "input" id="passwordInput">
                <img scr={password_icon} alt=""/>
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        <div className="submit-container">
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{
                if (action === "Login"){
                    signInHandler(document.getElementById("emailInput").value, document.getElementById("passwordInput").value);
                }else{
                    setAction("Login");
                }}}>Login</div>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{
                if (action === "Sign Up"){
                    createUserHandler(document.getElementById("firstNInput").value, document.getElementById("lastNInput").value,document.getElementById("emailInput").value, document.getElementById("passwordInput").value);
                }else{
                    setAction("Sign Up");
                }}}
            >Sign Up</div>
        </div>
    </div>
  )
}

export default LoginSignup