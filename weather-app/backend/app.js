const express = require('express');
const weatherRoutes = require('./routes/weatherRoutes');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Use the weather routes
app.use('/api', weatherRoutes);

module.exports = app;