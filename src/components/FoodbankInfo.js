import React, { Component } from 'react';

class FoodBankInfo extends Component {
    componentWillReceiveProps(props) {
        /**
         * name
         * info
         * 
         */
        // this.setState({
        //     name: props.name,
        // })
    }
    render() {
        return(
            <p>{this.state.name}</p>
        );
    }
}