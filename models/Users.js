const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {type: String},
    recipes: [{type: String}],
    likes: [{type: String}]
});

/*
first argument is the singular name of the collection,
mongoose authomatically looks for uppercase/lowercase and 
plural versions of the collection.
ex: recipe, recipes, Recipe, Recipes, etc
*/
module.exports = mongoose.model("Users", schema); 
