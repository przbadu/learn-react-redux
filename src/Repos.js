import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from './components/NavLink';

class Repos extends Component {
  render() {
    return (
      <div>
	<h2>List of Repos</h2>
	<ul>
	  <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
	  <li><NavLink to="/repos/facebook/react">React</NavLink></li>
	</ul>

	{this.props.children}
      </div>
    );
  }
}

export default Repos;
