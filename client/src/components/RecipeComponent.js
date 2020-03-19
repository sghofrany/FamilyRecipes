import React from 'react';
import {Link} from 'react-router-dom';
import '../css/recipecomponent.css';
import burger from '../images/burger.jpg';
import 'font-awesome/css/font-awesome.min.css';

function RecipeComponent(props) {
    return(
        <div className="recipe-wrapper">
            <div className="recipe-top">

            </div>
            <div className="recipe-bottom">
               
                <div className="recipe-text">
                    <Link to={`/recipe/${props._id}`}>
                        <p id="title">{props.title}</p>
                    </Link>
                    <p id="author">{props.author}</p>
                </div>
               
                <div className="recipe-like">
                    <i className="fa fa-heart fa-lg"></i>
                </div>
            
            </div>
        </div>
    )
}


export default RecipeComponent;
