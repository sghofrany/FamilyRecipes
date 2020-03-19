import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ViewallRecipes from './components/ViewallRecipes';
import AddRecipe from './components/AddRecipe';
import Homepage from './components/Homepage';
import RecipeDetail from './components/RecipeDetail';
import './css/App.css';

function App() {

  return (
    <Router>

    <div className="App"> 

        <Switch>
          <Route path="/" exact component={Homepage}/> 
          <Route path="/add" component={AddRecipe}/> 
          <Route path="/view" component={ViewallRecipes}/>
          <Route path="/recipe/:id" component={RecipeDetail}/>
        </Switch>
    
    </div>

    </Router>
  );
}

export default App;
