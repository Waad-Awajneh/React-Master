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
import GeneralHeader from "./components/generalComponent/GeneralHeader";

function App(props) {
  return (
    <>
      <Header />
      {/* <GeneralHeader /> */}

      <TabsRender />
      <Outlet />
      {/*props.route == "follow" ? <Home openTap={2} /> : <Home openTap={1} />*/}
    </>
  );
}

export default App;
