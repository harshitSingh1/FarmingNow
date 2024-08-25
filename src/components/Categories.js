import React from 'react';
import '../styles/style.css';

const Categories = () => {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        shop by <span>category</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src="image/category-1.png" alt="" />
          <h3>category 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        {/* Add more categories as necessary */}
      </div>
    </section>
  );
};

export default Categories;
