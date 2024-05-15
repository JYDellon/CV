const tuiles = document.querySelectorAll('.tuile');
let nombreDeCoups = 0;
var fini=false;
var record=0;
if ( localStorage.getItem('RecordPuzzleGlissant') >0){
    record =  localStorage.getItem('RecordPuzzleGlissant')
    document.getElementById('record').textContent = "Record : " + record;
}
// Fonction pour gérer les clics sur les tuiles
function gérerClicTuile(tuile) {
    const tuileVide = document.querySelector('.vide');
    const rectTuile = tuile.getBoundingClientRect();
    const rectTuileVide = tuileVide.getBoundingClientRect();
    const indexTuile = Array.from(tuiles).indexOf(tuile);
    const indexVide = Array.from(tuiles).indexOf(tuileVide);
    const rangéeTuile = Math.floor(indexTuile / 3);
    const colonneTuile = indexTuile % 3;
    const rangéeVide = Math.floor(indexVide / 3);
    const colonneVide = indexVide % 3;
    if (fini == false){
        if ((rangéeTuile === rangéeVide && Math.abs(colonneTuile - colonneVide) === 1) || (colonneTuile === colonneVide && Math.abs(rangéeTuile - rangéeVide) === 1)) {
            const temp = tuileVide.innerHTML;
            tuileVide.innerHTML = tuile.innerHTML;
            tuile.innerHTML = temp;
            tuileVide.classList.remove('vide');
            tuile.classList.add('vide');

            // Incrémenter le nombre de coups à chaque mouvement valide
            nombreDeCoups++;
            document.getElementById('score').textContent = `Nbre de coups : ${nombreDeCoups}`;

            // Vérifie si le puzzle est résolu après chaque mouvement
            if (estPuzzleRésolu()) {
                // Désactive les clics sur les tuiles
                tuiles.forEach(tuile => {
                    tuile.removeEventListener('click', gérerClicTuile);
                    fini= true;

                    if (record == 0 || nombreDeCoups < localStorage.getItem('RecordPuzzleGlissant')){
                        localStorage.setItem('RecordPuzzleGlissant', nombreDeCoups)
                        document.getElementById('record').textContent = "Record : " + localStorage.getItem('RecordPuzzleGlissant')
                    }

                });
            }

            // Vérifie si le puzzle est déjà résolu, alors désactive les clics sur les tuiles
            if (estPuzzleRésolu()) {
                tuiles.forEach(tuile => {
                    tuile.removeEventListener('click', gérerClicTuile);
                });
            }
        }
    }
}

// Fonction pour vérifier si le puzzle est solvable
function estPuzzleSolvable() {
    const valeursTuiles = [];
    tuiles.forEach(tuile => {
        valeursTuiles.push(parseInt(tuile.innerHTML));
    });

    // Compter le nombre d'inversions
    let inversions = 0;
    for (let i = 0; i < valeursTuiles.length - 1; i++) {
        for (let j = i + 1; j < valeursTuiles.length; j++) {
            if (valeursTuiles[i] > valeursTuiles[j] && valeursTuiles[j] !== 9 && valeursTuiles[i] !== 9) {
                inversions++;
            }
        }
    }

    // Si le nombre d'inversions est pair, le puzzle est solvable
    return inversions % 2 === 0;
}

// Fonction pour mélanger les tuiles
function mélangerTuiles() {
    const valeursTuiles = Array.from({ length: 9 }, (_, i) => i + 1);

    // Mélanger le tableau de valeurs de tuile
    for (let i = valeursTuiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [valeursTuiles[i], valeursTuiles[j]] = [valeursTuiles[j], valeursTuiles[i]];
    }

    // Assigner les valeurs mélangées aux tuiles
    tuiles.forEach((tuile, index) => {
        tuile.innerHTML = valeursTuiles[index] === 9 ? '' : valeursTuiles[index]; // Si la valeur est 9, laissez la case vide
        if (tuile.innerHTML === '') {
            tuile.classList.add('vide');
        } else {
            tuile.classList.remove('vide');
        }
    });
}

// Fonction pour vérifier si le puzzle est résolu
function estPuzzleRésolu() {
    const valeursTuiles = [];
    tuiles.forEach(tuile => {
        valeursTuiles.push(parseInt(tuile.innerHTML));
    });

    let ordreActuel = '';
    tuiles.forEach(tuile => {
        // Ajouter le contenu de la tuile à l'ordre actuel, sauf si la tuile est vide (chiffre '9')
        ordreActuel += tuile.classList.contains('vide') ? '9' : tuile.innerHTML;
    });

    // console.log('Ordre actuel:', ordreActuel); // Afficher l'ordre actuel avec le chiffre '9' pour la case vide

    // Vérifie si l'ordre actuel correspond à l'ordre résolu
    return ordreActuel === '123456789';
}

// Ajoute un écouteur d'événements de clic aux tuiles
tuiles.forEach(tuile => {
    tuile.addEventListener('click', function() {
        gérerClicTuile(tuile);
    });
});

// Mélangez les tuiles jusqu'à ce que le puzzle soit solvable
do {
    mélangerTuiles();
} while (!estPuzzleSolvable());

//-------------------------------------------------------------------------

var rulesBtn = document.getElementById("rules-button");

// Obtenez le modal
var modal = document.getElementById("rules1");

// Obtenez le bouton de fermeture du modal
var closeBtn = document.getElementsByClassName("close")[0];

// Lorsque l'utilisateur clique sur le bouton, ouvrez le modal
rulesBtn.onclick = function() {
    modal.style.display = "block";
}

// Ajout d'écouteurs d'événements pour le le bouton close du Modal des records
closeBtninfo.addEventListener("click", function() {
    rules1.style.display = "none";
});

// Obtenez le bouton pour ouvrir le modal
var rulesBtn = document.getElementById("rules-button");

// Obtenez le modal
var modal = document.getElementById("rules1");

// Récupère le bouton de fermeture
var closeBtn = document.getElementsByClassName("close")[0];

// Lorsque l'utilisateur clique sur le bouton de fermeture, ferme le modal
closeBtn.onclick = function() {
    document.getElementById("rules1").style.display = "none";
}

// Lorsque l'utilisateur clique en dehors du modal, ferme le modal
window.onclick = function(event) {
    if (event.target == document.getElementById("rules1")) {
        document.getElementById("rules1").style.display = "none";
    }
}
