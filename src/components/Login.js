import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { username, password }
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log(response)
      if (response.status == 200) {
        window.location.href = `/dashboard?username=${username}&password=${password}`;
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
        if(error.response.status == 401){
          
            setMessage("Incorrect Password")
        }
        else if(error.response.status == 404){
            setMessage("Incorrect Username")
        }
        else{
            console.log(error.response.status)
        }
     
    }
  };

  return (
    <div className='body'>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label><br/>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className='login-input'/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label><br/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='login-input'/>
        </div>
        <div>
          { message && <p className='login-error'>*{message}</p>}
          
        </div>
        <button type="submit" className='login-button'>Login</button>
        <p>Dont have an Account? <a href='/Register'>Register</a></p>
      </form>
    </div>
    </div>
    
  );
}

export default LoginForm;




