const request = require('request');
const specie = process.argv[2];

request(`https://api.thecatapi.sscom/v1/breeds/search?name=${specie}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const resultData = JSON.parse(body);
  if (resultData.length < 1) {
    console.log("Breed not found!");
  } else {

    console.log('description', resultData[0].description);
  }
});


