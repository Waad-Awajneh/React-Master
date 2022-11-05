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
      <TabsRender x={1} />
      <Routes>
        <Route exact path="/" element={<TabsRender x={1} />}></Route>
        <Route exact path="/ForYou" element={<TabsRender x={1} />}></Route>
        <Route exact path="/follow" element={<TabsRender x={2} />}></Route>
      </Routes>
    </>
  );
}

export default App;
