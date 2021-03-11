const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const resultData = JSON.parse(body);
    if (resultData.length < 1) {
      callback("Breed not found!", null);
    } else {
      callback(null, resultData[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};