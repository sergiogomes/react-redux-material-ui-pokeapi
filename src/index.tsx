import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from "./pages/App";
import ReduxProvider from "./reduxProvider";
import MaterialThemeProvider from "./materialThemeProvider";

ReactDOM.render(
  <ReduxProvider>
    <MaterialThemeProvider>
      <App />
    </MaterialThemeProvider>
  </ReduxProvider>
  ,
  document.getElementById("root")
);
