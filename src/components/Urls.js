import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Url() {
  const [urls, setUrls] = useState([]);
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
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
    <div>
      <h1>User URLs</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit}>click</button>
      <ul>
        {urls.map((url, index) => (
          <li key={index}>
            <p>Original URL: {url.originalURL}</p>
            <p>Short URL: {url.shortURL}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Url;
