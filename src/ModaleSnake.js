import React, { useState, useEffect } from 'react';
import './ModaleSnake.css';

const ModaleSnake = ({ isOpen, onClose }) => {
    const [direction, setDirection] = useState('RIGHT');
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState({ x: 15, y: 15 });
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [recordSnake, setRecordSnake] = useState(parseInt(localStorage.getItem('recordSnake')) || 0);

    const gridSize = 20;

    useEffect(() => {
        const handleDirection = (e) => {
            if (e.key === 'ArrowUp' && direction !== 'DOWN') setDirection('UP');
            else if (e.key === 'ArrowDown' && direction !== 'UP') setDirection('DOWN');
            else if (e.key === 'ArrowLeft' && direction !== 'RIGHT') setDirection('LEFT');
            else if (e.key === 'ArrowRight' && direction !== 'LEFT') setDirection('RIGHT');
        };

        window.addEventListener('keydown', handleDirection);
        return () => window.removeEventListener('keydown', handleDirection);
    }, [direction]);

    useEffect(() => {
        if (gameOver) return;

        const interval = setInterval(moveSnake, 200);
        return () => clearInterval(interval);
    }, [snake, direction, gameOver]);

    const moveSnake = () => {
        const head = { ...snake[0] };
        if (direction === 'UP') head.y -= 1;
        if (direction === 'DOWN') head.y += 1;
        if (direction === 'LEFT') head.x -= 1;
        if (direction === 'RIGHT') head.x += 1;

        const newSnake = [head, ...snake.slice(0, -1)];

        if (head.x === food.x && head.y === food.y) {
            newSnake.push({});
            setFood({
                x: Math.floor(Math.random() * gridSize),
                y: Math.floor(Math.random() * gridSize)
            });
            const newScore = score + 1;
            setScore(newScore);
            if (newScore > recordSnake) {
                setRecordSnake(newScore);
                localStorage.setItem('recordSnake', newScore);
            }
        }

        setSnake(newSnake);

        if (checkGameOver(newSnake)) {
            setGameOver(true);
        }
    };

    const checkGameOver = (snake) => {
        const head = snake[0];
        if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
            return true;
        }
        for (let i = 1; i < snake.length; i++) {
            if (snake[i].x === head.x && snake[i].y === head.y) {
                return true;
            }
        }
        return false;
    };

    const handleDirectionClick = (newDirection) => {
        if (gameOver) return;

        if (newDirection === 'UP' && direction !== 'DOWN') setDirection('UP');
        if (newDirection === 'DOWN' && direction !== 'UP') setDirection('DOWN');
        if (newDirection === 'LEFT' && direction !== 'RIGHT') setDirection('LEFT');
        if (newDirection === 'RIGHT' && direction !== 'LEFT') setDirection('RIGHT');
    };

    const nouvellePartie = () => {
        setSnake([{ x: 10, y: 10 }]);
        setFood({ x: 15, y: 15 });
        setDirection('RIGHT');
        setGameOver(false);
        setScore(0);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close" onClick={onClose}>X</button>
                <div className="snake-game">
                    <div className="grid">
                        {Array.from({ length: gridSize }, (_, y) => (
                            <div key={y} className="row">
                                {Array.from({ length: gridSize }, (_, x) => (
                                    <div key={x} className={`cell ${snake.some(s => s.x === x && s.y === y) ? 'snake' : ''} ${food.x === x && food.y === y ? 'food' : ''}`} />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="controls">
                        {gameOver ? (
                            <div>
                                <div>Partie terminée - Record: {recordSnake}</div>
                               
                            </div>
                        ) : (
                            <>
                                <div>Nourriture: {score}</div>
                                <div>Record: {recordSnake}</div>
                            </>
                        )}
                        <button onClick={() => handleDirectionClick('UP')}>HAUT</button>
                        <div>
                            <button onClick={() => handleDirectionClick('LEFT')}>GAUCHE</button>
                            <button onClick={() => handleDirectionClick('RIGHT')}>DROITE</button>
                        </div>
                        <button onClick={() => handleDirectionClick('DOWN')}>BAS</button>
                        <div className='finDePageUI'>
                            
                            <dix>
                                <button onClick={nouvellePartie} className='tpUI'>
                                    NOUVELLE PARTIE
                                </button>
                            </dix>
                            
                            <div>
                                <a href="#portfolio">
                                    <dix><button onClick={onClose} className='portfolioA'>PORTFOLIO</button></dix>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    {/* <div className='finDePageUI'>
                            
                            <dix className='trac'>
                                <button onClick={nouvellePartie} className='tpUI'>
                                    NOUVELLE PARTIE
                                </button>
                            </dix>
                            
                            <div className='trac'>
                                <a href="#portfolio">
                                    <dix><button onClick={onClose} className='portfolioA'>PORTFOLIO</button></dix>
                                </a>
                            </div>
                            
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ModaleSnake;
