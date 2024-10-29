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

function buttonFunc(){
  document.getElementById("myDropdown").classList.toggle("show")
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function AppBody() {
  return(
    <div className='MathSubjects'>
      <div id='about'>
        <h1>What is this about?</h1>
      </div>
      <div id='aboutsec'>
        <h3>These concepts can be a little hard for students to learn so 
          this will make each math concept easy to understand. Each section
          will have a game and a short quiz that can help them to refresh
          their math skills and become proficient at them.</h3>
      </div>
      <div id='subject'>
        <h1>Addition</h1>
        <h3>This is a Math Adding Game!</h3>
        <button onclick="buttonFunc()" class="dropbtn"><a href='#'>Play!</a></button>
        <div id="myDropdown" class="dropdown-content">
          <a href='#'>Easy</a>
          <a href='#'>Medium</a>
          <a href='#'>Hard</a>
        </div>
      </div>
      <div id='subject'>
        <h1>Subtraction</h1>
        <h3>This is a Math Subtracting Game!</h3>
        <button onclick="buttonFunc()" class="dropbtn"><a href='#'>Play!</a></button>
        <div id="myDropdown" class="dropdown-content">
          <a href='#'>Easy</a>
          <a href='#'>Medium</a>
          <a href='#'>Hard</a>
        </div>
      </div>
      <div id='subject'>
        <h1>Multiplication</h1>
        <h3>This is a Math Multiplying Game!</h3>
        <button onclick="buttonFunc()" class="dropbtn"><a href='#'>Play!</a></button>
        <div id="myDropdown" class="dropdown-content">
          <a href='#'>Easy</a>
          <a href='#'>Medium</a>
          <a href='#'>Hard</a>
        </div>
      </div>
      <div id='subject'>
        <h1>Division</h1>
        <h3>This is a Math Dividing Game!</h3>
        <button onclick="buttonFunc()" class="dropbtn"><a href='#'>Play!</a></button>
        <div id="myDropdown" class="dropdown-content">
          <a href='#'>Easy</a>
          <a href='#'>Medium</a>
          <a href='#'>Hard</a>
        </div>
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