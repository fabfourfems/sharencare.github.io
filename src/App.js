import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import Routes from './routes';
import './App.css';
import NavBar from './components/NavBar';
import NavBarFoodBank from './components/NavBarFoodBank';
import Home from './Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import FoodbankHome from './FoodbankHome';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodBankInfo: {}
    }
  }

  componentDidMount() {
    let databaseRef = this.props.firebase.database().ref(`foodbanks`);
    databaseRef.on('value', (snapshot) => {
      if (snapshot) {
        this.setState({
          foodBankInfo: snapshot.val()
        })
      }
    })
  }

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
      <Home foodBankInfo={this.state.foodBankInfo}/>
    );
  }

  foodbankHome() {
    return(
      <FoodbankHome firebase={this.props.firebase}/>
    );
  }

  matchRoute() {
    return(
      <Switch>
        <Route exact path={Routes.signin} component={() => this.signin()} />
        <Route exact path={Routes.signup} component={() => this.signup()} />
        <Route exact path={Routes.home} component={() => this.browseView()} />
        <Route exact path={Routes.res} component={() => this.foodbankHome()} />
      </Switch>
    );
  }

  navbar() {
    if (this.props.firebase.auth().currentUser) {
      return (<NavBarFoodBank/>);
    }
    return (<NavBar />);
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
