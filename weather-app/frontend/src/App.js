import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeather } from './api/weatherApi';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (location) => {
    try {
      const data = await fetchWeather(location);
      setWeather(data);
      setError('');
    } catch (err) {
      console.error('Error in handleSearch:', err);
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;