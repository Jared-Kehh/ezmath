import '../App.css';
import '../styles/login.css';
import logo from '../7121318-200.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function AppHeader() {
  return (
    <header>
      <div className="MathApp">
        <div id='logoname'>
          <h1 id="welcome">Welcome To ezMath!</h1>
          <img id="logoImg" src={logo} alt="logo"/>
        </div>
        <nav id='navigation'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

function AppBody() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async(e) => {
    e.preventDefault();
    let response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    result = await response.json();
    console.warn(result);
    if (result.status === 'ok') {
      alert('Login successful');
      window.location.href = '/';
    } else {
      alert('Login failed: ' + result.error);
    }
  }
  return (
    <div className="AppBody">
      <h1>Login</h1>
      <div className="login-container">
        <form>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <button type="submit" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};

function AppFooter() {
  return(
    <footer>
      <div className='about'>
        {/* <h4>&copy; ezMath</h4> */}
      </div>
    </footer>
  );
}

export function Login() {
  return (
    <>
    <AppHeader/>
    <AppBody/>
    <AppFooter/>
    </>
  );
}