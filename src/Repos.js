import React, { Component } from 'react';
import NavLink from './components/NavLink';

class Repos extends Component {
  // ask for `router` from context
  /* contextTypes: {
   *   router: React.PropTypes.object
   * }
   * 
   * handleSubmit(event) {
   *   event.preventDefault();
   *   
   *   // push path to router context
   *   this.context.router.push(path)
   * }
   */
  
  handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.elements[0].value
    const repoName = e.target.elements[1].value
    const path = `/repos/${userName}/${repoName}`
    this.context.router.push(path);
  }
  
  render() {
    return (
      <div>
	<h2>List of Repos</h2>

	<ul>
	  <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
	  <li><NavLink to="/repos/facebook/react">React</NavLink></li>
	</ul>
	
	<form onSubmit={this.handleSubmit}>
	  <table>
	    <tbody>
              <tr>
		<td>User Name</td>
		<td><input type="text" placeholder="username"/></td>
              </tr>
              <tr>
		<td>Repo Name</td>
		<td><input type="text" placeholder="reponame" /></td>
              </tr>
	      <tr>
		<td><button type="submit">Go</button></td>
	      </tr>
	    </tbody>
	  </table>
	</form>

	{this.props.children}
      </div>
    );
  }
}

Repos.contextTypes = {
  router: React.PropTypes.object
}

export default Repos;
