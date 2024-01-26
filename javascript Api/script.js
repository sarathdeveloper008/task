// Import the 'https' module for making HTTP requests
const https = require('https');

// Define an asynchronous function that fetches posts and filters them by title
async function getPostsAndFilterByTitle(keyword) {
  try {
    // Make a GET request to the specified URL
    https.get('https://jsonplaceholder.typicode.com/posts', (response) => {

      // Initialize a variable to store the received data
      let data = '';

      // Listen for incoming data chunks in the response
      response.on('data', (chunk) => {
        // Append each data chunk to the 'data' variable
        data += chunk;
      });

      // Handle the end of the response
      response.on('end', () => {
        // Check if the status code is not 200 (OK)
        if (response.statusCode !== 200) {
          // Throw an error if the status is not OK
          throw new Error(`Failed to fetch posts. Status: ${response.statusCode}`);
        }

        // Parse the received data as JSON
        const posts = JSON.parse(data);

        // Filter posts based on the provided keyword in the title
        const filteredPosts = posts.filter(post => post.title.includes(keyword));

        // Log the filtered posts to the console
        console.log('Filtered Posts:', filteredPosts);
      });
    }).on('error', (error) => {
      // Handle errors during the HTTP request and log an error message
      console.error('Error:', error.message);
    });
  } catch (error) {
    // Handle any other errors and log an error message
    console.error('Error:', error.message);
  }
}

// Example usage: Call the function with the provided input "magnam"
getPostsAndFilterByTitle('magnam');
