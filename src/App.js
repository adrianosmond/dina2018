import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Suspects from './components/Suspects';
import Interrogate from './components/Interrogate';

import './App.css';

const App = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={Suspects} />
      <Route path="/interrogate/:suspect" component={Interrogate} />
    </Switch>
  </Router>

export default App;
