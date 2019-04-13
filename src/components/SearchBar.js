import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
    render() {
        return(
            <div className="search-bar">
                <TextField value={this.props.value}
                    placeholder="Please enter a zipcode"
                    onChange={(evt) => {this.props.onSearchQuery(evt)}}
                    type="search"
                    label="Zipcode"
                    margin="normal"
                    variant="outlined"
                    style={{width: "100%"}} />
            </div>
        );
    }
}

export default SearchBar;