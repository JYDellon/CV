var nombrePions;
var record = localStorage.getItem('RecordSolitaire') || 0;
if (record > 0) {
    document.getElementById('record').textContent = "Record : " + record;
}

const plateau = [
    [null, null, 1, 1, 1, null, null],
    [null, null, 1, 1, 1, null, null],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [null, null, 1, 1, 1, null, null],
    [null, null, 1, 1, 1, null, null]
];

const elementPlateau = document.getElementById('plateau');
var pionSelectionné = null;
var ligneSélectionnée = null;
var colonneSélectionnée = null;

function initialiserPlateau() {
    for (let i = 0; i < plateau.length; i++) {
        for (let j = 0; j < plateau[i].length; j++) {
            const cellule = document.createElement('div');
            cellule.className = 'cellule';
            if (plateau[i][j] === null) {
                cellule.classList.add('null');
            } else if (plateau[i][j] === 1) {
                cellule.classList.add('pion');
                cellule.addEventListener('click', gérerClicPion);
            } else if (plateau[i][j] === 0) {
                cellule.classList.add('vide');
                cellule.addEventListener('click', gérerClicCelluleVide);
            }
            cellule.dataset.row = i;
            cellule.dataset.col = j;
            elementPlateau.appendChild(cellule);
        }
    }
}

function gérerClicPion(event) {
    const cellule = event.target;

    // Supprimer la classe 'selectionnee' des autres cellules
    const cellulesSelectionnées = document.querySelectorAll('.cellule.selectionnee');
    cellulesSelectionnées.forEach(cell => {
        cell.classList.remove('selectionnee');
    });

    ligneSélectionnée = parseInt(cellule.dataset.row);
    colonneSélectionnée = parseInt(cellule.dataset.col);
    pionSelectionné = cellule;

    // Ajouter la classe 'selectionnee' à la cellule sélectionnée
    pionSelectionné.classList.add('selectionnee');
}

function estMouvementValide(ligneSélectionnée, colonneSélectionnée, nouvelleLigne, nouvelleColonne) {
    const mouvementHorizontal = ligneSélectionnée === nouvelleLigne && Math.abs(colonneSélectionnée - nouvelleColonne) === 2;
    const mouvementVertical = colonneSélectionnée === nouvelleColonne && Math.abs(ligneSélectionnée - nouvelleLigne) === 2;

    if ((mouvementHorizontal || mouvementVertical) && plateau[nouvelleLigne][nouvelleColonne] === 0) {
        const ligneMilieu = (ligneSélectionnée + nouvelleLigne) / 2;
        const colonneMilieu = (colonneSélectionnée + nouvelleColonne) / 2;
        return plateau[ligneMilieu][colonneMilieu] === 1;
    }
    return false;
}

function aMouvementsValides() {
    for (let i = 0; i < plateau.length; i++) {
        for (let j = 0; j < plateau[i].length; j++) {
            if (plateau[i][j] === 1) {
                if (
                    (i >= 2 && estMouvementValide(i, j, i - 2, j)) ||
                    (i < plateau.length - 2 && estMouvementValide(i, j, i + 2, j)) ||
                    (j >= 2 && estMouvementValide(i, j, i, j - 2)) ||
                    (j < plateau[i].length - 2 && estMouvementValide(i, j, i, j + 2))
                ) {
                    return true;
                }
            }
        }
    }
    if (record == 0 || nombrePions < record) {
        localStorage.setItem('RecordSolitaire', nombrePions - 1);
        document.getElementById('record').textContent = "Record : " + localStorage.getItem('RecordSolitaire');
    }
    return false;
}

function gérerClicCelluleVide(event) {
    const cellule = event.target;

    if (pionSelectionné === null) {
        return;
    }

    const ligneSélectionnée = parseInt(pionSelectionné.dataset.row);
    const colonneSélectionnée = parseInt(pionSelectionné.dataset.col);
    const nouvelleLigne = parseInt(cellule.dataset.row);
    const nouvelleColonne = parseInt(cellule.dataset.col);

    if (estMouvementValide(ligneSélectionnée, colonneSélectionnée, nouvelleLigne, nouvelleColonne)) {
        plateau[ligneSélectionnée][colonneSélectionnée] = 0;
        plateau[(ligneSélectionnée + nouvelleLigne) / 2][(colonneSélectionnée + nouvelleColonne) / 2] = 0;
        plateau[nouvelleLigne][nouvelleColonne] = 1;
        afficherPlateau();

        pionSelectionné = null;

        if (!aMouvementsValides()) {
        }

        document.getElementById('score').textContent = "Nombre de pions restants: " + compterPionsRestants();
    } else {
    }
}

function afficherPlateau() {
    while (elementPlateau.firstChild) {
        elementPlateau.removeChild(elementPlateau.firstChild);
    }

    for (let i = 0; i < plateau.length; i++) {
        for (let j = 0; j < plateau[i].length; j++) {
            const cellule = document.createElement('div');
            cellule.className = 'cellule';
            if (plateau[i][j] === null) {
                cellule.classList.add('null');
            } else if (plateau[i][j] === 1) {
                cellule.classList.add('pion');
                cellule.addEventListener('click', gérerClicPion);
            } else if (plateau[i][j] === 0) {
                cellule.classList.add('vide');
                cellule.addEventListener('click', gérerClicCelluleVide);
            }
            cellule.dataset.row = i;
            cellule.dataset.col = j;
            elementPlateau.appendChild(cellule);
        }
    }
}

function compterPionsRestants() {
    nombrePions = 0;
    for (let i = 0; i < plateau.length; i++) {
        for (let j = 0; j < plateau[i].length; j++) {
            if (plateau[i][j] === 1) {
                nombrePions++;
            }
        }
    }
    return nombrePions;
}

initialiserPlateau();

// Code pour l'affichage des règles
var rulesBtn = document.getElementById("rules-button");
var modal = document.getElementById("rules1");
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