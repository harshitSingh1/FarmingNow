import React from 'react';
import './styles/style.css';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import Products from './components/Products';
import Categories from './components/Categories';
import Learn from './components/Learn';
import About from './components/About';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Products />
      <Categories />
      <Learn />
      <About />
      <Blogs />
    </div>
  );
}

export default App;
