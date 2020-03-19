const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    recipe_name: {type: String},
    author: {type: String},
    recipe: [{
        type: String
    }],
    instructions: [{
        type: String
    }],
    likes: {type: Number},
    date: {type: Date, default: Date.now}
});

/*
first argument is the singular name of the collection,
mongoose authomatically looks for uppercase/lowercase and 
plural versions of the collection.
ex: recipe, recipes, Recipe, Recipes, etc
*/
module.exports = mongoose.model("Recipes", schema); 
