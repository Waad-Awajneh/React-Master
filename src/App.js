import TabsRender from "./components/TabsRender";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import CardInfo from "./components/CardInfo";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <TabsRender />
      <Routes>
        <Route exact path="/" element={<Home openTap={1} />}></Route>
        <Route exact path="/follow" element={<Home openTap={2} />}></Route>
      </Routes>
    </>
  );
}

export default App;
