import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import Routes from './routes';
import './App.css';
import NavBar from './components/NavBar'
import Home from './Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import FoodBankInfo from './components/FoodBankInfo';

class App extends Component {
  signin() {
    return (
      <Signin firebase={this.props.firebase}/>
    );
  }

  signup() {
    return (
      <Signup firebase={this.props.firebase}/>
    );
  }

  browseView() {
    return (
      <Home/>
    );
  }

  foodbankHome() {
    return(
      <div>Dashboard</div>
    );
  }

  foodbankInfo() {
    return(
      <FoodBankInfo/>
    );
  }

  matchRoute() {
    return(
      <Switch>
        <Route exact path={Routes.signin} component={() => this.signin()} />
        <Route exact path={Routes.signup} component={() => this.signup()} />
        <Route exact path={Routes.home} component={() => this.browseView()} />
        <Route exact path={Routes.foodbank} component={() => this.foodbankInfo()} />
        <Route exact path={Routes.res} component={() => this.foodbankHome()} />
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
