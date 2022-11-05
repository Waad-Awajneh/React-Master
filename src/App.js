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

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<TabsRender open={"rand"} />}></Route>
      </Routes>
    </>
  );
}

export default App;
