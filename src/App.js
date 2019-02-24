import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Landing from "./container/Landing";
import Skills from "./container/Skills";
import Projects from "./container/Projects";
import Accomplishments from "./container/Accomplishments";
import WorkExperiences from "./container/WorkExperiences";
import Hobbies from "./container/Hobbies";
import NotFoundError from "./container/NotFoundError";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/accomplishments" component={Accomplishments} />
          <Route path="/workexperiences" component={WorkExperiences} />
          <Route path="/hobbies" component={Hobbies} />
          <Route component={NotFoundError} />
        </Switch>
      </Router>
    );
  }
}

export default App;
