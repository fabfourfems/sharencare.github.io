import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


class SearchBar extends Component {

    render() {
        return(
            <TextField value={"98007"} 
                onChange={(evt) => { }}
                type="search" 
                label="Zipcode" 
                margin="normal"
                variant="outlined" 
                fullWidth/>
        );
    }
}

export default SearchBar;