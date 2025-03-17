import '../App.css';
import '../styles/register.css'
import logo from '../7121318-200.png';
import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <body>
      <div id="register">
        <h1>Register</h1>
        <div className="register">
          <form>
            <input type="text" placeholder="Username" required/>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </body>
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

export function Register() {
  return (
    <>
    <AppHeader/>
    <AppBody/>
    <AppFooter/>
    </>
  );
}