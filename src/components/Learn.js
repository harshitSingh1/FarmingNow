import React from 'react';
import '../styles/style.css';

const Learn = () => {
  return (
    <section className="learn" id="learn">
      <h1 className="heading">
        learn <span>with us</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src="image/learn-1.png" alt="" />
          <h3>learning 1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        {/* Add more learning sections as necessary */}
      </div>
    </section>
  );
};

export default Learn;
