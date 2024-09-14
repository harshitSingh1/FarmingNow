import React from 'react';
import './styles/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import Products from './components/Products';
import Categories from './components/Categories';
import Learn from './components/Learn';
import About from './components/About';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import BlogPage from './components/Blogs_Page';
import SchemesPage from './components/Schemes_Page';
import PestControl from './components/PestControl';
import SoilHealthMonitoring from './components/SoilHealthMonitoring';

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
              <Products />
              <Categories />
              <Learn />
              <About />
              <Blogs />
            </>
          } />
          <Route path="/Blog_Page" element={<BlogPage />} />
          <Route path="/schemes" element={<SchemesPage />} />
          <Route path="/pest-control" element={<PestControl />} />
          <Route path="/soil" element={<SoilHealthMonitoring />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;