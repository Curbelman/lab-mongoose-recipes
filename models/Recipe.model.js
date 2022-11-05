const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: 'String',
    required: true,
    unique: true
  },
  level: String, // has to include the enum, to only allow a few values
  ingredients: [ String ],
  cuisine: String, // required
  dishType: String, // also only a few values possible
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  }, // include default image
  duration: {type: Number, min: 0,}, // minimum is 0
  creator: String,
  created: {type: Date, default: Date.now()} // by default, today
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
