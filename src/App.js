import React from 'react';
import Header from './Header/header'
import About from './About/about'
import Footer from './Footer/footer'
import Course from './Course/Course'
import HeroImage from './hero1.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="hero-section">
      <div className='hero-img'>
        <img src={HeroImage} className='hero-image' alt='heroSectionImage'></img>
      </div>
      <div className="hero-content">
        <p className='hero-title'>Welcome to</p>
        <h1 className='hero-whoop'>Edumark</h1>
        <h2 className='hero-desc'>
          Learn Your Favorite Course At Your Ease and Comfort
        </h2>
        <button className="hero-btn">Enroll a Course</button>
      </div>
      
    </section>
    <About/>
    <Course/>
    <Footer/>
    </div>
  );
}

export default App;
