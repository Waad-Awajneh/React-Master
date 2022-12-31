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
import Carousel from "./components/carousel";
import About from "./views/about";
import { AuthProvider } from "react-auth-kit";
import { AllRoutes } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ModalAddPost from "./components/Modal/ModalAddPost";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AuthProvider
      authType={"localstorage"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <Provider store={store}>
        <AllRoutes />
      </Provider>
    </AuthProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function  <HomeGallery />
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/* 
   <Route exact path="Home" element={<App route={"home"} />} />
          <Route exact path="follow" element={<App route={"follow"} />} />
*/
