import '../App.css';
import '../styles/about.css';
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
    const [score, setScore] = useState(0); // NEW: Score counter

    // Function to generate two random numbers
    const generateNumbers = () => {
        const newNum1 = Math.floor(Math.random() * 100) + 1;
        const newNum2 = Math.floor(Math.random() * 100) + 1;

        // Ensure num1 is always greater than num2 to avoid negative results
        const [larger, smaller] = newNum1 > newNum2 ? [newNum1, newNum2] : [newNum2, newNum1];

        setNum1(larger);
        setNum2(smaller);
        setResult('');
        setUserAnswer(null);
        setTimeLeft(10);
        generateOptions(larger, smaller);
    };

    // Function to generate multiple-choice options
    const generateOptions = (num1, num2) => {
        const correctAnswer = num1 - num2;
        const options = [correctAnswer];

        // Generate 3 random incorrect answers
        while (options.length < 4) {
            const randomOffset = Math.floor(Math.random() * 20) - 10;
            const randomAnswer = correctAnswer + randomOffset;

            if (randomAnswer !== correctAnswer && randomAnswer >= 0 && !options.includes(randomAnswer)) {
                options.push(randomAnswer);
            }
        }

        // Shuffle the options
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
            setResult('Correct! 🎉');
            setScore(score + 1); // NEW: Increment score
        } else {
            setResult(`Incorrect. The correct answer is ${correctAnswer}.`);
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
            setResult('Time’s up! ⏰');
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
        <div className="AppBody">
            <div className="AppBodyContent">
                <h1>Subtraction</h1>
                <p><strong>Score: {score}</strong></p> {/* NEW: Display score */}
                <p>What is {num1} - {num2}?</p>
                <p>Time left: {timeLeft} seconds</p>
                <div className="options">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => checkAnswer(option)}
                            disabled={userAnswer !== null}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <p>{result}</p>
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

export function Subtraction() {
    return (
    <>
        <AppHeader />
        <AppBody />
        <AppFooter />
    </>
);
}