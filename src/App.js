// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [longUrl, setLongUrl] = useState('');
//   const [shortUrl, setShortUrl] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/shorten', { originalUrl: longUrl });
//       setShortUrl(response.data.shortUrl);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>URL Shortener</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={longUrl}
//           onChange={(e) => setLongUrl(e.target.value)}
//           placeholder="Enter long URL"
//         />
//         <button type="submit">Shorten</button>
//       </form>
//       {shortUrl && (
//         <div>
//           <p>Shortened URL:</p>
//           <a href={`http://localhost:5000/${shortUrl}`} target="_blank" rel="noopener noreferrer">
//             {`http://localhost:5000/${shortUrl}`}
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Router, Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/Dashboard';
import Urls from './components/Urls'
import HomePage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} />
      <Route exact path='/urls' element={<Urls/>}></Route>
      <Route exact path='/homepage' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
