import React, { useState, useRef } from 'react';
import './ModaleMenuPuzzleGlissant.css';
import ModalePuzzleGlissant from './ModalePuzzleGlissant';

const ModaleMenuPuzzleGlissant = ({ onClose }) => {
    const selectSizeRef = useRef(null);
    const imageUploadRef = useRef(null); // Ajout de la référence

    const [size, setSize] = useState(3); 
    const [difficulty, setDifficulty] = useState('easy');
    const [showNumbers, setShowNumbers] = useState(true);
    const [imageUrl, setImageUrl] = useState(''); 
    const [numberColor, setNumberColor] = useState('#AFEEEE');

    const [isModalePuzzleGlissantOpen, setIsModalePuzzleGlissantOpen] = useState(false);
    const [isModaleMenuPuzzleGlissantOpen, setIsModaleMenuPuzzleGlissantOpen] = useState(false);
  
    const handleCloseModal = () => {
        setIsModalePuzzleGlissantOpen(false);
    };
  
    const handleOpenMenuPuzzleGlissant = () => {
        setIsModaleMenuPuzzleGlissantOpen(true);
    };

    const handleClose5 = () => {
        setIsModalePuzzleGlissantOpen(false);
        onClose();
    };

    const handleStart = () => {
        const selectedSize = parseInt(selectSizeRef.current.value);
        setSize(selectedSize);
        setIsModalePuzzleGlissantOpen(true);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageUrl(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleReset = () => {
        setSize(3);
        selectSizeRef.current.value = 3; 
        setDifficulty('easy');
        setShowNumbers(true);
        setImageUrl('');
        setNumberColor('#AFEEEE');
        setIsModalePuzzleGlissantOpen(false);
        setIsModaleMenuPuzzleGlissantOpen(false);
        if (imageUploadRef.current) {
            imageUploadRef.current.value = '';
        }
    };

    return (
        <>
            <div className='modaleContainer'>
                <div id="options-modal" className="modal3" style={{ display: isModalePuzzleGlissantOpen ? 'block' : 'none' }}>
                    {isModalePuzzleGlissantOpen && (
                        <ModalePuzzleGlissant
                            onClose={handleCloseModal}
                            onOpenMenuPuzzleGlissant={handleOpenMenuPuzzleGlissant}
                            size={size}
                            difficulty={difficulty}
                            showNumbers={showNumbers}
                            imageUrl={imageUrl}
                            numberColor={numberColor}
                            onReset={handleReset}
                        />
                    )}
                </div>
                <div className="modal-content3">
                    <div className='donnees'>
                        <span className="close3" onClick={handleClose5}>&times;</span>
                        <h2>OPTIONS DE JEU</h2>
                        
                        <div className="centrer2">
                            <div className="telechargement">
                                <div>
                                    <input
                                        type="file"
                                        id="image-upload"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        ref={imageUploadRef} // Ajout de la référence
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='donnees2'>
                            <div className="centrer2">
                                <div className="placer">
                                    <label htmlFor="select-size">Choisissez la taille du puzzle :</label>
                                    <select
                                        className="form-select transparent-select"
                                        id="select-size"
                                        ref={selectSizeRef}
                                        defaultValue={size}
                                    >
                                        <option value="3">3x3</option>
                                        <option value="4">4x4</option>
                                        <option value="5">5x5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="centrer2">
                                <div className="placer">
                                    <label htmlFor="select-difficulty">Choisissez la difficulté :</label>
                                    <select
                                        className="form-select transparent-select"
                                        id="select-difficulty"
                                        value={difficulty}
                                        onChange={(e) => setDifficulty(e.target.value)}
                                    >
                                        <option value="easy">Facile</option>
                                        <option value="medium">Moyen</option>
                                        <option value="hard">Difficile</option>
                                    </select>
                                </div>
                            </div>

                            <div className="centrer2">
                                <div className="placer">
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="afficher-chiffres"
                                            checked={showNumbers}
                                            onChange={(e) => setShowNumbers(e.target.checked)}
                                        />
                                        Afficher les chiffres
                                    </label>
                                </div>
                                <div className="placer">
                                    <label>
                                        <input type="color" id="number-color" value={numberColor} onChange={(e) => setNumberColor(e.target.value)} />
                                        choisissez la couleur des chiffres
                                    </label>
                                </div>
                            </div>

                            <div className="footer">
                                <div className="bouton1">
                                    <button
                                        type="button"
                                        className="btn btn-secondary close-btn demarrer"
                                        onClick={handleStart}
                                    >
                                        Démarrer
                                    </button>
                                </div>
                                <div className='bouton2'>
                                    <a href="#portfolio">
                                        <button onClick={handleClose5} className="portfolio3">PORTFOLIO</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModaleMenuPuzzleGlissant;
