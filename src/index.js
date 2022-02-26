import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import AppHooks from "./AppHooks";
import reportWebVitals from "./reportWebVitals";
import data from "./data.json";

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

reportWebVitals();
