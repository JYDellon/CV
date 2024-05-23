document.addEventListener('DOMContentLoaded', () => {
    const puzzleContainer = document.getElementById('puzzle-container');
    const movesCountElement = document.getElementById('score');
    const chronometreElement = document.getElementById('chronometre');
    const imageUploadInput = document.getElementById('image-upload');
    const selectSize = document.getElementById('select-size');
    const selectDifficulty = document.getElementById('select-difficulty');
    const afficherChiffresCheckbox = document.getElementById('afficher-chiffres');

    let size = parseInt(selectSize.value); 
    let difficulty = selectDifficulty.value;
    let emptyPosition = { x: size - 1, y: size - 1 };
    let pieces = [];
    let emptyPieceContent = '';
    let gameWon = false;
    let movesCount = 0;
    let imageUrl = '';
    let timerInterval = null;
    let secondsElapsed = 0;

    selectSize.addEventListener('change', () => {
        size = parseInt(selectSize.value);
        // resetPuzzle(size);
    });

    selectDifficulty.addEventListener('change', () => {
        difficulty = selectDifficulty.value;
        // resetPuzzle(size);
    });

    imageUploadInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imageUrl = e.target.result;
                // resetPuzzle(size);
            }
            reader.readAsDataURL(file);
        }
    });

    afficherChiffresCheckbox.addEventListener('change', () => {
        toggleNumbersVisibility(afficherChiffresCheckbox.checked);
    });

    function loadDefaultImage() {
        const defaultImageUrl = localStorage.getItem('defaultImageUrl');
        if (defaultImageUrl) {
            imageUrl = defaultImageUrl;
        }
    }

    loadDefaultImage();

    function setPuzzleBackground(imageUrl) {
        pieces.forEach(piece => {
            if (!piece.classList.contains('empty')) {
                piece.style.backgroundImage = `url(${imageUrl})`;
            }
        });
    }

    function toggleNumbersVisibility(afficherChiffres) {
        pieces.forEach(piece => {
            const span = piece.querySelector('span');
            if (span) {
                span.style.visibility = afficherChiffres ? 'visible' : 'hidden';
                if (!afficherChiffres && piece.classList.contains('empty')) {
                    span.style.visibility = 'hidden'; // Assure que la tuile vide reste visible
                }
            }
        });
    }
    

    function updateMovesCount() {
        movesCount++;
        movesCountElement.textContent = `Nbre de coups : ${movesCount}`;
    }

    function saveRecords(records) {
        localStorage.setItem('recordPuzzleGlissant', JSON.stringify(records));
    }

    function loadRecords() {
        const records = localStorage.getItem('recordPuzzleGlissant');
        return records ? JSON.parse(records) : { bestScore: Infinity };
    }

    function updateRecordsIfNewRecord(score) {
        if (score < records.bestScore) {
            records.bestScore = score;
            saveRecords(records);
            displayCurrentRecord();
        }
    }

    function displayCurrentRecord() {
        const recordElement = document.getElementById('record');
        recordElement.textContent = `Record : ${records.bestScore === Infinity ? "Aucun pour l'instant" : records.bestScore}`;
    }

    function initializePuzzle(size) {
        const puzzleSize = 300; 
        const tileSize = puzzleSize / size; 
        
        emptyPosition = { x: size - 1, y: size - 1 };
        pieces = [];
        movesCount = 0;
        gameWon = false;
        movesCountElement.textContent = 'Nbre de coups : 0';
        resetChronometer();

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const piece = document.createElement('div');
                piece.classList.add('puzzle-piece');
                
                if (x === size - 1 && y === size - 1) {
                    piece.classList.add('empty');
                    piece.dataset.number = size * size;
                    piece.innerHTML = `<span style="color: aqua; font-weight: bold;">${size * size}</span>`;
                    emptyPieceContent = piece.innerHTML;
                    piece.addEventListener('click', () => {});
                } else {
                    piece.style.backgroundImage = imageUrl ? `url(${imageUrl})` : 'url(../image/test.jpg)';
                    piece.style.backgroundSize = `${puzzleSize}px ${puzzleSize}px`;
                    piece.style.backgroundPosition = `-${x * tileSize}px -${y * tileSize}px`;
                    piece.dataset.number = x + y * size + 1;
                    piece.innerHTML = `<span style="color: aqua; font-weight: bold;">${x + y * size + 1}</span>`;
                    piece.addEventListener('click', () => {
                        if (!gameWon) {
                            movePiece(piece);
                        }
                    });
                }
                
                piece.style.width = `${tileSize}px`;
                piece.style.height = `${tileSize}px`;
                piece.style.left = `${x * tileSize}px`; 
                piece.style.top = `${y * tileSize}px`; 
                piece.dataset.x = x;
                piece.dataset.y = y;
                puzzleContainer.appendChild(piece);
                pieces.push(piece);
            }
        }
        // shufflePieces();
        startChronometer();
        toggleNumbersVisibility(afficherChiffresCheckbox.checked); 
    }

    function resetPuzzle(newSize) {
        puzzleContainer.innerHTML = '';
        initializePuzzle(newSize);
    }

    function movePiece(piece) {
        const x = parseInt(piece.dataset.x);
        const y = parseInt(piece.dataset.y);
        const dx = Math.abs(x - emptyPosition.x);
        const dy = Math.abs(y - emptyPosition.y);

        if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
            const tileSize = 300 / size;
            piece.style.left = `${emptyPosition.x * tileSize}px`;
            piece.style.top = `${emptyPosition.y * tileSize}px`;
            piece.dataset.x = emptyPosition.x;
            piece.dataset.y = emptyPosition.y;
            emptyPosition.x = x;
            emptyPosition.y = y;

            updateMovesCount();

            if (checkWin()) {
                gameWon = true;
                updateRecordsIfNewRecord(movesCount);
            }

            const numberEmpty = document.querySelector('[data-number="' + size * size + '"]');
            numberEmpty.style.left = `${x * tileSize}px`;
            numberEmpty.style.top = `${y * tileSize}px`;
        }
    }

    function checkWin() {
        let allCorrect = true;
        for (let i = 0; i < pieces.length; i++) {
            const piece = pieces[i];
            const x = parseInt(piece.dataset.x);
            const y = parseInt(piece.dataset.y);
            const correctX = (i % size);
            const correctY = Math.floor(i / size);
            if (x !== correctX || y !== correctY) {
                allCorrect = false;
                break;
            }
        }
        if (allCorrect) {
            const lastEmptyTileNumber = size * size;
            const lastEmptyTile = document.querySelector(`[data-number="${lastEmptyTileNumber}"]`);
    
            const puzzleSize = 300;
            const tileSize = puzzleSize / size;
            lastEmptyTile.style.backgroundImage = `url(${imageUrl || '../image/test.jpg'})`;
            lastEmptyTile.style.backgroundSize = `${puzzleSize}px ${puzzleSize}px`;
            lastEmptyTile.style.backgroundPosition = `-${(size - 1) * tileSize}px -${(size - 1) * tileSize}px`;
            lastEmptyTile.innerHTML = '';
            lastEmptyTile.classList.add('fade-in');
    
            // Ajoutez une classe spéciale à la cellule vide
            lastEmptyTile.classList.add('visible-empty');
    
            pieces.forEach(piece => {
                const span = piece.querySelector('span');
                if (span) {
                    span.style.opacity = '0';
                    piece.classList.add('fade-in');
                }
            });
            stopChronometer();
        }
        return allCorrect;
    }
    
    

    function shufflePieces() {
        const positions = [];
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                if (!(x === size - 1 && y === size - 1)) {
                    positions.push({ x, y });
                }
            }
        }
        shuffle(positions);
        pieces.forEach((piece, index) => {
            if (!piece.classList.contains('empty')) {
                const pos = positions[index];
                piece.style.left = `${pos.x * 300 / size}px`; 
                piece.style.top = `${pos.y * 300 / size}px`; 
                piece.dataset.x = pos.x;
                piece.dataset.y = pos.y;
            }
        });
        emptyPosition = { x: size - 1, y: size - 1 };
    }

    function shuffle(array) {
        let shuffleTimes = difficulty === 'easy' ? 20 : difficulty === 'medium' ? 50 : 100;
        for (let i = 0; i < shuffleTimes; i++) {
            const j = Math.floor(Math.random() * array.length);
            [array[i % array.length], array[j]] = [array[j], array[i % array.length]];
        }
    }

    function startChronometer() {
        secondsElapsed = 0;
        chronometreElement.textContent = "Temps écoulé : 00:00";
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        timerInterval = setInterval(updateChronometer, 1000);
    }

    function updateChronometer() {
        secondsElapsed++;
        const minutes = Math.floor(secondsElapsed / 60);
        const seconds = secondsElapsed % 60;
        chronometreElement.textContent = `Temps écoulé : ${padZero(minutes)}:${padZero(seconds)}`;
    }

    function resetChronometer() {
        clearInterval(timerInterval);
        secondsElapsed = 0;
        chronometreElement.textContent = "Temps écoulé : 00:00";
    }

    function stopChronometer() {
        clearInterval(timerInterval);
    }

    function padZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    const records = loadRecords();
    displayCurrentRecord();
    initializePuzzle(size);

    const rulesButton = document.getElementById('rules-button');
    const modalRules = document.getElementById('rules1');
    const closeButtonRules = document.querySelector('.modal .close');
    const closeFooterButtonRules = document.getElementById('closeBtninfo');

    const modalOptions = document.getElementById('options-modal');
    const startButton = document.getElementById('demarrer');

    rulesButton.addEventListener('click', () => {
        modalRules.style.display = 'block';
    });

    closeButtonRules.addEventListener('click', () => {
        modalRules.style.display = 'none';
    });

    closeFooterButtonRules.addEventListener('click', () => {
        modalRules.style.display = 'none';
    });

    const optionsModal = document.getElementById('options-modal');
    const closeButton = document.querySelector('.modal-content2 .close');

    // Gestionnaire d'événements de clic sur la balise <span> de fermeture
    closeButton.addEventListener('click', () => {
        optionsModal.style.display = 'none'; // Masquer la modal
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalRules) {
            modalRules.style.display = 'none';
        }
    });

    const nouvellePartieButton = document.getElementById('nouvellePartie');
    modalOptions.style.display = 'block';
    resetChronometer();
    stopChronometer();

    startButton.addEventListener('click', () => {
        const selectedSize = parseInt(selectSize.value);
        const selectedDifficulty = selectDifficulty.value;
        resetPuzzle(selectedSize);
        modalOptions.style.display = 'none';
    });

    startButton.addEventListener('click', () => {
        if (modalOptions.style.display !== 'block') {
            const selectedSize = parseInt(selectSize.value);
            const selectedDifficulty = selectDifficulty.value;
            resetPuzzle(selectedSize);
            resetChronometer();
            startChronometer();
            modalOptions.style.display = 'none';
        }
    });
   
});
