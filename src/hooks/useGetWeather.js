import React, { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { WEATHER_API_KEY } from '@env';
import axios from 'axios';

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    
    // fetching weather data
    const fetchWeatherData = async () => {
      const options = {
        method: 'GET',
        url: `https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${latitude}/${longitude}&units=metric`,
        headers: {
          'X-RapidAPI-Key': WEATHER_API_KEY,
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
      };
  
      try {
        const response = await axios.request(options);
        const data = response.data;
        setWeather(data);
      } catch (error) {
        setError(error)
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          fetchWeatherData();
        },
        function (error) {
          console.log(error.code, error.message);
          setError("Failed to access location!");
        },
        // { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000 }
      );
    }, [latitude, longitude]);
    
    return [loading, error, weather];
}