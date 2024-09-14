import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';

const Features = () => {

  const navigate = useNavigate();

    const goToSchemes = () => {
      navigate('/schemes');
    };
    const goToPestControl = () => {
      navigate('/pest-control');
    };
    const goToWeatherPage = () => {
      navigate('/Weather');
    };
    const goToSoilPage = () => {
      navigate('/soil');
    };
    const goToIrrigationPage = () => {
      navigate('/irrigation');
    };
  return (
    <section className="features" id="features">
      <h1 className="heading">
        our <span>features</span>
      </h1>

      <div className="box-container">
    <div className="box">
        <img src='images/icon-1.jpg' alt="image1" />
        <h3>Crop Recommendations</h3>
        <p>Discover the best crops for your area and season based on local climate and conditions.</p>
    </div>

    <div className="box" onClick={goToSchemes}>
        <img src="images/icon-2.jpg" alt="Government Schemes" />
        <h3>Government Schemes</h3>
        <p>Access tailored government schemes and subsidies to support your farming activities.</p>
      </div>
    
    <div className="box" onClick={goToPestControl}>
        <img src="images/icon-3.jpg" alt="" />
        <h3>Pest Control</h3>
        <p>Identify and manage pests effectively to protect your crops and maximize yield.</p>
    </div>

    <div className="box" onClick={goToWeatherPage}>
        <img src="images/icon-4.jpg" alt="" />
        <h3>Weather Prediction</h3>
        <p>Get accurate weather forecasts to plan your farming activities and safeguard your crops.</p>
    </div>

    <div className="box" onClick={goToIrrigationPage}>
        <img src="images/icon-5.jpg" alt="" />
        <h3>Irrigation Help</h3>
        <p>Optimize your irrigation practices with guidance tailored to your crops and weather conditions.</p>
    </div>

    <div className="box" onClick={goToSoilPage}>
        <img src="images/icon-6.jpg" alt="" />
        <h3>Soil Updates</h3>
        <p>Stay informed about soil conditions and get recommendations for improving soil health.</p>
    </div>
</div>

    </section>
  );
};

export default Features;
