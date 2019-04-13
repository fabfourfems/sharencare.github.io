import React, { Component } from 'react';
import HomeCard from './components/HomeCard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>sharencare</p>
        <HomeCard/>
      </div>
    );
  }
}

export default App;
