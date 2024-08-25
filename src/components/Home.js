import React from 'react';
import '../styles/style.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>
        <span>Empowering </span> Farmers with <span>Data-Driven</span> Insights
        </h3>
        <p>
        Discover the best crops for your region, stay informed on government schemes, and manage your farm with cutting-edge technology. Elevate your farming practices with real-time solutions.
        </p>
        <a href="/" className="btn">Get Started</a>
      </div>
    </section>
  );
};

export default Home;
