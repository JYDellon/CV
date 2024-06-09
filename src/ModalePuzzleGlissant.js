import React, { useState, useEffect, useRef } from 'react';
import './ModalePuzzleGlissant.css';

    const ModalePuzzleGlissant = ({ size: defaultSize, difficulty, showNumbers, imageUrl, numberColor, onClose }) => {
    const [size, setSize] = useState(defaultSize);
    const [movesCount, setMovesCount] = useState(0);
    const [gameWon, setGameWon] = useState(false);
    const [records, setRecords] = useState({ bestScore: Infinity });
    const [pieces, setPieces] = useState([]);
    const [emptyPosition, setEmptyPosition] = useState({ x: defaultSize - 1, y: defaultSize - 1 });
    
    const puzzleContainer = useRef(null);
    const movesCountElement = useRef(null);

    useEffect(() => {
        initializePuzzle(defaultSize);
        loadRecords();
        
    }, [defaultSize]);

    const initializePuzzle = (size) => {
        const newPieces = [];
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const number = (y === size - 1 && x === size - 1) ? 0 : y * size + x + 1;
                newPieces.push({ x, y, number, imgX: x, imgY: y });
            }
        }
        
        newPieces[size * size - 1].number =  size*size;
        shufflePieces(newPieces, size);
    };

    const movePiece = (clickedPiece) => {
        if (gameWon) return;

        const dx = Math.abs(clickedPiece.x - emptyPosition.x);
        const dy = Math.abs(clickedPiece.y - emptyPosition.y);

        if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
            const newPieces = pieces.map((piece) => {
                if (piece === clickedPiece) {
                    return { ...piece, x: emptyPosition.x, y: emptyPosition.y };
                }
                if (piece.x === emptyPosition.x && piece.y === emptyPosition.y) {
                    return { ...piece, x: clickedPiece.x, y: clickedPiece.y };
                }
                return piece;
            });

            setPieces(newPieces);
            setEmptyPosition({ x: clickedPiece.x, y: clickedPiece.y });
            setMovesCount((prevMovesCount) => prevMovesCount + 1);

            if (checkWin(newPieces)) {
                setGameWon(true);
                displayWinMessage();
            }
        }
    };

    const shufflePieces = (newPieces, size) => {
        for (let i = newPieces.length - 2; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newPieces[i], newPieces[j]] = [newPieces[j], newPieces[i]];
        }

        // Remettre la case vide à la dernière position
        const emptyPiece = newPieces.find(piece => piece.number === size*size);
        const lastIndex = size * size - 1;
        const lastPiece = newPieces[lastIndex];
        newPieces[lastIndex] = emptyPiece;
        emptyPiece.x = lastPiece.x;
        emptyPiece.y = lastPiece.y;

        newPieces.forEach((piece, index) => {
            if (piece.number !== null) {
                piece.x = index % size;
                piece.y = Math.floor(index / size);
            }
        });

        setPieces(newPieces);
        setEmptyPosition({ x: size - 1, y: size - 1 });
        setMovesCount(0);
        setGameWon(false);
    };

    const checkWin = (pieces) => {
        return pieces.every((piece, index) => {
            if (index === pieces.length - 1) 
                return piece.number === size*size; 
            return piece.number === piece.y * size + piece.x + 1;
            
        });
    };

    const displayWinMessage = () => {
        
        if (records.bestScore > movesCount) {
            const updatedRecords = { ...records, bestScore: movesCount };
            saveRecords(updatedRecords);
        }
    };

    const saveRecords = (updatedRecords) => {
        localStorage.setItem('recordPuzzleGlissant', JSON.stringify(updatedRecords));
        setRecords(updatedRecords);
    };

    const loadRecords = () => {
        const savedRecords = localStorage.getItem('recordPuzzleGlissant');
        if (savedRecords) {
            setRecords(JSON.parse(savedRecords));
        }
    };

    const handleClose = () => {
        onClose();
      };


    return (
        <div className='corpsD'>
            <div className="modale-puzzle-glissant">
            <div className="controls2">
                    <div className="controls">
                        <div id="movesCount" ref={movesCountElement}>Nbre de coups : {movesCount}</div>
                        <div id="record">Record : {records.bestScore === Infinity ? "Aucun pour l'instant" : records.bestScore+1}</div>
                    </div>
                </div>
                <div className="puzzle-container puzzle-container-centered" ref={puzzleContainer}>display
                    {pieces.map((piece, index) => (
                        <div
                            key={index}
                            className={`puzzle-piece ${piece.number === null ? 'empty' : ''} ${gameWon ? 'win' : ''}`}
                            style={{
                                width: `${300 / size}px`,
                                height: `${300 / size}px`,
                                left: `${piece.x * (300 / size)}px`,
                                top: `${piece.y * (300 / size)}px`,
                                backgroundPosition: piece.number === null && !gameWon ? 'none' : `-${piece.imgX * (300 / size)}px -${piece.imgY * (300 / size)}px`,
                                backgroundImage: piece.number === null && !gameWon ? 'none' : `url(${imageUrl})`,
                                backgroundSize: '300px 300px'
                                
                            }}
                            
                            onClick={() => movePiece(piece)}
                        >
                            {showNumbers && piece.number !== null && !gameWon &&
                             <span style={{ color: numberColor }}>{piece.number}</span>}

                            {showNumbers && piece.number === null && gameWon && 
                            <span>{size * size}</span>}

                            {showNumbers && piece.number !== null && gameWon && !imageUrl &&
                            <span style={{ color: numberColor }}>{piece.number}</span>}

                        </div>
                    ))}
                </div>
            </div>
            <div className="container33">
                        <div id="lien13">
                                <a>
                                <button className="tp2" onClick={handleClose}>
                                        NOUVELLE PARTIE
                                    </button>
                                </a>
                        </div> 
                </div>
        </div>
    );
};

export default ModalePuzzleGlissant;