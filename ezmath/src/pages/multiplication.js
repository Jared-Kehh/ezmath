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
            <h1>Multiplication</h1>
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

export function Multiplication() {
    return (
    <>
        <AppHeader />
        <AppBody />
        <AppFooter />
    </>
);
}