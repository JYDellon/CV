import React, { useState, useEffect } from 'react';
import './ModaleMenuMasterMind.css';
import ModaleInscription from './ModaleInscription';
import ModaleConnexion from './ModaleConnexion';
import ModalePanelAdmin from './ModalePanelAdmin';
import ModaleMasterMind from './ModaleMasterMind';
import ModaleScoresMasterMind from './ModaleScoresMasterMind'; 


const ModaleMenuMasterMind = ({ onClose }) => {
  const [isModaleMasterMindOpen, setIsModaleMasterMindOpen] = useState(false);
  const [isModaleInscriptionOpen, setIsModaleInscriptionOpen] = useState(false);
  const [isModaleConnexionOpen, setIsModaleConnexionOpen] = useState(false);
  const [isModalePanelAdminOpen, setIsModalePanelAdminOpen] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false); 
  const [isModaleScoresOpen, setIsModaleScoresOpen] = useState(false); 
  const [pseudoJoueur, setPseudoJoueur] = useState('');

  useEffect(() => {
    const isConnected = localStorage.getItem('MM_connected') === 'true';
    const savedPseudo = localStorage.getItem('loginUsername');
    if (isConnected && savedPseudo) {
      setPseudoJoueur(savedPseudo);
    }
  }, []);

  const handleHelpButtonClick = () => {
    setIsRulesModalOpen(true);
  };

  const handlePlayClick = () => {
    if (!pseudoJoueur) {
      localStorage.setItem('MM_connected', 'false');
      localStorage.setItem('loginUsername', 'nonInscrits');
    } else {
      localStorage.setItem('loginUsername', pseudoJoueur);
    }
    setIsModaleMasterMindOpen(true);
  };

  const handleCloseModal = () => {
    setIsModaleMasterMindOpen(false);
  };

  const handleClose4 = () => {
    setIsModaleMasterMindOpen(false);
    onClose();
  };

  const handleSignupClick = () => {
    setIsModaleInscriptionOpen(true);
  };

  const handleCloseInscription = () => {
    setIsModaleInscriptionOpen(false);
  };

  const handleCloseConnexion = () => {
    setIsModaleConnexionOpen(false);
  };

  const handleClosePanelAdmin = () => {
    setIsModalePanelAdminOpen(false);
  };

  const handleLoginClick = () => {
    setIsModaleConnexionOpen(true);
  };

  const handleSetPseudoJoueur = (pseudo) => {
    setPseudoJoueur(pseudo);
    localStorage.setItem('loginUsername', pseudo);
    localStorage.setItem('MM_connected', 'true');
  };

  const handleLogoutClick = () => {
    setPseudoJoueur('');
    localStorage.setItem('MM_connected', 'false');
    localStorage.setItem('loginUsername', "nonInscrits");
  };

  const handleAdminLogin = () => {
    setIsModalePanelAdminOpen(true);
  };

  const handleCloseRulesModal = () => {
    setIsRulesModalOpen(false);
  };

  const handleScoresClick = () => {
    setIsModaleScoresOpen(true); // Ouvrir la modale des scores
  };

  const handleCloseScores = () => {
    setIsModaleScoresOpen(false); // Fermer la modale des scores
  };

  const isConnected = pseudoJoueur !== '';

  return (
    <>
      <div className="corpsW">
        <div id="bienvenue"></div>
        <h1 className='mastermind'>MASTERMIND</h1>
        <div className='infoConnexion'>
          {isConnected ? `Bienvenue ${pseudoJoueur}` : "Vous n'êtes pas connecté"}
        </div>
        <div className="ytre">
          <a id="rules-button" className="button" onClick={handleHelpButtonClick}>RÈGLES DU JEU</a>
          <a className="button" onClick={handlePlayClick}>JOUER</a>
          {isConnected && (
            <a id="scoresBtn" className="button" onClick={handleScoresClick}>SCORES</a>
          )}
          {!isConnected && (
            <>
              <a id="signupBtn" className="button" onClick={handleSignupClick}>S'INSCRIRE</a>
              <a id="loginBtn" className="button" onClick={handleLoginClick}>SE CONNECTER</a>
            </>
          )}
          {isConnected && (
            <a id="logoutBtn" className="button" onClick={handleLogoutClick}>SE DECONNECTER</a>
          )}
          <a href="#portfolio">
              <button onClick={handleClose4} className="portfolio">PORTFOLIO</button>
          </a>
        </div>
        {isModaleMasterMindOpen && (
          <ModaleMasterMind onClose={handleCloseModal} />
        )}
        {isModaleInscriptionOpen && (
          <ModaleInscription onClose={handleCloseInscription} />
        )}
        {isModaleConnexionOpen && (
          <ModaleConnexion 
            onClose={handleCloseConnexion} 
            onSuccess={handleSetPseudoJoueur} 
            onAdminLogin={handleAdminLogin} 
          />
        )}
        {isModalePanelAdminOpen && (
          <ModalePanelAdmin onClose={handleClosePanelAdmin} />
        )}
        {isRulesModalOpen && ( 
          <div id="rules1" className="modal2">
            <div className="modal-content2" id="rules">
              <span className="close2" onClick={handleCloseRulesModal}>&times;</span>
              <h2 className='reglesdujeu'>RÈGLES DU JEU</h2>
              <div className="titro">But du jeu :</div>
              <div className="texto">Le but est de découvrir la combinaison de couleurs cachée par l’adversaire. Pour cela, il faut faire
              plusieurs essais pour choisir au fur et à mesure les bonnes couleurs et trouver leur place. Mon
              adversaire me donne des indices pour savoir si je mets les bonnes couleurs et si elles sont à la bonne
              place.</div>
              <div className="titro">Déroulement du jeu :</div>
              <div className="texto">Le joueur 1 réalise une combinaison de trois pions de couleurs (ou quatre pour les plus grands) et la
                  cache devant lui.
                  Le joueur 2 propose une combinaison sur la ligne 1.
                  Le joueur 1 place des pions de couleur blanche pour chaque pion bien placé et des pions de couleur rouge pour chaque pion qui
                  existe dans la combinaison mais qui n’est pas à la bonne place.
                  Le joueur 2 regarde bien les indices et propose une nouvelle combinaison sur la ligne 2 etc.</div>
              <div className="titro">Fin du jeu :</div>
              <div className="texto">Le jeu s’arrête quand le joueur 2 a trouvé la combinaison et dans ce cas il gagne. S’il n’a toujours
              pas trouvé lorsqu’il arrive à la ligne 10, c’est le joueur 1 qui gagne</div>
              <div className="titro">L'administration du jeu</div>
              <div className="texto">Si vous souhaitez prendre le rôle d'administrateur, vous devrez vous connecter avec les informations suivantes:</div>
              <div className="texto">Login: Admin</div>
              <div className="texto">Password: root</div>
              <div className="titro">Les scores</div>
              <div className="texto">Si vous gagnez, votre score sera enregistré à l'unique condition de vous être inscrit puis connecté.</div>
              <div className="fermerinfo">
              <button type="button" className="btn btn-secondary " onClick={handleCloseRulesModal} data-dismiss="modal" id="closeBtninfo" >Fermer</button>
          </div>
          </div>
        </div>
        )}
        {isModaleScoresOpen && ( // Condition pour afficher la modale des scores
          <ModaleScoresMasterMind onClose={handleCloseScores} />
        )}
      </div>
    </>
  );
};

export default ModaleMenuMasterMind;
