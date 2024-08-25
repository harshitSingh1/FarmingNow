import React from 'react';
import '../styles/style.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        about <span>us</span>
      </h1>

      <div className="about-slider">
        <div className="box">
          <img src="image/about-img-1.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* Add more about sections as necessary */}
      </div>
    </section>
  );
};

export default About;
