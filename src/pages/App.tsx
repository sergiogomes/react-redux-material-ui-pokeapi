import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import Home from './home/Home';
import Counter from './counter/Counter';
import NewGame from './newGame/NewGame';
import Actions from './actions/Actions';
import MyPokemons from './myPokemons/MyPokemons';
import Header from '../core/components/header/Header';
import Loading from '../core/components/loading/Loading';

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <Loading />
        <Header />
        <Container maxWidth="lg">
          <Route path="/" exact component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/newgame" component={NewGame} />
          <Route path="/actions" component={Actions} />
          <Route path="/mypokemons" component={MyPokemons} />
        </Container>
      </div>
    </Router>
  );
};

export default App;
