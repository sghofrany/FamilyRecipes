import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ToolbarComponent from '../components/ToolbarComponent';
import RecipeComponent from '../components/RecipeComponent';
import '../css/viewallrecipe.css';


function ViewallRecipes() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    
    async function loadData() {
      const url = "http://localhost:5000/api/info"

      try {
          const response = await fetch(url);
          const responseData = await response.json();

          setData(responseData);
          setLoading(false);  //make sure to set loading = false last, because your array will be undefined if you call it before setting your array.

      } catch (err) {
          console.log("fetch failed", err);
      }
    }

    useEffect(() => {

      loadData();

    }, []);
  
    return (
    
      <div>
          <ToolbarComponent/>
          
          <div className="all-recipe-wrapper">
              {
            loading ? "" :
            
            data.map( (recipe) => (
        
                <RecipeComponent
                  title={recipe.recipe_name}
                  _id={recipe._id}
                  author={recipe.author}
                  likes={recipe.likes}
                  key={recipe._id}
                />
  
            ))
      
            }
            
          </div>
      </div>
    );
  }
  
  export default ViewallRecipes;