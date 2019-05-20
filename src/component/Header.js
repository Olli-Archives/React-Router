import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

export default function Header() {
  return (
    <Header>
      <nav>
        <Link to="/green">green</Link>
        <Link to="/red">red</Link>
        <Link to="/blue">blue</Link>
      </nav>
    </Header>

  );
}
