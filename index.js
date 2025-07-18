const express = require('express');
const app = express();
const PORT = 3000;

// Home 
app.get('/', (req, res) => {
  res.send('Welcome to Express!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// JSON route
app.get('/api/user', (req, res) => {
  res.json({ name: "John", age: 25 });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});