document.addEventListener('DOMContentLoaded', () => {
    const puzzleContainer = document.getElementById('puzzle-container');
    const movesCountElement = document.getElementById('score');
    const imageUploadInput = document.getElementById('image-upload');
    const selectSize = document.getElementById('select-size');

    let size = parseInt(selectSize.value); 
    let emptyPosition = { x: size - 1, y: size - 1 };
    let pieces = [];
    let emptyPieceContent = '';
    let gameWon = false;
    let movesCount = 0;
    let imageUrl = '';

    selectSize.addEventListener('change', () => {
        size = parseInt(selectSize.value);
        resetPuzzle(size);
    });

    imageUploadInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imageUrl = e.target.result;
                resetPuzzle(size);
            }
            reader.readAsDataURL(file);
        }
    });

    function setPuzzleBackground(imageUrl) {
        pieces.forEach(piece => {
            if (!piece.classList.contains('empty')) {
                piece.style.backgroundImage = `url(${imageUrl})`;
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
        recordElement.textContent = `Record : ${records.bestScore === Infinity ? 'N/A' : records.bestScore}`;
    }

    function initializePuzzle(size) {
        const puzzleSize = 300; 
        const tileSize = puzzleSize / size; 
        
        emptyPosition = { x: size - 1, y: size - 1 };
        pieces = [];
        movesCount = 0;
        gameWon = false;
        movesCountElement.textContent = 'Nbre de coups : 0';
        
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const piece = document.createElement('div');
                piece.classList.add('puzzle-piece');
                
                if (x === size - 1 && y === size - 1) {
                    piece.classList.add('empty');
                    piece.dataset.number = size * size;
                    piece.innerHTML = `<span style="color: white; font-weight: bold;">${size * size}</span>`;
                    emptyPieceContent = piece.innerHTML;
                    piece.addEventListener('click', () => {});
                } else {
                    piece.style.backgroundImage = imageUrl ? `url(${imageUrl})` : 'url(../image/test.jpg)';
                    piece.style.backgroundSize = `${puzzleSize}px ${puzzleSize}px`;
                    piece.style.backgroundPosition = `-${x * tileSize}px -${y * tileSize}px`;
                    piece.dataset.number = x + y * size + 1;
                    piece.innerHTML = `<span style="color: white; font-weight: bold;">${x + y * size + 1}</span>`;
                    piece.addEventListener('click', () => {
                        if (!gameWon) {
                            movePiece(piece);
                        }
                    });
                }
                
                piece.style.width = `${tileSize}px`;
                piece.style.height = `${tileSize}px`;
                piece.style.left = `${x * tileSize}px`; /* Position absolue */
                piece.style.top = `${y * tileSize}px`; /* Position absolue */
                piece.dataset.x = x;
                piece.dataset.y = y;
                puzzleContainer.appendChild(piece);
                pieces.push(piece);
            }
        }
        shufflePieces();
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
    
            if (imageUrl !== '') {
                lastEmptyTile.style.backgroundImage = `url(${imageUrl})`;
            } else {
                lastEmptyTile.style.backgroundImage = `url(../image/test.jpg)`;
            }
            const puzzleSize = 300; 
            const tileSize = puzzleSize / size; 
            lastEmptyTile.style.backgroundSize = `${puzzleSize}px ${puzzleSize}px`;
            lastEmptyTile.style.backgroundPosition = `-${(size - 1) * tileSize}px -${(size - 1) * tileSize}px`;
            lastEmptyTile.innerHTML = '';
            lastEmptyTile.classList.add('fade-in');
            pieces.forEach(piece => {
                const span = piece.querySelector('span');
                if (span) {
                    span.style.opacity = '0';
                }
            });
            imageUploadInput.disabled = true;
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
                piece.dataset.x = pos.x;
                piece.dataset.y = pos.y;
                piece.style.left = `${pos.x * 300 / size}px`; /* Position absolue */
                piece.style.top = `${pos.y * 300 / size}px`; /* Position absolue */
            }
        });
        emptyPosition = { x: size - 1, y: size - 1 };
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    var rulesBtn = document.getElementById("rules-button");
    var modal = document.getElementById("rules-modal");
    var closeBtn = document.getElementsByClassName("close")[0];

    rulesBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    const records = loadRecords();
    displayCurrentRecord();
    initializePuzzle(size);
});
