var mongoose = require('mongoose');

var SpiritAnimalSchema = mongoose.Schema({
  Name: String,
  SpiritAnimal: String,
  DoTheyLikeIt: Boolean
});

// String, Number, Date, Boolean, Buffer, Mixed, Array
module.exports = mongoose.model('SpiritAnimal', SpiritAnimalSchema);
