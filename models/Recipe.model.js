const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: 'string', // required and unique
  level: 'string', // has to include the enum, to only allow a few values
  ingredients: [ String ],
  cuisine: 'string', // required
  dishType: 'string', // also only a few values possible
  image: 'string', // include default image
  duration: 0, // minimum is 0
  creator: 'string',
  created: Date, // by default, today
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
