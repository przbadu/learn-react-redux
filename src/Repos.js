import React, { Component } from 'react';
import { Link } from 'react-router';

class Repos extends Component {
  render() {
    return (
      <div>
	List of Repos
	<Link to="/">Home</Link>
      </div>
    );
  }
}

export default Repos;
