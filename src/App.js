import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Intro from './components/Intro';
import Browser from './components/Browser';
import Suspects from './components/Suspects';
import Interrogate from './components/Interrogate';
import Result from './components/Result';

import './App.css';

const App = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route exact path="/fly" component={Browser} />
      <Route exact path="/suspects/:country" component={Suspects} />
      <Route path="/interrogate/:suspect" component={Interrogate} />
      <Route path="/arrest/:suspect/:weapon" component={Result} />
    </Switch>
  </Router>

export default App;
