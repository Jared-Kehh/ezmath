import './App.css';
import logo from './7121318-200.png';
import React from 'react';

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
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Login</a></li>
            <li><a href='#'>Sign Up</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function AppBody() {
  return(
    <div className='MathSubjects'>
      <div id='subject'>
        <h1>Addition</h1>
        <h3>This is a Math Adding Game!</h3>
      </div>
      <div id='subject'>
        <h1>Subtraction</h1>
        <h3>This is a Math Subtracting Game!</h3>
      </div>
      <div id='subject'>
        <h1>Multiplication</h1>
        <h3>This is a Math Multiplying Game!</h3>
      </div>
      <div id='subject'>
        <h1>Division</h1>
        <h3>This is a Math Dividing Game!</h3>
      </div>
    </div>
  );
}

function AppFooter() {
  return(
    <footer>
      <div className='about'>
        <h4>&copy; ezMath</h4>

      </div>
    </footer>
  );
}

function App() {
  return(
    <>
    <AppHeader/>
    <AppBody/>
    <AppFooter/>
    </>
  )
}

export default App