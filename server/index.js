const express = require('express');
let app = express();
const API_CALL = require ('../API_CALL/nasa.js');
const bodyParser = require('body-parser');
const port = 8080;
const path = require('path');


app.use(express.static(path.join(__dirname, "..", "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/constellations', function(req, res) {
  console.log('REQUEST', req.body);
  return API_CALL.getNasaData()
  .then((data) => {
    console.log('SUCCESSFUL POST SERVER', data);
    res.send(data);
    res.end();
  })
  .catch((error) => {
    console.log('ERROR ON POST SERVER', error)
  });
});



app.listen(port, () => {
  console.log(`Server now listening at http://localhost:${port}`);
})