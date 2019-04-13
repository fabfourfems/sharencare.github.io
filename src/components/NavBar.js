import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../ShareNCareLogo.png';

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
    textDecoration: 'underline',
  },
};

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
              <AppBar style={styles.nav}>
                <Toolbar>
                  <img src={logo} height="60px" alt="logo" />
                  <Typography style={styles.rtext}>
                    Are you a Food Bank?
                  </Typography>
                  <Button style={styles.login}>Login / SignUp</Button>
                </Toolbar>
              </AppBar>
            </div>
        );
    }

}

export default NavBar;
