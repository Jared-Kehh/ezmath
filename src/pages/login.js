import '../App.css';
import '../styles/login.css';
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
    <div className="AppBody">
      <h1>Login</h1>
      <div className="login">
        <form>
          <input type="text" placeholder="Username" required/>
          <input type="password" placeholder="Password" required/>
          <button type="submit">Login</button>
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