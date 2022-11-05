import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeGallery from "./components/HomeGallery";
import CardInfo from "./components/CardInfo";
import Card from "./components/Card";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Profile from "./views/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element=<App /> />
      <Route exact path="/profile" element=<Profile /> />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function  <HomeGallery />
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
