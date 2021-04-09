const config = require('../server/config.js');
const axios = require('axios');

let nasaData = [];

let getNasaDataWithDate = (date) => {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=wSEuk95DyZ60GKxYhBL2TcIgVwLFlYNKprSX4aoP&date=${date}`)
  .then((response) => {
    console.log('RESPONSE FROM API', response.data)
    return response.data;
  })
  .catch((error) => {
    console.log('ERROR ON API CALL', error)
  })
}

let getNasaData = () => {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=wSEuk95DyZ60GKxYhBL2TcIgVwLFlYNKprSX4aoP`)
  .then((response) => {
    console.log('RESPONSE FROM API', response.data)
    return response.data;
  })
  .catch((error) => {
    console.log('ERROR ON API CALL', error)
  })
}

module.exports.getNasaData = getNasaData;
module.exports.getNasaDataWithDate = getNasaDataWithDate;