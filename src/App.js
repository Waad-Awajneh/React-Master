import TabsRender from "./components/TabsRender";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";
import CardInfo from "./components/CardInfo";
import Home from "./components/Home";

function App(props) {
  return (
    <>
      <Header />
      <TabsRender />
      <Outlet />
      {/*props.route == "follow" ? <Home openTap={2} /> : <Home openTap={1} />*/}
    </>
  );
}

export default App;
