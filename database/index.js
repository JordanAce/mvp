const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/favorites');

let starSchema = new mongoose.Schema({

  date: {
    type: String,
    unique: true
  },
  url: String,
  explanation: String,
  title: String
})

let Star = mongoose.model('favorites', starSchema);


let save = (favoriteData) => {
  let favoritesTitle = favoriteData.title;
  Star.findOne({title: favoritesTitle}, function (err, response) {
    if (err) {
      console.log(err)
    }
    if (response) {
      console.log("Already saved to favorites")
    }
    else {
      let newFavorite = new Star (favoriteData);
      newFavorite.save(function(err, response) {
        if (err) {
          console.log(err)
        } else {
          console.log("Saved to favorites")
        }
      })
    }
  })
}

let retrieve = () => {
 return Star.find({})
}


module.exports.save = save;
module.exports.retrieve = retrieve;