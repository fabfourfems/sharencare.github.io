import React, { Component } from 'react';
import HomeCard from './components/HomeCard';

import SearchBar from './components/SearchBar';

class Home extends Component {

    render() {
        return(
            <div>
                Browse View

                <SearchBar/>

                Results
                <HomeCard />
            </div>
        );
    }
}

export default Home;