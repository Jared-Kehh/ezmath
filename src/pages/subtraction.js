import '../App.css';
import '../styles/about.css';
import '../styles/game.css';
import logo from '../7121318-200.png';
import React, { useState, useEffect } from 'react';
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
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [userAnswer, setUserAnswer] = useState(null);
    const [result, setResult] = useState('');
    const [timeLeft, setTimeLeft] = useState(10);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);

    // Function to generate two random numbers
    const generateNumbers = () => {
        let newNum1 = Math.floor(Math.random() * 100) + 1;
        let newNum2 = Math.floor(Math.random() * 100) + 1;
        
        // Ensure num1 is greater than or equal to num2 to avoid negative results
        if (newNum2 > newNum1) {
            [newNum1, newNum2] = [newNum2, newNum1];
        }
        
        setNum1(newNum1);
        setNum2(newNum2);
        setResult('');
        setUserAnswer(null);
        setTimeLeft(10);
        generateOptions(newNum1, newNum2);
    };

    // Function to generate multiple-choice options
    const generateOptions = (num1, num2) => {
        const correctAnswer = num1 - num2;
        const options = [correctAnswer];

        while (options.length < 4) {
            const randomOffset = Math.floor(Math.random() * 20) - 10;
            const randomAnswer = correctAnswer + randomOffset;

            if (randomAnswer !== correctAnswer && !options.includes(randomAnswer)) {
                options.push(randomAnswer);
            }
        }

        setOptions(shuffleArray(options));
    };

    // Function to shuffle an array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Function to check the user's answer
    const checkAnswer = (selectedAnswer) => {
        const correctAnswer = num1 - num2;
        if (selectedAnswer === correctAnswer) {
            setResult('✅ Correct!');
            setScore(score + 1);
        } else {
            setResult(`❌ Incorrect! The answer is ${correctAnswer}.`);
        }
        setTimeout(() => {
            generateNumbers();
        }, 1000);
    };

    // Timer logic
    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setResult('⏰ Time’s up!');
            setTimeout(() => {
                generateNumbers();
            }, 1000);
        }
    }, [timeLeft]);

    // Generate the first question when the component mounts
    useEffect(() => {
        generateNumbers();
    }, []);

    return (
        <div className="game-container">
            <h1 className="game-title">Subtraction Game 🎮</h1>
            <p className="scoreboard">Score: <span className="score">{score}</span></p>
            
            <div className="question-box">
                <p>What is <span className="num">{num1}</span> - <span className="num">{num2}</span>?</p>
                <div className="timer-bar" style={{ width: `${timeLeft * 10}%` }}></div>
                <p className="time-left">Time left: {timeLeft}s</p>
            </div>

            <div className="options">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className="option-button"
                        onClick={() => checkAnswer(option)}
                        disabled={userAnswer !== null}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <p className="result">{result}</p>
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

export function Subtraction() {
    return (
    <>
        <AppHeader />
        <AppBody />
        <AppFooter />
    </>
);
}