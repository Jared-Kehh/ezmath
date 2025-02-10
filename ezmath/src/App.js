import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home.js';
import { About } from './pages/about.js';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Addition } from './pages/addition.js';
import { Subtraction } from './pages/subtraction.js';
import { Multiplication } from './pages/multiplication.js';
import { Division } from './pages/division.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/addition" element={<Addition/>}/>
        <Route path="/subtraction" element={<Subtraction/>}/>
        <Route path="/multiplication" element={<Multiplication/>}/>
        <Route path="/division" element={<Division/>}/>
      </Routes>
    </Router>
  );
};


export default App