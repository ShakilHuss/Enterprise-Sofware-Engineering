const express = require('express');
const { getWeather } = require('../services/weatherService');
const router = express.Router();

router.get('/weather', async (req, res) => {
  const { location } = req.query;
  try {
    const weatherData = await getWeather(location);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;