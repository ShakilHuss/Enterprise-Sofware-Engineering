export const fetchWeather = async (location) => {
  try {
    const response = await fetch(`http://localhost:5001/api/weather?location=${location}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};