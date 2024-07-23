// Import the necessary modules
const express = require('express'); // Express framework for handling HTTP requests
const path = require('path'); // Path module for resolving file and directory paths

// Create an instance of the Express application
const app = express();

// Define the port on which the server will listen
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle root URL requests
app.get('/', (req, res) => {
  // Send a simple HTML response for the root URL
  res.send('<h1>Hello, World!</h1>');
});

// Route to handle requests to '/about'
app.get('/about', (req, res) => {
  // Send a simple HTML response for the '/about' URL
  res.send('<h1>About Page</h1>');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
