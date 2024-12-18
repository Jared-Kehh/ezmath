import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home.js';
import { About } from './pages/about.js';
import { Login } from './pages/login';
import { Register } from './pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
};


export default App