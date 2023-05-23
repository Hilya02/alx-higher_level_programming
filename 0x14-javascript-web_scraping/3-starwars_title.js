#!/usr/bin/node

const axios = require('axios');

// Get the movie ID from the command-line arguments
const movieId = process.argv[2];

// Construct the API URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request to the API
axios.get(apiUrl)
  .then(response => {
    // Check if the request was successful
    if (response.status === 200) {
      // Extract the movie title from the response data
      const movieTitle = response.data.title;

      // Print the movie title
      console.log('Movie Title:', movieTitle);
    } else {
      console.log('Error:', response.status);
    }
  })
  .catch(error => {
    console.log('Error:', error.message);
  });

