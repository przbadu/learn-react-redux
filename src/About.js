import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (
      <div>
	About me
	<Link to="/">Home</Link>
      </div>
    );
  }
}

export default About;
