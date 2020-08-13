const mongoose = require('mongoose');

const CitiesSchema = mongoose.Schema({});

module.exports = mongoose.model('Cities', CitiesSchema);