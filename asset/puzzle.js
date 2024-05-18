document.addEventListener('DOMContentLoaded', () => {
    const puzzleContainer = document.getElementById('puzzle-container');
    const size = 3;
    const emptyPosition = { x: size - 1, y: size - 1 };
    const pieces = [];
    let emptyPieceContent = ''; // Contenu HTML initial de la tuile vide
    let gameWon = false; // Variable pour suivre l'état du jeu
    let movesCount = 0; // Variable pour compter les coups
    let imageUrl = ''; // Déclarer la variable imageUrl à l'extérieur de la fonction checkWin()


    // Sélectionne l'élément où afficher le nombre de coups
    const movesCountElement = document.getElementById('score');




    // Sélectionner l'élément de téléchargement d'image
const imageUploadInput = document.getElementById('image-upload');


// Écouter les changements dans le champ d'entrée de téléchargement d'image
imageUploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageUrl = e.target.result; // Affecter l'URL de l'image à la variable imageUrl
            setPuzzleBackground(imageUrl);
        }
        reader.readAsDataURL(file);
    }
});


// Fonction pour définir l'image de fond du puzzle
function setPuzzleBackground(imageUrl) {
    pieces.forEach(piece => {
        if (!piece.classList.contains('empty')) {
            piece.style.backgroundImage = `url(${imageUrl})`;
        }
    });
}




    // Fonction pour mettre à jour le nombre de coups affiché
    function updateMovesCount() {
        movesCount++; // Incrémente le nombre de coups
        movesCountElement.textContent = `Nbre de coups : ${movesCount}`; // Met à jour l'affichage du nombre de coups
    }

    // Fonction pour sauvegarder les records dans le localStorage
    function saveRecords(records) {
        localStorage.setItem('recordPuzzleGlissant', JSON.stringify(records));
    }

    // Fonction pour charger les records depuis le localStorage
    function loadRecords() {
        const records = localStorage.getItem('recordPuzzleGlissant');
        return records ? JSON.parse(records) : { bestScore: Infinity };
    }

    // Charger les records au chargement de la page
    let records = loadRecords();

    // Fonction pour mettre à jour les records si un nouveau record est établi
    function updateRecordsIfNewRecord(score) {
        if (score < records.bestScore) {
            records.bestScore = score;
            saveRecords(records);
            displayCurrentRecord();
        }
    }

    // Fonction pour afficher le record actuel sur la page
    function displayCurrentRecord() {
        const recordElement = document.getElementById('record');
        recordElement.textContent = `Record : ${records.bestScore === Infinity ? 'N/A' : records.bestScore}`;
    }

    // Afficher le record actuel au chargement de la page
    displayCurrentRecord();

    // Initialiser les pièces
    let pieceNumber = 1; // Numéro des pièces
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const piece = document.createElement('div');
            piece.classList.add('puzzle-piece');
            if (x === size - 1 && y === size - 1) {
                piece.classList.add('empty');
                piece.dataset.number = 9; // Ajouter le numéro 9 à la tuile vide
                piece.innerHTML = `<span style="color: white; font-weight: bold;">9</span>`;
                emptyPieceContent = piece.innerHTML; // Sauvegarder le contenu HTML initial de la tuile vide
                piece.addEventListener('click', () => {}); // Empêcher les clics sur la tuile vide
            } else {
                piece.style.backgroundImage = 'url(../image/test.jpg)';
                piece.style.backgroundPosition = `-${x * 100}px -${y * 100}px`;
                piece.dataset.number = pieceNumber++; // Ajouter le numéro de la pièce
                piece.innerHTML = `<span style="color: white; font-weight: bold;">${pieceNumber - 1}</span>`;
                piece.addEventListener('click', () => {
                    if (!gameWon) { // Vérifier si le jeu est gagné avant de permettre le déplacement
                        movePiece(piece);
                    }
                });
            }
            piece.style.gridColumnStart = x + 1;
            piece.style.gridRowStart = y + 1;
            piece.dataset.x = x;
            piece.dataset.y = y;
            puzzleContainer.appendChild(piece);
            pieces.push(piece);
        }
    }

    // Mélanger les pièces
    initialize();

    function movePiece(piece) {
        const x = parseInt(piece.dataset.x);
        const y = parseInt(piece.dataset.y);
        const dx = Math.abs(x - emptyPosition.x);
        const dy = Math.abs(y - emptyPosition.y);

        if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
            piece.style.gridColumnStart = emptyPosition.x + 1;
            piece.style.gridRowStart = emptyPosition.y + 1;
            piece.dataset.x = emptyPosition.x;
            piece.dataset.y = emptyPosition.y;
            emptyPosition.x = x;
            emptyPosition.y = y;

            // Mettre à jour la position du numéro "9" s'il est sur la tuile vide
            const number9 = document.querySelector('[data-number="9"]');
            number9.style.gridColumnStart = x + 1;
            number9.style.gridRowStart = y + 1;

            // Mettre à jour le nombre de coups
            updateMovesCount();

            // Vérifier si le jeu est gagné et mettre à jour les records
            if (checkWin()) {
                gameWon = true;
                updateRecordsIfNewRecord(movesCount);
            }
        }
    }

    // Vérifier si toutes les pièces sont en place

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
            // La photo est reconstituée
            const number9 = document.querySelector('[data-number="9"]');
            if (imageUrl !== '') {
                // Si une image est téléchargée, l'utiliser
                number9.style.backgroundImage = `url(${imageUrl})`;
            } else {
                // Sinon, utiliser la 9ème partie de "test.jpg"
                number9.style.backgroundImage = `url(../image/test.jpg)`;
            }
            number9.style.backgroundPosition = `-${(size - 1) * 100}px -${(size - 1) * 100}px`; 
            number9.innerHTML = '';
            number9.classList.add('fade-in');
            pieces.forEach(piece => {
                const span = piece.querySelector('span');
                if (span) {
                    span.style.opacity = '0';
                }
            });
            // Désactiver l'input de téléchargement d'image
            imageUploadInput.disabled = true;
        }
        return allCorrect;
    } 

    // Mélanger les pièces
    function initialize() {
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
                piece.style.gridColumnStart = pos.x + 1;
                piece.style.gridRowStart= pos.y + 1;
            }
        });
        // S'assurer que la case vide est en bas à droite
        emptyPosition.x = size - 1;
        emptyPosition.y = size - 1;
    }

    // Restaurer le contenu HTML de la tuile vide
    function restoreEmptyPieceContent() {
        const number9 = document.querySelector('[data-number="9"]');
        number9.innerHTML = emptyPieceContent;
    }

    // Mélanger les pièces
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Modal rules
    var rulesBtn = document.getElementById("rules-button");
    var modal = document.getElementById("rules1");
    var closeBtn = document.getElementsByClassName("close")[0];
    var closeBtninfo = document.getElementById("closeBtninfo");

    rulesBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    closeBtninfo.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

