import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class FoodCard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <div className="foodcard">
                <Card id = "foodcardbackground">
                    <CardContent>
                        <h4>Apples</h4>
                        <h4>Quantity: 50</h4>
                    </CardContent>
                </Card>
            </div>
        );
    }

}

export default FoodCard;
