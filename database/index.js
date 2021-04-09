const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/constellations');

let starSchema = new mongoose.Schema({
  id : {
    type: Number,
    unique: true
  },
  date: String,
  img: String,
  explanation: String,
  title: String
})

let Star = mongoose.model('constellations', starsSchema);

mongoose.connect('mongodb://localhost:8080/constellations');


// Stars.model()