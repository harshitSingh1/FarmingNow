import React, { useEffect, useState } from 'react';

function Schemes_Page() {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch data from the deployed backend URL
    fetch('https://farming-now-server.vercel.app/scrape-schemes')
      .then((response) => response.json())
      .then((data) => {
        setSchemes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="Schemes-Page">
      <h1 className="heading">
        Government <span>Schemes</span>
      </h1>
      {loading ? (
        <p className="loading">Loading . . .</p>
      ) : (
        <div className="schemes">
          {schemes.map((scheme, index) => (
            <div key={index} className="scheme">
              <div className="figure" dangerouslySetInnerHTML={{ __html: scheme.figure }} />
              <figcaption>{scheme.figcaption}</figcaption>
              <p>{scheme.blog_descp}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Schemes_Page;
