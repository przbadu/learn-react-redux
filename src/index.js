import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// css
import './index.css';

// Import components
import App from './App';
import Home from './Home';
import About from './About';
import Repos from './Repos';
import Repo from './Repo';

const router = (
  <Router history={browserHistory}>
    <Route path="/"  component={App}>
      <IndexRoute component={Home}></IndexRoute>
      
      <Route path="/repos" component={Repos}>
	<Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
      
      <Route path="/about" component={About} />
    </Route>
  </Router>
);


ReactDOM.render(
  router,
  document.getElementById('root')
);
