import React, { PureComponent } from 'react';
import { Link, Route } from 'react-router-dom';
import ColorSelector from './ColorSelector';

export default class Header extends PureComponent {
  constructor(props){
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this); 
  }

  state = {
    text:'',
    route: '/silver'
  }

  onTextChange({ target }){
    const text = target.value;
    this.setState({ text:text });
  }
  onSubmit(e){
    e.preventDefault();
    this.setState({ route:`custom/${this.state.text}` });
  }
 

 

  render() {
    return (
      <header>
        <nav>
          <Link to="/yellow">yellow</Link>
          <Link to="/red">red</Link>
          <Link to="/blue">blue</Link>
          <Link to={this.state.route}>custom</Link> 
        </nav>
        <ColorSelector onTextChange={this.onTextChange} onSubmit={this.onSubmit}/>
      </header>
    );
  }
}
