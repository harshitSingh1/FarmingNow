import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/FertilizerRecommendation.css';

const FertilizerRecommendation = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [weatherData, setWeatherData] = useState({});
    const [soilType, setSoilType] = useState('');
    const [cropName, setCropName] = useState('');
    const [nitrogen, setNitrogen] = useState('');
    const [phosphorous, setPhosphorous] = useState('');
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
        if (!cropName || !nitrogen || !phosphorous || !soilType) {
            alert('Please fill all fields.');
            return;
        }
        
        const temperature = weatherData?.DB_004 || 'unknown';
        const humidity = weatherData?.WB_MAX_AVG || 'unknown';
        const moisture = weatherData?.MCDB_WB_980 || 'unknown';

        try {
            const response = await axios.post(
                'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC3_eBo1e6hL3QEnqQ1JWG95rzNsearDu8',
                {
                    contents: [
                        {
                            parts: [
                                {
                                    text: `Based on the following information, recommend suitable fertilizers: Temperature: ${temperature}°C, Humidity: ${humidity}%, Moisture: ${moisture}%, Soil Type: ${soilType}, Crop Name: ${cropName}, Nitrogen: ${nitrogen} kg/ha, Phosphorous: ${phosphorous} kg/ha. Please provide a list of 2-3 recommended fertilizers, along with application rates and a brief explanation for each recommendation.`
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
        <div className="fertilizer-container">
            <h1 className="heading">
            Fertilizer <span>Recommendation</span>
      </h1>
      {loading ? (
                <p>Fetching weather data...</p>
            ) : (
                <div className="form-row">
                    <form onSubmit={handleSubmit} className="fertilizer-form">
                        <label>Soil Type:
                            <select value={soilType} onChange={(e) => setSoilType(e.target.value)}>
                                <option value="None">--Select--</option>
                                <option value="Loamy">Loamy</option>
                                <option value="Clay">Clay</option>
                                <option value="Sandy">Sandy</option>
                                <option value="Silty">Silty</option>
                            </select>
                        </label>
                        <label>Crop Name:
                            <input
                                type="text"
                                value={cropName}
                                onChange={(e) => setCropName(e.target.value)}
                                required
                            />
                        </label>
                        <label>Nitrogen (kg/ha):
                            <input
                                type="number"
                                value={nitrogen}
                                onChange={(e) => setNitrogen(e.target.value)}
                                required
                            />
                        </label>
                        <label>Phosphorous (kg/ha):
                            <input
                                type="number"
                                value={phosphorous}
                                onChange={(e) => setPhosphorous(e.target.value)}
                                required
                            />
                        </label>
                        <button type="submit" className="submit-btn">Get Recommendation</button>
                    </form>
                    <div className="image-container">
                        <img src="images/fertilizer4.png" alt="Fertilizer" />
                    </div>
                </div>
            )}
            {recommendation && (
                <div className="recommendation">
                    <h2>Recommended Fertilizers:</h2>
                    <div dangerouslySetInnerHTML={{ __html: recommendation }} />
                </div>
            )}
        </div>
    );
};

export default FertilizerRecommendation;