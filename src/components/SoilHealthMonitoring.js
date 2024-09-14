import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/SoilHealthMonitoring.css';
import { motion } from 'framer-motion'; // For animations

const SoilHealthMonitoring = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [soilData, setSoilData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Check if geolocation is available
        window.scrollTo(0, 0);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                () => {
                    setError('Unable to retrieve your location.');
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, []);

    useEffect(() => {
        const fetchSoilData = async () => {
            if (latitude && longitude) {
                setLoading(true);
                try {
                    const response = await axios.get(
                        `https://power.larc.nasa.gov/api/application/indicators/point`,
                        {
                            params: {
                                start: 2017,
                                end: 2022,
                                latitude: latitude,
                                longitude: longitude,
                                format: 'json',
                                user: 'user'
                            },
                            headers: {
                                accept: 'application/json'
                            }
                        }
                    );
                    setSoilData(response.data);
                } catch (err) {
                    setError('Failed to fetch soil data.');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchSoilData();
    }, [latitude, longitude]);

    const handleManualLocation = () => {
        const lat = parseFloat(prompt('Enter latitude:'));
        const lon = parseFloat(prompt('Enter longitude:'));
        if (!isNaN(lat) && !isNaN(lon)) {
            setLatitude(lat);
            setLongitude(lon);
            setError(null);
        } else {
            alert('Invalid coordinates.');
        }
    };

    // Function to generate irrigation tips based on soil moisture
    const getIrrigationTips = () => {
        if (!soilData) return null;
        const avgSoilMoisture = soilData.DB_AVG;
        let tip = '';

        if (avgSoilMoisture < 10) {
            tip = 'Soil moisture is very low. Consider increasing irrigation frequency.';
        } else if (avgSoilMoisture >= 10 && avgSoilMoisture < 25) {
            tip = 'Soil moisture is moderate. Maintain current irrigation practices.';
        } else {
            tip = 'Soil moisture is high. Reduce irrigation to prevent waterlogging.';
        }

        return tip;
    };

    // Function to suggest crops based on soil and climate data
    const getCropSuggestions = () => {
        if (!soilData) return null;
        const precipitation = soilData.PRECTOTCORR_SUM;
        const avgTemp = soilData.T2M_AVG;
        let crops = [];

        // Example crop suggestions based on precipitation and temperature
        if (precipitation > 600 && avgTemp > 20) {
            crops = ['Rice', 'Sugarcane', 'Cotton'];
        } else if (precipitation > 400 && avgTemp > 18) {
            crops = ['Wheat', 'Barley', 'Millet'];
        } else if (precipitation <= 400 && avgTemp > 15) {
            crops = ['Sorghum', 'Maize', 'Pulses'];
        } else {
            crops = ['Millets', 'Finger Millet', 'Maize'];
        }

        return crops;
    };

    return (
        <motion.div 
            className="container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        ><h1 className="heading">
        Soil <span>Updates</span>
      </h1>
            {error && <p className="error">{error}</p>}
            {!latitude && !longitude && !error && (
                <button onClick={handleManualLocation} className="manual-location-button">
                    Enter Location Manually
                </button>
            )}
            {loading && <p className="loading">Loading soil data...</p>}
            {soilData && (
                <div className="soil-data">
                    <h2>Soil Health Data</h2>
                    <div className="data-grid">
                        <div className="data-item">
                            <strong>Average Soil Moisture:</strong>
                            <span>{soilData.DB_AVG ? `${soilData.DB_AVG} mm` : 'No data available'}</span>
                        </div>
                        <div className="data-item">
                            <strong>Maximum Soil Moisture:</strong>
                            <span>{soilData.DB_MAX_AVG ? `${soilData.DB_MAX_AVG} mm` : 'No data available'}</span>
                        </div>
                        <div className="data-item">
                            <strong>Minimum Soil Moisture:</strong>
                            <span>{soilData.DB_MIN_AVG ? `${soilData.DB_MIN_AVG} mm` : 'No data available'}</span>
                        </div>
                        <div className="data-item">
                            <strong>Soil Moisture Range:</strong>
                            <span>{soilData.DB_RANGE ? `${soilData.DB_RANGE} mm` : 'No data available'}</span>
                        </div>
                        <div className="data-item">
                            <strong>Precipitation (Annual Total):</strong>
                            <span>{soilData.PRECTOTCORR_SUM ? `${soilData.PRECTOTCORR_SUM} mm` : 'No data available'}</span>
                        </div>
                    </div>
                </div>
            )}
            {soilData && (
                <div className="recommendations">
                    <h2>Recommendations</h2>
                    <div className="recommendation-item">
                        <h3>Irrigation Tips</h3>
                        <p>{getIrrigationTips()}</p>
                    </div>
                    <div className="recommendation-item">
                        <h3>Suggested Crops</h3>
                        <ul>
                            {getCropSuggestions().map((crop, index) => (
                                <li key={index}>{crop}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default SoilHealthMonitoring;
