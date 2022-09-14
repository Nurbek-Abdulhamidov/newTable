import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root";
import Context from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>
  </React.StrictMode>
);
