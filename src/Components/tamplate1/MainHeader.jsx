import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginProtal from "../loging/LoginProtal";
import Login from "../loging/Login";

function MainHeader() {
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
          <Link to="/login">
            <Login />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MainHeader;
