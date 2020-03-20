import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
import {Input} from '../components/Input';

const buttonStyle = {
    float: "right"
}

const linkStyle = {
    marginLeft : "10px"
}

function ToolbarComponent() {

    return(
        <div className="toolbar-wrapper">
           
            <Input className="input input--valid" type="input" placeholder="Type recipe name"></Input>

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