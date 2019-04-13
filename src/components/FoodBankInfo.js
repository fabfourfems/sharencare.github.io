import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FoodCard from './FoodCard';

class FoodBankInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            mission: ""
        }
    }

    componentDidMount() {}

    componentWillReceiveProps(props) {
        console.log(this.props.info);
        this.setState({
            name: props.name,
            address: props.address,
            mission: props.mission
        });
    }

    render() {
        return(
            <div>
            <div>
              <h1>The Food Bank at St Marys
</h1>
              <h3 className="paragraph">Mission:</h3>
              <p className="paragraph">Since the 1940s, The Food Bank @ St Marys has been supporting Seattle and the surrounding community with hospitality, respect, and nutritious food.</p>
              <h3 className="paragraph">Location:</h3>
              <p className="paragraph">611 20th Ave S, Seattle, WA 98144</p>
              <h3 className="paragraph">What we need</h3>
              <FoodCard/>
              <h3 className="paragraph">What we have</h3>
              <FoodCard/>
              <br/>
              <br/>
            </div>

            <div>
              <Button>Give!</Button>
              <Button>Volunteer!</Button>
            </div>
            </div>
        );
    }
}

export default FoodBankInfo;
