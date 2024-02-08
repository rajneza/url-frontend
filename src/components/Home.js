import React from 'react';
// import './Navbar.css';
// import logo from './image/logo.jpg'
import './Homepage.css'
import Homepage from './Homepage';


const Home = () => {
  return (
    <div className="App">
        <Homepage/>
      <header>
        <h1>URL Shortener</h1>
        <p>Shorten your long URLs quickly and easily!</p>
      </header>
      
      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Shorten URLs</h2>
            <p>Enter your long URL and get a shortened version instantly.</p>
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <h3>Fast</h3>
            <p>Get your shortened URLs quickly without any delay.</p>
          </div>
          <div className="feature">
            <h3>Easy to Use</h3>
            <p>Simple interface for shortening URLs with just a few clicks.</p>
          </div>
          <div className="feature">
            <h3>Customizable</h3>
            <p>Customize your shortened URLs with meaningful tags.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
