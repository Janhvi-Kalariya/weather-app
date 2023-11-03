import React, { useState, useEffect } from 'react';
import Card from './Card';
import Input from './Input';


const WeatherComponent = () => {

    const [citynm, setCity] = useState("");

    function addCity(cityName) {
      setCity(cityName);
    }

  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '6cc2d82e7c74df055ea17d88fdae6156';
  const unit = "metric";
  const city = citynm ? citynm : "London"; 
  

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  },[apiKey, city]);

  return (
    <div>
      {weatherData ? (
        <>
        <Input
            onAdd={addCity}
        />
        <Card
            cityName={weatherData.name}
            icon={weatherData.weather[0].icon}
            temperature={Math.round(weatherData.main.temp)}
            descp={weatherData.weather[0].description} 
            feel={weatherData.main.feels_like}
            humidity={weatherData.main.humidity}
            wind={weatherData.wind.speed}
            tempMin={weatherData.main.temp_min}
            tempMax={weatherData.main.temp_max}
        />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
