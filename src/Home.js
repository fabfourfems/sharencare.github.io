import React, { Component } from 'react';
import HomeCard from './components/HomeCard';

class Home extends Component {
    render() {
        return(
            <div>
                Browse View

                Search bar

                Results
                <HomeCard />
            </div>
        );
    }
}

export default Home;