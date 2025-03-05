const express = require('express');
const weatherRoutes = require('./routes/weatherRoutes');
const app = express();
const cors = require('cors');


// Enable CORS for all routes
app.use(cors());

// Your existing code
app.use(express.json());
app.use('/api', weatherRoutes);
app.use(express.json());
app.use('/api', weatherRoutes);

module.exports = app;