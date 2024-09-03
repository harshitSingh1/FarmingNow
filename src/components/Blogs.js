import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the blog data from the server
    fetch('http://localhost:5000/scrape')
      .then(response => response.json())
      .then(data => setBlogs(data.slice(0, 3))) // Take the first 3 blogs
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleReadMore = () => {
    navigate('/Blog_Page');
  };

  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our <span>blogs</span>
      </h1>

      <div className="box-container">
        {blogs.map((blog, index) => (
          <div className="box" key={index}>
            <div className="figure" dangerouslySetInnerHTML={{ __html: blog.figure }} />
            <figcaption>{blog.figcaption}</figcaption>
            <p>{blog.blog_descp}</p>
          </div>
        ))}
      </div>

      <div className="read-more-container">
        <button className="btn" onClick={handleReadMore}>Read More</button>
      </div>
    </section>
  );
};

export default Blogs;
