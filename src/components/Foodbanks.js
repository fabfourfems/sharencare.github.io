import React, { Component } from 'react';
import HomeCard from './components/HomeCard';

class FoodBanks extends Component {
    componentDidMount() {
        // read from firebase
        this.setState({
            foodbankInfo: {}
        })
    }

    makeCards() {
        let cards = [];
        Object.keys(this.state.foodbankInfo).forEach((item) => {
            let info = this.state.foodbankInfo[item];
            cards.push(<HomeCard name={item.name}/>);
        });
    }   

    render() {
        let cards = this.makeCards();
        return(
            <div>
                {cards}
            </div>
        );
    } 
}