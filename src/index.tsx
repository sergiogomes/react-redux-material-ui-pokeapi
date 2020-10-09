import React from "react";
import ReactDOM from "react-dom";

import "./index.sass";
import App from "./App";
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
