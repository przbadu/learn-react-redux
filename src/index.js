import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// css
import './index.css';

// Import components
import App from './App';
import About from './About';
import Repos from './Repos';
import Repo from './Repo';

const router = (
  <Router history={hashHistory}>
    <Route path="/"  component={App}>
      <IndexRoute component={Repos}></IndexRoute>
      <Route path="/repos" component={Repos} />
      <Route path="/repos/:userName/:repoName" component={Repo} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);


ReactDOM.render(
  router,
  document.getElementById('root')
);
