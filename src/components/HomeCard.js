import React, { Component } from 'react';

class HomeCard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
       
    }

    render() {
        return(
            <div>
                <p>HomeCard</p>
                this.props.history.push(Routes.foodbank)
            </div>
        );
    }

}

export default HomeCard;