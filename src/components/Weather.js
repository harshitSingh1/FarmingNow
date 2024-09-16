import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../styles/Weather.css"; // Import CSS for styling
import '@fortawesome/fontawesome-free/css/all.min.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [manualLocation, setManualLocation] = useState("");

  // Memoized function to fetch weather data based on location
  const fetchWeatherData = useCallback(async (locationQuery) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=bd8862a8ff784db589d103353241609&q=${locationQuery}&days=6&aqi=yes&alerts=yes`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  }, []);

  // Memoized function to get user's current location
  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(`${latitude},${longitude}`);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, [fetchWeatherData]);

  // Fetch weather data for current location on initial render
  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  // Handle manual location search
  const handleSearch = (e) => {
    e.preventDefault();
    if (manualLocation) {
      fetchWeatherData(manualLocation);
    }
  };

  return (
    <div className="weather-dashboard">
      <h1 className="heading">
        Weather <span>Dashboard</span>
      </h1>
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for location"
            value={manualLocation}
            onChange={(e) => setManualLocation(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {weatherData && (
        <div className="weather-details">
          {/* Location and Current Weather */}
          <div className="current-weather">
            <h1>Location: {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h1>
            <h2 className="localtime">{weatherData.location.localtime}</h2>
            <img src={weatherData.current.condition.icon} alt="Weather icon" />
            <h2>{weatherData.current.temp_c} °C, {weatherData.current.condition.text}</h2>
            <div className="weather-container">
              <div className="weather-column">
                <p><i className="fas fa-thermometer-half"></i> Feels like: {weatherData.current.feelslike_c}°C</p>
                <p><i className="fas fa-sun"></i> Sunrise: {weatherData.forecast.forecastday[0].astro.sunrise}</p>
                <p><i className="fas fa-wind"></i> Wind: {weatherData.current.wind_kph} kph</p>
                <p><i className="fas fa-water"></i> Humidity: {weatherData.current.humidity}%</p>
              </div>
              <div className="weather-column">
                <p><i className="fas fa-moon"></i> Moonrise: {weatherData.forecast.forecastday[0].astro.moonrise}</p>
                <p><i className="fas fa-cloud-moon"></i> Moonset: {weatherData.forecast.forecastday[0].astro.moonset}</p>
                <p><i className="fas fa-cloud-sun"></i> Sunset: {weatherData.forecast.forecastday[0].astro.sunset}</p>
                <p><i className="fas fa-sun"></i> UV Index: {weatherData.current.uv}</p>
              </div>
            </div>
          </div>

          {/* 6-day weather forecast */}
          <div className="forecast-grid">
            {weatherData.forecast.forecastday.map((day, index) => (
              <div key={index} className={`forecast-day day-${index}`}>
                <h1>{day.date}</h1>
                <img src={day.day.condition.icon} alt="Forecast icon" />
                <h2>{day.day.condition.text}</h2>
                <p><i className="fas fa-thermometer-half"></i> Temp: {day.day.maxtemp_c}°C / {day.day.mintemp_c}°C</p>
                <p><i className="fas fa-wind"></i> Wind: {day.day.maxwind_kph} kph</p>
                <p><i className="fas fa-water"></i> Humidity: {day.day.avghumidity}%</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
