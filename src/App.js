import logo from "./logo.svg";
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
        <Route exact path="/" element={<CardInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
