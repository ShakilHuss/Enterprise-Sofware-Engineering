export const fetchWeather = async (location) => {
    const response = await fetch(`http://localhost:5000/api/weather?location=${location}`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return response.json();
  };