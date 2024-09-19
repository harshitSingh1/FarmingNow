import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CropRecommendation.css';

const CropRecommendation = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [weatherData, setWeatherData] = useState({});
    const [soilType, setSoilType] = useState('');
    const [cropDuration, setcropDuration] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        }
    }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
        const fetchWeatherData = async () => {
            if (latitude && longitude) {
                setLoading(true);
                try {
                    const weatherResponse = await axios.get(
                        'https://power.larc.nasa.gov/api/application/indicators/point', 
                        {
                            params: {
                                start: 2017,
                                end: 2022,
                                latitude,
                                longitude,
                                format: 'json',
                                user: 'user'
                            },
                            headers: { accept: 'application/json' }
                        }
                    );
                    setWeatherData(weatherResponse.data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching weather data:', error);
                    setLoading(false);
                }
            }
        };

        fetchWeatherData();
    }, [latitude, longitude]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!cropDuration || !soilType) {
            alert('Please fill all fields.');
            return;
        }
        const currentMonth = new Date().getMonth() + 1;
        const precipitation = weatherData?.PRECTOTCORR?.[currentMonth] || 'unknown';
        const temperature = weatherData?.DB_AVG || 'unknown';
        const humidity = weatherData?.WB_MAX_AVG || 'unknown';

        try {
            const response = await axios.post(
                'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC3_eBo1e6hL3QEnqQ1JWG95rzNsearDu8',
                {
                    contents: [
                        {
                            parts: [
                                {
                                    text: `Based on the following information, recommend All the crops that should be grown : Average Temperature: ${temperature}°C, Average Humidity: ${humidity}% and Average Precipitation: ${precipitation}mm of this month, Soil Type: ${soilType}, Crop Duration: ${cropDuration}, location india. Please provide a list of some recommended crops with growing procedure and some suggestion .`
                                }
                            ]
                        }
                    ]
                },
                { headers: { 'Content-Type': 'application/json' } }
            );
            const generatedText = response.data.candidates[0].content.parts[0].text;

            // Format the response for better readability
            const formattedText = generatedText
                .replace(/(\*\*.*?\*\*)/g, "<strong>$1</strong>")
                .replace(/\n/g, "<br/>")
                .replace(/[*#]/g, ' ');

            setRecommendation(formattedText);
        } catch (error) {
            console.error('Error generating fertilizer recommendation:', error);
        }
    };

    return (
        <div className="crop-container">
            <h1 className="heading">Crop <span>Recommendation</span></h1>
      {loading ? (
                <p>Fetching weather data...</p>
            ) : (
                <div className="form-row">
                    <form onSubmit={handleSubmit} className="crop-form">
                    <h1>Fill the correct details:</h1>
                    <p>Get personalized crop recommendations based on your location and soil type. Make sure to select your soil type and specify the crop duration to get the most accurate results.</p>
                        <label>Soil Type:
                            <select value={soilType} onChange={(e) => setSoilType(e.target.value)}>
                                <option value="None">--Select--</option>
                                <option value="Loamy">Loamy</option>
                                <option value="Clay">Clay</option>
                                <option value="Sandy">Sandy</option>
                                <option value="Silty">Silty</option>
                            </select>
                        </label>
                        <label>Crop Duration(months):
                            <input
                                type="text"
                                value={cropDuration}
                                onChange={(e) => setcropDuration(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit" className="submit-btn">Get Recommendation</button>
                    </form>
                    <div className="image-container">
                        <img src="images/crop2.png" alt="Crop" />
                    </div>
                </div>
            )}
            {recommendation && (
                <div className="recommendation">
                    <h1>Crop Recommendations:</h1>
                    <div dangerouslySetInnerHTML={{ __html: recommendation }} />
                </div>
            )}
        </div>
    );
};

export default CropRecommendation;