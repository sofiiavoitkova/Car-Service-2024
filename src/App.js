// src/App.js
import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import './App.css';
import WorkShopGallery from './components/WorkShopGallery';
function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <WorkShopGallery /> 
    </div>
  );
}

export default App;
