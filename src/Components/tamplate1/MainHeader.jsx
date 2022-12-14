import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginProtal from "../loging/LoginProtal";
import Login from "../loging/Login";

function MainHeader() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button onClick={()=> setIsOpen(true)} >Login</button>
        </li>
      </ul>
      <LoginProtal open={isOpen} onClose={()=>setIsOpen(false)}><Login></Login></LoginProtal>
    </div>
  );
}

export default MainHeader;
