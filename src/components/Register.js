import React, { useState } from 'react';
import axios from 'axios';
import './RegisterPage.css'

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission
        console.log(errorMessage)
        const formData = { username, password };

        try {
            if(password.length <= 8){
                setErrorMessage("Password Should Contain atleast 9 charachters")
            }
            else{

            
            const response = await axios.post('http://localhost:5000/register', formData);

            console.log('Registration successful');
            }
        } catch (error) {
            //console.error('Registration failed:', error.message);
            if (error.response && error.response.status === 400) {
                setErrorMessage('Username already exists. Please choose a different username.');
            } else {
                setErrorMessage('Registration failed. Please try again later.');
            }
        }
    };

    return (
        <div className='register-body'>
    <div className="register-container">
        <div className='register-heading'>
        <h2>Register</h2>
        </div>
      
      <form onSubmit={handleSubmit} className="register-form">
        <div className="register-form-group">
          <label htmlFor="username">Username:</label><br/>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className='register-input'/><br />
        </div>
        <div className="register-form-group">
          <label htmlFor="password">Password:</label><br/>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='register-input'/><br /><br />
        </div>
        <div>
            <p className='register-error'>{errorMessage}</p>
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
    </div>
        
    );
}

export default RegisterForm;




{/* <div>
            <h2>Register Form</h2>
            <div>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label><br />
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <button type="submit">Register</button>
            </form>
        </div> */}
