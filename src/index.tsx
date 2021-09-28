import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "../src/Redux/Store/Store";
import Container from "../src/Screen/App/App";
import "./index.css";
const Index = () => {
  return (
    <Provider store={Store}>
      <Container></Container>;
    </Provider>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));
