const express = require('express');
let app = express();
const API_CALL = require ('../API_CALL/nasa.js');
const bodyParser = require('body-parser');
const port = 8080;
const path = require('path');
const db = require ('../database/index.js');


app.use(express.static(path.join(__dirname, "..", "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/constellations', function(req, res) {
  let date = Object.keys(req.body)[0];
  console.log('REQUEST', date);
  if (date) {
    return API_CALL.getNasaDataWithDate(date)
    .then((data) => {
      console.log('SUCCESSFUL POST SERVER', data);
      res.send(data);
      res.end();
    })
    .catch((error) => {
      console.log('ERROR ON POST SERVER', error)
    });
  } else {
  return API_CALL.getNasaData()
  .then((data) => {
    console.log('SUCCESSFUL POST SERVER', data);
    res.send(data);
    res.end();
  })
  .catch((error) => {
    console.log('ERROR ON POST SERVER', error)
  });
  }
});


app.post('/favorites', function(req, res) {
  let date = Object.keys(req.body)[0];
  console.log('FAVORITE', date);
  return API_CALL.getNasaDataWithDate(date)
    .then((data) => {
      console.log('RETRIEVED DATE FOR SAVING TO FAVORITES', data);
      db.save(data);
      res.end();
    })
    .catch((error) => {
      console.log('ERROR ON POST SERVER', error)
    });
});

app.get('/favorites', function(req, res) {
  return db.retrieve()
  .then((favorites) => {
    console.log('FAVORITES RETRIEVED', favorites)
    res.send(favorites);
  })
  .catch((error) => {
    console.log('ERROR RETRIEVING FAVORITES')
  })
  res.end();
  console.log('RETRIEVING FAVORITES FROM DB');
})


app.listen(port, () => {
  console.log(`Server now listening at http://localhost:${port}`);
})