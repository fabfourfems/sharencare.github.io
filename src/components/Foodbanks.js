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
        if (zipcode) {
            Object.keys(this.state.foodBankInfo).map((item, i) => {
                let info = this.state.foodBankInfo[item];
                Object.keys(info).map((name, index) => {
                    if (index == 0) {
                        info = info[name];
                    }
                });
                console.log(info);
                if (info.Zipcode == zipcode) {
                    cards.push(<HomeCard key={i} name={info.Name} address={info.Address} mission={info.Mission} info={info} setFoodBank={this.props.setFoodBank}/>);
                }
            });
        } else {
            Object.keys(this.state.foodBankInfo).map((item, i) => {
                let info = this.state.foodBankInfo[item];
                Object.keys(info).map((name, index) => {
                    if (index == 0) {
                        info = info[name];
                    }
                });
                cards.push(<HomeCard key={i} name={info.Name} address={info.Address} mission={info.Mission} info={info} setFoodBank={this.props.setFoodBank}/>);
            });
        }
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