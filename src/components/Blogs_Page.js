import React, { useEffect, useState } from 'react';

function Blog_Page() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('http://localhost:5000/scrape')
      .then(response => response.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="Blog-Page">
      <h1 className="heading">
        Latest <span>Blogs</span>
      </h1>
      {loading ? (
          <p className = "loading">Loading . . .</p>
        ) : (
      <div className="blogs">
        {blogs.map((blog, index) => (
          <div key={index} className="blog">
            <div className="figure" dangerouslySetInnerHTML={{ __html: blog.figure }} />
            <figcaption>{blog.figcaption}</figcaption>
            <p>{blog.blog_descp}</p>
          </div>
        ))}
      </div>
        )}
    </div>
  );
}

export default Blog_Page;
