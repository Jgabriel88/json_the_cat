const {fetchBreedDescription} = require('./breedFetcher');
const specie = process.argv[2];

fetchBreedDescription(specie, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});
