import React, { Component } from 'react';
import HomeCard from './HomeCard';

class FoodBanks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodBankInfo: props.foodBankInfo
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            foodBankInfo: nextProps.foodBankInfo
        })
    }

    makeCards(zipcode) {
        let cards = [];
        Object.keys(this.state.foodBankInfo).forEach((item) => {
            let info = this.state.foodbankInfo[item];
            cards.push(<HomeCard name={info.name} address={info.address} mission={info.mission} />);
        });
        return cards;
    }

    render() {
        let cards = this.makeCards(this.props.zipcode);
        return(
            <div>{cards}</div>
        );
    } 
}

export default FoodBanks;