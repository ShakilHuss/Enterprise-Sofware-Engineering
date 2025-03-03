const axios = require('axios');
const API_KEY = process.env.OPENWEATHERMAP_API_KEY;

const getWeather = async (location) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

module.exports = { getWeather };