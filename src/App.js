import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import Routes from './routes';
import './App.css';
import NavBar from './components/NavBar'
import Home from './Home';
import Signin from './components/Signin';

class App extends Component {
  signin() {
    return (
      <Signin/>
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
    return (
      <Home/>
    );
  }

  foodbankHome() {

  }

  matchRoute() {
    return(
      <Switch>
        <Route exact path={Routes.signin} component={() => this.signin()} />
        <Route exact path={Routes.signup} component={() => this.signup()} />
        <Route exact path={Routes.home} component={() => this.browseView()} />
      </Switch>
    );
  }

  navbar() {
    return (
      <NavBar/>
    );
  }

  render() {
    return (
      <Router>
        {this.navbar()}
        {this.matchRoute()}
      </Router>
    );
  }
}

export default App;
