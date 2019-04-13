import React, { Component } from 'react';
import HomeCard from './components/HomeCard';

import SearchBar from './components/SearchBar';
import Foodbanks from './components/Foodbanks';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ""
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
                <SearchBar onSeaerchQuery={this.onSearchQuery}/>
                <Foodbanks zipcode={this.state.searchQuery} foodBankInfo={{}}/>
            </div>
        );
    }
}

export default Home;