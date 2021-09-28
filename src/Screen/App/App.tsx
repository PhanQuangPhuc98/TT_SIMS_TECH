import React, { ReactElement, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "../../Style/Home.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RouterScreen from "../router/router";
import MenuResponsive from "../../Components/MenuResponsive/MenuResponsive";
interface PropApp {
  children?: ReactElement;
}
const App = (props: PropApp) => {
  const [showMenu, setShowMenu] = useState(true);
  const renderShow = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="Container">
      <Router>
        <MenuResponsive Close={renderShow} Show={showMenu} />
        <Header ShowMenuUser={renderShow} />
        <RouterScreen></RouterScreen>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
