import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

import { AuthProvider } from "react-auth-kit";
import { AllRoutes } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";

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
        {/* <MyComponent /> */}
        <AllRoutes />
        {/* <Search /> */}
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
