import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../components/Home';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const RouterPage = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default RouterPage;
