import React, { Component } from 'react';

class Repo extends Component {
  render() {
    return (
      <div>
	<h2>user name: {this.props.params.userName}</h2>
	<h2>Repo Name: {this.props.params.repoName}</h2>
      </div>
    );
  }
}


export default Repo;
