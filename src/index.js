import React from "react";
import ReactDOM from "react-dom/client";
// import "../src/Assets/Styles/outcomeCSS.css";
import "../src/Assets/Styles/table.css";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
