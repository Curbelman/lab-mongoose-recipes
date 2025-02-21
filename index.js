const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    //Recipe.create(data[0]); // only includes 1 recipe
    Recipe.insertMany(data); // adds all recipes
  })
  //.then((recipe) => console.log('Recipe has been successfully added:', recipe))
  .then(() =>{
   Recipe.findOneAndUpdate({ duration: 220 }, { duration: 100}, { new: true })
  })
  .then(() => {
    Recipe.deleteOne({ title: "CarrotCake" })
  })
  .then(() => mongoose.connection.close())
  .catch(error => {
    console.error('Error connecting to the database', error);
  })


