import React, { Component } from 'react';
import Routes from './routes';
import FoodbankDashboard from './components/FoodbankDashboard';

class FoodbankHome extends Component {
    componentDidMount() {
        if (!this.props.firebase.auth().currentUser) {
            // this.props.history.push(Routes.signin);
        }
    }

    render() {
        return (
            <div>
                <FoodbankDashboard/>
            </div>
        );
    }
}

export default FoodbankHome; 