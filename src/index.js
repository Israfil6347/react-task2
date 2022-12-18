import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";
import About from "./Components/About";
import Contact from "./Components/contact";
import AboutDetails from "./Components/AboutDetails";
import User from "./Components/tamplate2/User";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Welcome />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Welcome />} />
        <Route path="/login" element={<Welcome />} />
        <Route path="/user" element={<User />} />
        <Route path="/about-details/:aboutDetail" element={<AboutDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
