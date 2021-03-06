import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Routes from './../routes';



class Signin extends Component {
    componentDidMount() {
        this.authUnsub = this.props.firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.mounted = true;
                this.props.history.push(Routes.res)
            }
        });
        this.state = {
            email: "",
            password: ""
        }
    }

    componentWillUnmount() {
        this.authUnsub();
        this.mounted = false;
    }

    signin() {
        this.props.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(resp => {
            this.props.routes.push(Routes.res);
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            window.alert(`error code: ${errorCode}\nerror message: ${errorMessage}`);
        });

    }

    render() {
        let field = {
            width: "100%"
        };

        return (
            <div className="form">
                <h3>Sign in</h3>
                <TextField
                    label="Email Address"
                    placeholder="example@gmail.com"
                    type="email"
                    name="email"
                    margin="normal"
                    variant="outlined"
                    style={field}
                    onChange={(evt) => {this.setState({email: evt.target.value})}}
                />
                <br/>
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
                <Button variant="outlined" color="primary" className="continue" onClick={() => this.signin()}>Continue</Button>
            </div>
        );
    }
}

export default withRouter(Signin);