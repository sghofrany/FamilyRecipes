import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
import {Search} from '../components/Search';

const buttonStyle = {
    float: "right"
}

const linkStyle = {
    marginLeft : "10px"
}

function ToolbarComponent() {

    return(
        <div className="toolbar-wrapper">
           
            <Search className="input input--valid" type="input" placeholder="Type recipe name"></Search>

            <div style={buttonStyle}>
                <Link to="/">
                    <Button className="btn btn--primary--solid">Home</Button>
                </Link>
                <Link style={linkStyle} to="/add">
                    <Button className="btn btn--primary--solid">Add Recipe</Button>
                </Link>
            </div>

        </div>
    )
}

export default ToolbarComponent;