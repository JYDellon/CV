document.addEventListener('DOMContentLoaded', function() {
    const plateau = document.getElementById('plateau');
    // const counterContainer = document.getElementById('counter-container');
    const nbreTrous = 49;
    const indexTrouVide = Math.floor(nbreTrous / 2); 
    let trouSelectionne = -1;
    let compteur = 0; 

    // Création du plateau de jeu
    for (let i = 0; i < nbreTrous; i++) {
        const trou = document.createElement('div');
        trou.classList.add('trou');
        if (i === indexTrouVide) {
            trou.classList.add('vide');
        }
        trou.addEventListener('click', function() {
            trouselectionned(i);
        });
        plateau.appendChild(trou);
    }

    // Sélection d'un trou
    function trouselectionned(index) {
        const trous = document.getElementsByClassName('trou');
        if (!trous[index].classList.contains('vide')) {
            if (trouSelectionne === -1) {
                trouSelectionne = index;
                trous[index].classList.add('selectionne');
            } else {
                if (trouSelectionne === index) {
                    trous[trouSelectionne].classList.remove('selectionne');
                    trouSelectionne = -1;
                } else {
                    mouvement(trouSelectionne, index);
                    trous[trouSelectionne].classList.remove('selectionne');
                    trouSelectionne = -1;
                }
            }
        } else if (trouSelectionne !== -1) {
            mouvement(trouSelectionne, index);
            trous[trouSelectionne].classList.remove('selectionne');
            trouSelectionne = -1;
        }
    }

    // Effectuer un mouvement
    function mouvement(start, end) {
        const trous = document.getElementsByClassName('trou');
        const adjacents = getAdjacentHoles(start);
        if (adjacents.includes(end)) {
            const jumpIndex = getJumpIndex(start, end);
            if (trous[end].classList.contains('vide') && !trous[jumpIndex].classList.contains('vide')) {
                trous[start].classList.add('vide');
                trous[end].classList.remove('vide');
                trous[jumpIndex].classList.add('vide');
                compteur++; 
                majCompteur();
            }
        }
        checkWin();
    }

    // Mettre à jour l'affichage du compteur
    function majCompteur() {
        const compteurElement = document.getElementById('compteur');
        compteurElement.textContent = compteur;
    }

    // Obtenir les trous adjacents à un trou donné
    function getAdjacentHoles(index) {
        const adjacents = [];
        const numRows = Math.sqrt(nbreTrous);
        const row = Math.floor(index / numRows);
        const col = index % numRows;

        // Vérifier les trous adjacents dans toutes les directions
        if (row >= 2) adjacents.push(index - 2 * numRows);
        if (row < numRows - 2) adjacents.push(index + 2 * numRows);
        if (col >= 2) adjacents.push(index - 2);
        if (col < numRows - 2) adjacents.push(index + 2);

        return adjacents;
    }

    // Obtenir l'index du trou à sauter
    function getJumpIndex(start, end) {
        return start + (end - start) / 2;
    }

    // Vérifier si le jeu est terminé
    function checkWin() {
        const trous = document.getElementsByClassName('trou');
        let count = 0;
        for (const trou of trous) {
            if (!trou.classList.contains('vide')) {
                count++;
            }
        }
        if (count === 1) {
            alert("Félicitations! Vous avez gagné !");
        }
    }
});
