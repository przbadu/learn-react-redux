import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

	<ul>
	  <li><Link to="/about">About</Link></li>
	  <li><Link to="/repos">Repos</Link></li>
	</ul>
	
        {this.props.children}
      </div>
    );
  }
}

export default App;
