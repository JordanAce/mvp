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
  console.log('GETTING TO DATABASE CALL', favoriteData);
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

  // favoriteData.create(function(err, result) {
  //   if (err) {
  //     console.log('ERROR SAVING TO DATABASE', err)
  //   } else {
  //     console.log('SAVED TO DATABASE');
  //   }
  // })

let retrieve = () => {

}


module.exports.save = save;
module.exports.retrieve = retrieve;