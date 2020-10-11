import React from "react";
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./App.scss";
import Home from "./pages/home/Home";
import Counter from "./pages/counter/Counter";
import NewGame from "./pages/newGame/NewGame";
import Header from "./core/components/header/Header"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/newgame" component={NewGame} />
        </Router>
      </Container>
    </div>
  );
};

export default App;
