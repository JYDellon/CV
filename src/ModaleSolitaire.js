import React, { useState, useEffect, useRef } from 'react';
import './ModaleSolitaire.css';

const ModaleSolitaire = ({ onClose }) => {
  
  const plateauRef = useRef(null);
  const scoreRef = useRef(null);
  const recordRef = useRef(null);
  const rulesButtonRef = useRef(null);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [resetKey, setResetKey] = useState(0); 
  const [isModaleOpen, setIsModaleOpen] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handleHelpButtonClick = () => {
    setIsModaleOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModaleOpen(false);
  };
  





  useEffect(() => {
    let nombrePions;
    let pionSelectionné = null;
    let ligneSélectionnée = null;
    let colonneSélectionnée = null;

    const plateau = [
      [null, null, 1, 1, 1, null, null],
      [null, null, 1, 1, 1, null, null],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [null, null, 1, 1, 1, null, null],
      [null, null, 1, 1, 1, null, null]
    ];

    const record = localStorage.getItem('RecordSolitaire') || 0;
    if (record > 0 && recordRef.current) {
      recordRef.current.textContent = `Record : ${record}`;
    }

    const initialiserPlateau = () => {
      const elementPlateau = plateauRef.current;
      elementPlateau.innerHTML = ''; // Réinitialiser le plateau avant de le remplir
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
      scoreRef.current.textContent = 'Nombre de pions restants: 32';
    };

    const gérerClicPion = (event) => {
      const cellule = event.target;
      const cellulesSelectionnées = document.querySelectorAll('.cellule.selectionnee');
      cellulesSelectionnées.forEach(cell => {
        cell.classList.remove('selectionnee');
      });

      ligneSélectionnée = parseInt(cellule.dataset.row);
      colonneSélectionnée = parseInt(cellule.dataset.col);
      pionSelectionné = cellule;

      pionSelectionné.classList.add('selectionnee');
    };

    const estMouvementValide = (ligneSélectionnée, colonneSélectionnée, nouvelleLigne, nouvelleColonne) => {
      const mouvementHorizontal = ligneSélectionnée === nouvelleLigne && Math.abs(colonneSélectionnée - nouvelleColonne) === 2;
      const mouvementVertical = colonneSélectionnée === nouvelleColonne && Math.abs(ligneSélectionnée - nouvelleLigne) === 2;

      if ((mouvementHorizontal || mouvementVertical) && plateau[nouvelleLigne][nouvelleColonne] === 0) {
        const ligneMilieu = (ligneSélectionnée + nouvelleLigne) / 2;
        const colonneMilieu = (colonneSélectionnée + nouvelleColonne) / 2;
        return plateau[ligneMilieu][colonneMilieu] === 1;
      }
      return false;
    };

    const aMouvementsValides = () => {
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
        recordRef.current.textContent = `Record : ${localStorage.getItem('RecordSolitaire')}`;
      }
      return false;
    };

    const gérerClicCelluleVide = (event) => {
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
        initialiserPlateau();
        pionSelectionné = null;

        if (!aMouvementsValides()) {
          // Actions à effectuer si aucun mouvement valide
        }
        scoreRef.current.textContent = `Nombre de pions restants: ${compterPionsRestants()}`;
      }
    };

    const compterPionsRestants = () => {
      nombrePions = 0;
      for (let i = 0; i < plateau.length; i++) {
        for (let j = 0; j < plateau[i].length; j++) {
          if (plateau[i][j] === 1) {
            nombrePions++;
          }
        }
      }
      return nombrePions;
    };

    initialiserPlateau();

    const rulesBtn = rulesButtonRef.current;
    const modal = modalRef.current;
    const closeBtn = closeButtonRef.current;

    if (rulesBtn && modal && closeBtn) {
      rulesBtn.onclick = () => {
        modal.style.display = 'block';
      };

      closeBtn.onclick = () => {
        modal.style.display = 'none';
      };

      window.onclick = (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };
    }

    const portfolioBtn = document.getElementById('toi');
    portfolioBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

  }, [resetKey]); 

  const resetPlateau = () => {
    setResetKey(prevKey => prevKey + 1); // Incrémentez la clé pour déclencher le useEffect
  };

  return (
    <div className='solitaire' ref={modalRef} id='solitaire'>
      <div className='header'>
        <div className="conteneur1">
          <div >
              <h1 id="score" ref={scoreRef}>Nombre de pions restants: 32</h1>
          </div>
          <button className="btnX"  onClick={handleHelpButtonClick}>
              <img src="./image/Help.png" alt="Aide" style={{ height: "60px", width: "60px" }} />
          </button>

        </div>
        <div className="contenaire2">
          <div id="record" ref={recordRef}>Record :</div>
        </div>
      </div>

      <div className="conteneurZA">
        <div id="plateau" className="plateau" ref={plateauRef}></div>
      </div>

      <div className="lesBoutons10">
        <div >
          <a>
            <button className="tpU" onClick={resetPlateau}>
              NOUVELLE PARTIE
            </button>
          </a>
        </div>
        <div >
          <a href="#portfolio">
            <button type="button" onClick={handleClose} id="toi" ref={closeButtonRef} className="portfolio3D">
              PORTFOLIO
            </button>
          </a>
        </div>
      </div>
      {isModaleOpen && (
  <div className="modaleHelp">
    <span className="close" onClick={handleCloseModal}>&times;</span>
    <div className="modale-contenus">
      <div className="texte">
          <h1>REGLES DU JEU</h1>
          <div className='infos' >On place tous les pions dans les trous du plateau, sauf dans le trou central. Le but du jeu est d'éliminer un maximum de pions pour terminer avec un seul pion sur le plateau. N´importe quel pion peut prendre le pion voisin en sautant par-dessus, horizontalement ou verticalement, à condition de retomber immédiatement après dans un trou vide. Les pions pris sont enlevés du jeu. Il faut éviter de laisser des pions isolés qui seront ensuite inaccessibles.</div>
      </div>         
    </div>
  </div>
)}

    </div>
  );
};

export default ModaleSolitaire;
