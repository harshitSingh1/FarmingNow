// src/dataService.js
import axios from 'axios';

const NASA_API_URL = 'https://power.larc.nasa.gov/api/application/indicators/point?start=2017&end=2022&latitude=28&longitude=77&format=json&user=user';

export const fetchData = async () => {
  try {
    const response = await axios.get(NASA_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
