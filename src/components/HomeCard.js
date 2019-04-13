import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    card: {
        maxWidth: 345,
        backgroundColor: '#hexcodehere'
    },
}

class HomeCard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

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

                        <Button id="seemore" variant="contained">See More</Button>
                    </CardContent>

                </Card>


            </div>
        );
    }

}

export default HomeCard;