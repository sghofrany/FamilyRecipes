import React, {useState} from 'react';
import axios from 'axios';

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
        <div style={formStyle}>
            <p>Recipe Title</p>
            <input value={title} onChange={handleTitleChange} type="text"/>
            
            <p>Ingredients</p>
            <textarea value={ingredients} onChange={handleIngredientChange} style={textareaStyle}/>
            
            <p>Instructions</p>
            <textarea value={instructions} onChange={handleInstructionChange} style={textareaStyle}/>
            
            <input type="submit" value="Submit" onClick={handleClick}/>
        </div>
    );
}

const textareaStyle = {
    width: "100%",
    height: "200px",
    resize: "none",
    boxSizing: "border-box"
}

const formStyle = {
    display: "block",
    width: "100%"
}

export default AddRecipe;