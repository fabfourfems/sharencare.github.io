import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Routes from './../routes';



class Signup extends Component {
    componentDidMount() {
        this.authUnsub = this.props.firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.mounted = true;
                this.props.history.push(Routes.res)
            }
        });

        this.state = {
            email: "",
            password: "",
            passwordConfirmation: ""
        }
    }

    componentWillUnmount() {
        this.authUnsub();
        this.mounted = false;
    }

    signup() {
        
    }

    render() {
        let field = {
            width: "100%"
        };

        return (
            <div className="form">
                <h3>Create an account</h3>
                <TextField
                    label="Email Address"
                    placeholder="example@gmail.com"
                    type="email"
                    name="email"
                    margin="normal"
                    variant="outlined"
                    style={field}
                    onChange={(evt) => { this.setState({ email: evt.target.value }) }}
                />
                <br />
                <TextField
                    label="Password"
                    type="password"
                    name="Password"
                    margin="normal"
                    variant="outlined"
                    style={field}
                    onChange={(evt) => { this.setState({ password: evt.target.value }) }}
                />
                <br />
                <TextField
                    label="Confirm password"
                    type="password"
                    name="Confirm password"
                    margin="normal"
                    variant="outlined"
                    style={field}
                    onChange={(evt) => { this.setState({ passwordConfirmation: evt.target.value }) }}
                />
                <br />
                <Button variant="outlined" color="primary" className="continue" onClick={() => this.signup()}>Continue</Button>
            </div>
        );
    }
}

export default withRouter(Signup);