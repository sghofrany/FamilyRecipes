const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Recipes = require('./models/Recipes');
const Users = require('./models/Users');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const mongoUrl = 'mongodb://localhost/familyrecipe';
mongoose.connect(mongoUrl, { useNewUrlParser: true });

const db = mongoose.connection
        .once('open', () => {
            console.log("Connected");
        })
        .on('error', (error) => {
            console.log("[ERROR]", error);
        });

app.post('/api/post', (req, res) => {
    
    var title = req.body.title;
    var ingredients = req.body.ingredients;
    var instructions = req.body.instructions;
    var author = req.body.author;
    
    res.sendStatus(200);

    var recipe = new Recipes({
        recipe_name: title,
        author: author,
        recipe: ingredients,
        instructions: instructions,
        likes: 0
    });

    recipe.save(function(err) {
        if(err) console.log("error while saving document");
    })
})

app.post('/api/like', (req, res) => {
    
    /*
    - Check if user has this recipe liked before, if so stop it from adding it again
    */
})

app.get('/api/info', (req, res) => {
    Recipes.find(function(err, result) {
        res.send(result);
    });
})

app.get('/api/info/:id', (req, res) => {

     Recipes.findById(req.params.id, function(err, result) {
        res.send(result);
    });

})


app.listen(5000, () => console.log("Server started on port 5000"));