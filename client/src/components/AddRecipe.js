import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import { Button } from '../components/Button';
import '../css/addrecipe.css';

function AddRecipe(props) {

    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);

    const convertToArray = (string) => {
        var arr = string.split(',');
        var newArray = [];
        var count = 0;
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] !== "") {
                newArray[count] = arr[i];
                count++;
            }
        }

        return newArray;
    }

    const handleClick = async () => {

        if(ingredients.length === 0) {
            console.log("Must fillout ingredients");
            return;
        }

        if(instructions.length === 0) {
            console.log("Must fillout instructions");
            return;
        }

        var ingrArray = convertToArray(ingredients);
        var instArray = convertToArray(instructions);

        axios.post("http://localhost:5000/api/post", {
            title: title,
            ingredients: ingrArray,
            instructions: instArray,
            author: "Shayan Ghofrany"
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleIngredientChange = (event) => {
        setIngredients(event.target.value);
    }

    const handleInstructionChange = (event) => {
        setInstructions(event.target.value);
    }

    return(
        <div className="add-wrapper">
            <p>Recipe Title</p>
            <Input onChange={handleTitleChange} placeholder="Enter your recipe title here" type="text">{title}</Input>
            
            <p>Ingredients</p>
            <Textarea onChange={handleIngredientChange} placeholder="Separate each ingredient with a comma. For example: Ingredient One, Ingredient Two, Ingredient Three, etc">{ingredients}</Textarea>

            <p>Instructions</p>
            <Textarea onChange={handleInstructionChange} placeholder="Separate each instruction with a comma. For example: Step One, Step Two, Step Three, etc">{instructions}</Textarea>
            
            <Link to="/view">
                <Button type="submit" onClick={handleClick}>Submit</Button>
            </Link>
            <span style={leftMargin}></span>
            <Link to="/">
                <Button>Home</Button>
            </Link>

        </div>
    );
}

const leftMargin = {
    marginLeft: "10px"
}


export default AddRecipe;