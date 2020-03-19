import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Button} from '../components/Button';
import '../css/homepage.css';

const style = { 
    "display" : "flex",
    flexDirection : "row"
}

function Homepage() {
    return(
        <div className="homepage-wrapper">
            <h1>Family Recipe</h1>
            <h2>Get started by viewing our current recipes or add one of your own.</h2>

            <div style={style}>
                <div className="homepage-view">
                    <Link to="/view">
                        <Button className="btn btn--primary--solid" type="input">View Recipes</Button>
                    </Link>
                </div>
                <div className="homepage-add">
                    <Link to="/add">
                        <Button className="btn btn--primary--solid" type="input">Add Recipe</Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Homepage;