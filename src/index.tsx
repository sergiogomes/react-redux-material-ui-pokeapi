import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from "./pages/App";
import ReduxProvider from "./reduxProvider";
import MaterialThemeProvider from "./materialThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <MaterialThemeProvider>
        <App />
      </MaterialThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
