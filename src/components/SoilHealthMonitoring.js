import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/SoilHealthMonitoring.css';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const SoilHealthMonitoring = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [locationName, setLocationName] = useState('');
    const [currentMonth, setCurrentMonth] = useState(null);
    const [soilData, setSoilData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch user's location on component mount
    useEffect(() => {
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
        // Get current month
        const now = new Date();
        setCurrentMonth(now.getMonth() + 1);
    }, []);

    // Fetch soil data and reverse geocoding for location name
    useEffect(() => {
        const fetchSoilData = async () => {
            if (latitude && longitude) {
                setLoading(true);
                try {
                    // Fetch soil data from NASA API
                    const soilResponse = await axios.get(
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
                    setSoilData(soilResponse.data);

                    // Fetch location name using Mapbox reverse geocoding API
                    const locationResponse = await axios.get(
                        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1IjoicmlzaGl0MzBnIiwiYSI6ImNrdXhiZTA5ejJ4ajcyb3Fyb294YjAzNW0ifQ.8tmia-HeeyaCQpFlwRphwA`
                    );
                    if (locationResponse.data.features.length > 0) {
                        setLocationName(locationResponse.data.features[0].place_name);
                    } else {
                        setLocationName('Unknown location');
                    }
                } catch (err) {
                    setError('Failed to fetch data.');
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

    const getCropSuggestions = () => {
        if (!soilData) return null;
        const precipitation = soilData.PRECTOTCORR_SUM;
        const avgTemp = soilData.T2M_AVG;
        let crops = [];

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


    const LocationMarker = ({ setLatitude, setLongitude }) => {
        useMapEvents({
            click(e) {
                setLatitude(e.latlng.lat);
                setLongitude(e.latlng.lng);
            }
        });

        return null;
    };
    // Extract the average temperature (T2M_AVG) for the current month
    const getCurrentMonthTemperature = (t2mAvg) => {
        if (t2mAvg && currentMonth) {
            return t2mAvg[currentMonth] || 'No data available';
        }
        return 'No data available';
    };

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ zIndex: 1 }}
        >
            <h1 className="heading">
                Soil <span>Updates</span>
            </h1>
            {error && <p className="error">{error}</p>}
            {!latitude && !longitude && !error && (
                <button onClick={handleManualLocation} className="manual-location-button">
                    Enter Location Manually
                </button>
            )}
            {loading && <p className="loading">Loading data...</p>}
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
                        <div className="data-item">
                            <strong>Average Temperature:</strong>
                            <span>{getCurrentMonthTemperature(soilData.T2M_AVG)} °C</span>
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

            {latitude && longitude && (
                <div className="map-container">
                    <h2 className="map-title">Change Your Location</h2>
                    <p className="location-info">Marked Location: {locationName},  Latitude: {latitude.toFixed(4)},  Longitude: {longitude.toFixed(4)}</p>

                    <MapContainer
                        center={[latitude, longitude]}
                        zoom={13}
                        style={{ height: '400px', width: '100%', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: '8px' }}
                    >
                        <TileLayer
                            url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmlzaGl0MzBnIiwiYSI6ImNrdXhiZTA5ejJ4ajcyb3Fyb294YjAzNW0ifQ.8tmia-HeeyaCQpFlwRphwA`}
                            attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
                        />
                        <Marker position={[latitude, longitude]} icon={L.icon({
                            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                            shadowSize: [41, 41]
                        })}>
                            <Popup>{locationName || 'Your location'}</Popup>
                        </Marker>
                        <LocationMarker setLatitude={setLatitude} setLongitude={setLongitude} />
                    </MapContainer>
                </div>
            )}
        </motion.div>
    );
};

export default SoilHealthMonitoring;