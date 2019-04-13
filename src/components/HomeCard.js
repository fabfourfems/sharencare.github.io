import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

>>>>>>> b97c14753aabb01b080273479497d96231637d29

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
<<<<<<< HEAD
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


=======
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        {this.props.name}
                        {this.props.address}
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails>
                        <Typography>
                            {this.props.mission}
                        </Typography>

                        <Button variant="contained" >
                            See More
                        </Button>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
>>>>>>> b97c14753aabb01b080273479497d96231637d29
            </div>
        );
    }

}

export default HomeCard;