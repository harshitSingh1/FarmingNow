// server.js

const app = require('./app');
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
