import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Routes from './routes';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  signin() {
    return (
      <div>
        Signin
      </div>
    );
  }

  signup() {
    return (
      <div>
        sign up
      </div>
    );
  }

  browseView() {

  }

  foodbankHome() {

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={Routes.signin} component={() => this.signin()} />
          <Route exact path={Routes.signup} component={() => this.signup()} />
        </Switch>
      </Router>
    );
  }
}

export default App;
