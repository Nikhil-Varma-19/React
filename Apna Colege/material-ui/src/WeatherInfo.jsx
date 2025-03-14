import React from 'react';
import './WeatherInfo.css'; 

export default function WeatherInfo({ info }) {
  return (
    <div className="weather-info-container">
      <h1>Weather Info</h1>
      <div className="info">
        <span>Place: {info?.name}</span>
        <span>Temperature: {info?.main?.temp}°C</span>
        <span>Pressure: {info?.main?.pressure} hPa</span>
        <span>Sea Level: {info?.main?.sea_level} meters</span>
      </div>
    </div>
  );
}
