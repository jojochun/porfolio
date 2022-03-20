import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
