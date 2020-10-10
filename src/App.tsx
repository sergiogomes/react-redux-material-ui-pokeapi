import React from "react";
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.scss";
import Header from "./core/components/Header/Header"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="Redux logo" />
        </div>
        <Router>
          <Route path="/counter" component={Counter} />
        </Router>
      </Container>
    </div>
  );
};

export default App;
