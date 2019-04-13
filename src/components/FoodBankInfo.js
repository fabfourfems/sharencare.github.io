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
        /**
         * name
         * info
         * 
         */
        // this.setState({
        //     name: props.name,
        // })
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
              <h1>{this.name}</h1>
              <p>Mission:</p>
              <p>{this.mission}</p>
              <p>Location:</p>
              <p>{this.address}</p>
              <p className="paragraph">What we need</p>
              <FoodCard/>
              <p className="paragraph">What we have</p>
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
