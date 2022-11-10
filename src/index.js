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
import Landing from "./views/landing";
import Home from "./components/Home";
import SinglePost from "./components/singlePost";
import AddPost from "./components/addPost";
import Login from "./components/login";
import SignUp from "./components/signUp";
import Contact from "./views/contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Landing />

  // <>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route exact path="/" element={<App />} />
  //       <Route exact path="/profile" element={<Profile />} />
  //       <Route exact path="/Home" element={<App route={"home"} />} />
  //       <Route exact path="/follow" element={<App route={"follow"} />} />
  //       <Route exact path="/contact" element={<Contact />} />
  //       <Route exact path="/login" element={<Login />} />
  //     </Routes>
  //   </BrowserRouter>
  // </>
);

// If you want to start measuring performance in your app, pass a function  <HomeGallery />
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
