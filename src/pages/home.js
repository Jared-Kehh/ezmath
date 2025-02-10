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
      <div className='aboutmath'>
        <div id='about'>
          <h1>What is this about?</h1>
          <h3>These concepts can be a little hard for students to learn so 
            this will make each math concept easy to understand. Each section
            will have a game and a short quiz that can help them to refresh
            their math skills and become proficient at them.</h3>
        </div>
      </div>
    </header>
  );
};

function AppBody() {
  return(
    <div className='MathSubjects'>
      <div id='subject'>
        <h1>Addition</h1>
        <h3>This is a Math Adding Game!</h3>
        {/* <button class="dropbtn"><Link to="/addition">Play!</Link></button> */}
        <Link to="/addition"><li class="dropbtn">Addition</li></Link>
      </div>
      <div id='subject'>
        <h1>Subtraction</h1>
        <h3>This is a Math Subtracting Game!</h3>
        <Link to="/subtraction"><li class="dropbtn">Subtraction</li></Link>
      </div>
      <div id='subject'>
        <h1>Multiplication</h1>
        <h3>This is a Math Multiplying Game!</h3>
        <Link to="/multiplication"><li class="dropbtn">Multiplication</li></Link>
      </div>
      <div id='subject'>
        <h1>Division</h1>
        <h3>This is a Math Dividing Game!</h3>
        <Link to="/division"><li class="dropbtn">Division</li></Link>
      </div>

    </div>
  );
}

function AppFooter() {
  return(
    <footer>
      <div className='about'>
        {/* <h4>&copy; ezMath</h4> */}
      </div>
    </footer>
  );
}

export function Home() {
  return(
    <>
    <AppHeader/>
    <AppBody/>
    <AppFooter/>
    </>
  )
}
