import React from 'react';
import '../styles/style.css';

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our <span>blogs</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src="image/blog-1.jpg" alt="Blog 1" />
          <div className="content">
            <div className="icons">
              <a href="/"> <i className="fas fa-user"></i> by admin </a>
              <a href="/"> <i className="fas fa-calendar"></i> 21st May, 2023 </a>
            </div>
            <h3>blog title 1</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam magnam rem vel molestiae laborum eius?
            </p>
            <a href="/" className="btn">read more</a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-2.jpg" alt="Blog 2" />
          <div className="content">
            <div className="icons">
              <a href="/"> <i className="fas fa-user"></i> by admin </a>
              <a href="/"> <i className="fas fa-calendar"></i> 22nd May, 2023 </a>
            </div>
            <h3>blog title 2</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam magnam rem vel molestiae laborum eius?
            </p>
            <a href="/" className="btn">read more</a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-3.jpg" alt="Blog 3" />
          <div className="content">
            <div className="icons">
              <a href="/"> <i className="fas fa-user"></i> by admin </a>
              <a href="/"> <i className="fas fa-calendar"></i> 23rd May, 2023 </a>
            </div>
            <h3>blog title 3</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam magnam rem vel molestiae laborum eius?
            </p>
            <a href="/" className="btn">read more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
