import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import NotFoundError from "./container/NotFoundError";
import Routes from "./route";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {Routes.map(route => (
            <Route key={route.name} exact={route.exact} path={route.route} component={route.component}/>
          ))}
          <Route component={NotFoundError} />
        </Switch>
      </Router>
    );
  }
}

export default App;
