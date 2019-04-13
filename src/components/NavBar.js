import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../ShareNCareLogo.png';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
       
    }

    render() {
        return(
            <div>
              <AppBar position="static">
                <Toolbar>
                  <img src={logo} alt="logo" />
                  <Typography>
                    Logo
                  </Typography>
                  <Button>Are you a Food Bank? Login/SignUp</Button>
                </Toolbar>
              </AppBar>
            </div>
        );
    }

}

export default NavBar;
