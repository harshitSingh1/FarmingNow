import React from 'react';
import '../styles/style.css';

const Contact = () => {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        Contact <span>Us</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src="image/category-1.png" alt="" />
          <h3>Contact page</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        {/* Add more categories as necessary */}
      </div>
    </section>
  );
};

export default Contact;
