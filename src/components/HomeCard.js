import React, { Component } from 'react';
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
            </div>
        );
    }

}

export default HomeCard;