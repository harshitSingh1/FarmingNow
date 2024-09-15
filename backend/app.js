// app.js

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

// Initialize Express App
const app = express();

// Middleware
app.use(cors());

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Backend API');
});

// Scrape Blogs Route
app.get('/scrape', async (req, res) => {
  try {
    const response = await axios.get('https://community.data.gov.in/all-blogs/');
    const html = response.data;
    const $ = cheerio.load(html);

    const blogs = [];

    $('#groups_post .grid').each((index, element) => {
      const figure = $(element).find('figure').html();
      const figcaption = $(element).find('figcaption').text();
      const blog_descp = $(element).find('.blog_descp').attr('title');

      blogs.push({ figure, figcaption, blog_descp });
    });

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Error scraping data' });
  }
});

// Scrape Government Schemes Route
app.get('/scrape-schemes', async (req, res) => {
  try {
    const response = await axios.get('https://community.data.gov.in/all-blogs/?searchtext=scheme&community=&ministry=&department=&organisation=&sector=&searchvis=Search&as_fid=6523f3b2a52a3746e50b46a2ec411470187ba3b2');
    const html = response.data;
    const $ = cheerio.load(html);

    const schemes = [];

    $('#groups_post .grid').each((index, element) => {
      const figure = $(element).find('figure').html();
      const figcaption = $(element).find('figcaption').text();
      const blog_descp = $(element).find('.blog_descp').attr('title');

      schemes.push({ figure, figcaption, blog_descp });
    });

    res.json(schemes);
  } catch (error) {
    res.status(500).json({ error: 'Error scraping data' });
  }
});

// Export the app to be used in server.js
module.exports = app;
