import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../ShareNCareLogo.png';
import { Link, withRouter } from "react-router-dom";
import Routes from './../routes';

const styles = {
  nav: {
    position: "static",
    backgroundColor: '#303C6C',
    color: 'white',
  },

  rtext: {
    color: 'white',
    marginLeft: '1000px',
  },

  login: {
    color: 'white',
  },
};

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
              <AppBar style={styles.nav}>
                <Toolbar>
                  <img src={logo} height="60px" alt="logo" />
                  <Typography style={styles.rtext}>
                    <Link to={Routes.signin}><Button style={styles.login}>My Portal</Button></Link>
                  </Typography>
                </Toolbar>
              </AppBar>
            </div>
        );
    }

}

export default NavBar;
