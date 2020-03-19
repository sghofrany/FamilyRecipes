import React, {useState, useEffect} from 'react';
import '../css/recipedetail.css';

function RecipeDetail({ match }) {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    
    async function loadData() {
      const url = `http://localhost:5000/api/info/${match.params.id}`

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

    return(
        <div className="detail-wrapper">

            <div className="detail-top-text">
                <h1>{loading ? "" : data.recipe_name}</h1>
                <h3>{loading ? "" : data.author}</h3>
                {
                    loading ? "" :
                    data.recipe.map((str) => {
                        console.log(str);
                    })
                }
            </div>

        </div>
    )
}

export default RecipeDetail;