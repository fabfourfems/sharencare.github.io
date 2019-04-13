import React, { Component } from 'react';
import HomeCard from './components/HomeCard';

import SearchBar from './components/SearchBar';
import Foodbanks from './components/Foodbanks';
import FoodbankDashboard from './components/FoodbankDashboard';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            foodBankInfo: props.foodBankInfo
        }
    }

    onSearchQuery = (evt) => {
        this.setState({
            searchQuery: evt.target.value
        })
    }

    render() {
        return(
            <div>
                <SearchBar onSearchQuery={this.onSearchQuery}/>
                <Foodbanks zipcode={this.state.searchQuery} foodBankInfo={this.state.foodBankInfo}/>
            </div>
        );
    }
}

export default Home;