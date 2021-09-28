import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "../Home/HomeScreen";
import ProductScreen from "../Product/ProductScreen";
import DetailProduct from "../Product/DetailProductScreen";
import Contact from "../Contact/Contact";
import Accessory from "../Accessory/Accessory";

const router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeScreen />
      </Route>
      <Route exact path="/Product">
        <ProductScreen />
      </Route>
      <Route path="/DetailProduct/:id">
        <DetailProduct />
      </Route>
      <Route path="/Accessory">
        <Accessory />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default router;
