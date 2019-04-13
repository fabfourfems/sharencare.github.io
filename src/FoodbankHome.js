import React, { Component } from 'react';
import Routes from './routes';

class FoodbankHome extends Component {
    componentDidMount() {
        if (!this.props.firebase.auth().currentUser) {
            this.props.history.push(Routes.signin);
        }
    }

    render() {
        return (
            <div>
                Foodbank home
            </div>
        );
    }
}

export default FoodbankHome; 