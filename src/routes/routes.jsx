import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import AddPost from "../components/addPost";
import Home from "../components/Home";
import Login from "../components/login";
import ModalAddPost from "../components/Modal/ModalAddPost";
import SignUp from "../components/signUp";
import SinglePost from "../components/singlePost";
import About from "../views/about";
import Contact from "../views/contact";
import Favorite from "../views/Favorite";
import Landing from "../views/landing";
import Profile from "../views/Profile";

export const AllRoutes = (params) => {
  return (
    <BrowserRouter>
      {/**<ModalAddPost /> */}
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route exact index element={<Home openTap={1} />} />
          <Route exact path="Home" element={<Home openTap={1} />} />
          <Route exact path="follow" element={<Home openTap={2} />} />{" "}
        </Route>
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Landing" element={<Landing />} />
        <Route exact path="/AddPost" element={<AddPost />} />
        <Route exact path="/Favorite" element={<Favorite />} />

        {/*   <Route
          path="/SinglePost/:id"
          exact
          element={cookies.currentUser != null ? <SinglePage /> : <Login />}
    />*/}
        <Route exact path="/SinglePost/:id" element={<SinglePost />} />
        <Route exact path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
