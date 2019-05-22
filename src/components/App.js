import React from 'react';
import Red from './Red';
import Blue from './Blue';
import Yellow from './Yellow';
import Header from './Header';
import Custom from './Custom';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
  
      <Header />
      <Route exact path="/red" component={Red} />
      <Route exact path="/blue" component={Blue} />
      <Route exact path="/yellow" component={Yellow} />
      <Route exact path="/custom/:color" component={Custom} />


    </Router>
  );

}
