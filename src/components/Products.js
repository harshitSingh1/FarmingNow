import React from 'react';
import '../styles/style.css';

const Products = () => {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        our <span>products</span>
      </h1>

      <div className="product-slider">
        <div className="box">
          <img src="image/product-1.png" alt="" />
          <h3>product 1</h3>
          <div className="price">$10</div>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        {/* Add more products as necessary */}
      </div>
    </section>
  );
};

export default Products;
