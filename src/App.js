import React from 'react';
import './styles/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import Contact from './components/contact_us';
import About from './components/About';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import BlogPage from './components/Blogs_Page';
import SchemesPage from './components/Schemes_Page';
import PestControl from './components/PestControl';
import SoilHealthMonitoring from './components/SoilHealthMonitoring';
import Weather from './components/Weather';
import FertilizerRecommendation from './components/FertilizerRecommendation';
import CropRecommendation from './components/CropRecommendation';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Features />
              <About />
              <Blogs />
              <Contact />
            </>
          } />
          <Route path="/Blog_Page" element={<BlogPage />} />
          <Route path="/schemes" element={<SchemesPage />} />
          <Route path="/pest-control" element={<PestControl />} />
          <Route path="/soil" element={<SoilHealthMonitoring />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/FertilizerRecommendation" element={<FertilizerRecommendation />} />
          <Route path="/CropRecommendation" element={<CropRecommendation />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;