import React from 'react';
import Red from './Red';
import Blue from './Blue';
import Yellow from './Yellow';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/green" component={<Red/>}/>
      <Route exact path="/green" component={<Blue/>}/>
      <Route exact path="/green" component={<Yellow/>}/>
    </Router>
  );

}
