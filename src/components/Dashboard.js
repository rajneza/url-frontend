
import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css'

function App() {
  const [originalURL, setLongUrl] = useState('');
  const [shortURL, setShortUrl] = useState('');
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');
  const password = urlParams.get('password');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const formData = {originalURL, username, password}
      const response = await axios.post('http://localhost:5000/api/shorten', formData);
      setShortUrl(response.data.shortURL);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  const [urls, setUrls] = useState([]);

  const handleUrls = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    const formData = { username }

    try {
        const response = await axios.post('http://localhost:5000/api/users', formData);
        setUrls(response.data)
        console.log('Registration successful');
    } catch (error) {
        console.error('Registration failed:', error.message);
        
    }
};

  return (
    <div className="App">
      <header className='dashboard-header'>
        <div className='dashboard-div-main'>
        <h1>URL Shortener</h1>
        </div>
        <div className='dashboard-div'>
        <a href='/login' className='dashboard-anchor'>Logout</a>
        </div>
      </header>
      
      <main>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={originalURL}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter URL to shorten"
          className='dashboard-input'
        />
          <button type="submit" className='dashboard-button'>Shorten URL</button>
          <button type="submit" className='dashboard-button' onClick={handleUrls}>ALL URL</button>
        </form>

        <div className="shortened-urls">
          <h2>Shortened URLs</h2>
          <ul>
            {/* Placeholder for shortened URLs */}
            <li>
              <p><strong>Original:</strong> <a href="#">{originalURL}</a></p>
              
              <p><strong>Shortened:</strong><a href={`http://localhost:5000/${shortURL}`} target="_blank" rel="noopener noreferrer">
                
            {`http://localhost:5000/${shortURL}`}
          </a></p>
            </li>
          </ul>
          {/* <ul>
        {urls.map((url, index) => (
          <li key={index}>
            <p>Original URL: {url.originalURL}</p>
            <p>Short URL: {url.shortURL}</p>
          </li>
        ))}
      </ul> */}
      <ul>
            {urls.map((url, index) => (
                <li key={index}>
                    <p><strong>Original URL: </strong>{url.originalURL}</p>
                    <p><strong>Short URL: </strong><a href={`http://localhost:5000/${url.shortURL}`} target="_blank" rel="noopener noreferrer">
                    {`http://localhost:5000/${url.shortURL}`}</a></p>
                </li>
            ))}
            {/* <li>
              <p><strong>Original:</strong> <a href="#">{originalURL}</a></p>
              
              <p><strong>Shortened:</strong><a href={`http://localhost:5000/${shortURL}`} target="_blank" rel="noopener noreferrer">
                
            {`http://localhost:5000/${shortURL}`}
          </a></p>
            </li> */}
          </ul>
        </div>
      </main>
    </div>
    
  );
}

export default App;

