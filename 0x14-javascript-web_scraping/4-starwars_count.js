#!/usr/bin/node

const axios = require('axios');

// API URL of the Star Wars API
const apiURL = process.argv[2];

// Character ID for Wedge Antilles
const characterID = '18';

// Send a GET request to the API URL
axios.get(apiURL)
  .then(response => {
    // Check if the request was successful
    if (response.status === 200) {
      // Extract the movie data from the response data
      const movies = response.data.results;

      // Count the number of movies where Wedge Antilles is present
      const count = movies.reduce((total, movie) => {
        if (movie.characters.includes(characterID)) {
          return total + 1;
        }
        return total;
      }, 0);

      // Print the count
      console.log('Number of movies with Wedge Antilles:', count);
    } else {
      console.log('Error:', response.status);
    }
  })
  .catch(error => {
    console.log('Error:', error.message);
  });
