import '../App.css';
import '../styles/about.css';
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
        <h1>About Us</h1>
        <p>ezMath is a simple and interactive math learning application designed to help users improve their math skills.</p>
        <p>Our goal is to make learning math fun and engaging for everyone.</p>
        <p>Whether you're a student looking to practice or an adult wanting to refresh your math knowledge, ezMath is here for you.</p>
        <p>We provide a variety of math problems and interactive features to enhance your learning experience.</p>
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

export function About() {
  return (
    <>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </>
  );
}