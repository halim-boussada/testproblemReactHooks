import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import AppHooks from "./AppHooks";

import data from "./data/data.json";

if (!localStorage.getItem("images")) {
  localStorage.setItem("images", JSON.stringify(data));
}
if (!localStorage.getItem("listOfMessages")) {
  localStorage.setItem("listOfMessages", JSON.stringify([]));
}

ReactDOM.render(
  <React.StrictMode>
    <AppHooks />
  </React.StrictMode>,
  document.getElementById("root")
);
