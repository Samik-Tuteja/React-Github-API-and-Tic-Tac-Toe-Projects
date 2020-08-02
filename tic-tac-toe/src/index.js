import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Game from "./Components/Game";
import * as serviceWorker from "./serviceWorker";
import Header from "./Components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
