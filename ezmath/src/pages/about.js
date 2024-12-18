import '../App.css';
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
      <div className="AppBodyContent">
        <h1>App Body</h1>
      </div>
    </div>
  );
};

export function About() {
  return (
    <>
      <AppHeader />
      <AppBody />
    </>
  );
}