import React from 'react';
import '../styles/AboutUs.css'; // Import the corresponding CSS for styling
import { FaSeedling } from 'react-icons/fa'; // Import the seedling icon

const About = () => {
    return (
        <section className="about_us" id="about">
        <h1 className="heading">About <span>Us</span></h1>
            <div className="image">
                <img src="images/about-bg.jpg" alt="About Us Background" />
            </div>

            <div className="content">
                <span>Welcome to FarmingNow</span>
                <h3><span>Let us</span> tell you our story</h3>
                <FaSeedling className="icon" />
                <FaSeedling className="icon" />
                <FaSeedling className="icon" />
                <p>We are dedicated to transforming the agricultural landscape through innovative technology and data-driven solutions. Our platform empowers farmers with insights and recommendations tailored to their specific needs, ensuring optimal crop growth and yield. By integrating cutting-edge tools with real-time data, we bridge the gap between traditional farming practices and modern agricultural advancements. Join us in our mission to cultivate a smarter, more sustainable future for agriculture.</p>
                <a href="/" className="btn">Read More</a>
            </div>
        </section>
    );
};

export default About;
