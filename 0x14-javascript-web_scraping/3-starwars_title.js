import sys
import requests

# Get the movie ID from the command-line arguments
movie_id = sys.argv[1]

# Construct the API URL
api_url = f"https://swapi-api.alx-tools.com/api/films/{movie_id}"

# Send a GET request to the API
response = requests.get(api_url)

# Check if the request was successful
if response.status_code == 200:
    # Extract the movie title from the response JSON
    movie_data = response.json()
    movie_title = movie_data["title"]

    # Print the movie title
    print("Movie Title:", movie_title)
else:
    print("Error:", response.status_code)

