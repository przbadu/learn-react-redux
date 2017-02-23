import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

// components
import NavLink from './components/NavLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

	<ul>
	  <li><NavLink to="/">Home</NavLink></li>
	  <li><NavLink to="/about">About</NavLink></li>
	  <li><NavLink to="/repos">Repos</NavLink></li>
	</ul>
	
        {this.props.children}
      </div>
    );
  }
}

export default App;
