// src/App.js
import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import './App.css';
import WorkShopGallery from './components/WorkShopGallery';
import Info from './components/Info';
function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Info id="about" />
      <WorkShopGallery />
    </div>
    
  );
}

export default App;
