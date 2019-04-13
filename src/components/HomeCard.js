import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link, withRouter } from "react-router-dom";
import Routes from './../routes';

class HomeCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="homecard">
                <Card id = "homecardbackground">
                    <CardContent>
                        <h2>{this.props.name}</h2>
                        <h4>{this.props.address}</h4>
                        <p> Mission:</p>
                        <p> {this.props.mission} </p>
                        <br/>
                        <Link to={Routes.foodbank}>
                            <Button id="seemore" variant="contained" onClick={() => this.props.setFoodBank(this.props.info)}>See More</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

}

export default withRouter(HomeCard);