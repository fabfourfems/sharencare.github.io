import React, { Component } from 'react';
import Routes from '../routes';
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
    marginLeft: '900px',
  },

  navbutton: {
    color: 'white',
    textDecoration: 'underline',
    textTransform: 'none',
  },

  login: {
    color: 'white',
    textDecoration: 'underline',
  },
};

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ""
        };
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        name: nextProps.name,
      })
       
    }

    render() {
        return(
            <div>
              <AppBar style={styles.nav}>
                <Toolbar>
                  <img src={logo} height="60px" alt="logo" />
                  {/* <a href={Routes.res}><Button style={styles.navbutton}>Home</Button></a>
                  <a href={Routes.data}><Button style={styles.navbutton} block>Food Data</Button></a> */}
                  <Typography style={styles.rtext}>
                    {this.name}
                  </Typography>
                  <Button style={styles.login}>Logout</Button>
                </Toolbar>
              </AppBar>
            </div>
        );
    }

}

export default NavBar;
