const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

// starts the Express.js server on port 3001. Keep at the bottom of file
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });