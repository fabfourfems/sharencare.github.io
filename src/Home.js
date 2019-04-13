import React, { Component } from 'react';

import SearchBar from './components/SearchBar';

class Home extends Component {

    render() {
        return(
            <div>
                Browse View

                <SearchBar/>

                Results
            </div>
        );
    }
}

export default Home;