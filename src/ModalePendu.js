import React, { useState, useEffect } from 'react';
import './ModalePendu.css';

const categories = {
  animaux: ['chien', 'chat', 'éléphant', 'girafe', 'tigre', 'coq', 'rat', 'loup', 'lion', 'zèbre', 'abeille', 'mouche', 'aigle'],
  fruits: ['pomme', 'banane', 'cerise', 'ananas', 'orange', 'kiwi', 'orange', 'poire', 'abricot', 'melon', 'fraise'],
  pays: ['France', 'Allemagne', 'Japon', 'Canada', 'Brésil', 'Suisse', 'Belgique', 'Espagne', 'Portugal', 'Italie', 'Grèce'],
};

const lettresAccentuees = ['é', 'è'];

const ModalePendu = ({ onClose }) => {
  const [categorie, setCategorie] = useState('animaux');
  const [mot, setMot] = useState(choisirMotAleatoire(categories[categorie]));
  const [lettresDevinees, setLettresDevinees] = useState([]);
  const [mauvaisesTentatives, setMauvaisesTentatives] = useState(0);
  const [message, setMessage] = useState('');
  const [victoires, setVictoires] = useState(0);
  const [defaites, setDefaites] = useState(0);

  useEffect(() => {
    const savedVictoires = localStorage.getItem('penduVictoires');
    const savedDefaites = localStorage.getItem('penduDefaites');

    if (savedVictoires) {
      setVictoires(parseInt(savedVictoires, 10));
    }

    if (savedDefaites) {
      setDefaites(parseInt(savedDefaites, 10));
    }
  }, []);

  function choisirMotAleatoire(listeMots) {
    return listeMots[Math.floor(Math.random() * listeMots.length)];
  }

  const handleCategorieChange = (event) => {
    const nouvelleCategorie = event.target.value;
    setCategorie(nouvelleCategorie);
    setMot(choisirMotAleatoire(categories[nouvelleCategorie]));
    setLettresDevinees([]);
    setMauvaisesTentatives(0);
    setMessage('');
  };

  const handleNouvellePartie = () => {
    setMot(choisirMotAleatoire(categories[categorie]));
    setLettresDevinees([]);
    setMauvaisesTentatives(0);
    setMessage('');
  };

  const handleReinitialiserScores = () => {
    setVictoires(0);
    setDefaites(0);
    localStorage.removeItem('penduVictoires');
    localStorage.removeItem('penduDefaites');
  };

  const handleLettreCliquee = (lettre) => {
    const lettreMinuscule = lettre.toLowerCase();

    if (lettresDevinees.includes(lettreMinuscule) || message) {
      return;
    }

    if (mot.toLowerCase().includes(lettreMinuscule)) {
      setLettresDevinees([...lettresDevinees, lettreMinuscule]);
      const nouveauMotDevine = mot.split('').map(l => (lettresDevinees.includes(l.toLowerCase()) || l.toLowerCase() === lettreMinuscule) ? l : '_').join('');
      if (nouveauMotDevine === mot) {
        setMessage(<span style={{ color: 'aqua' }}>Bravo ! Vous avez gagné !</span>);
        setVictoires(victoires + 1);
        localStorage.setItem('penduVictoires', victoires + 1);
      }
    } else {
      if (mauvaisesTentatives + 1 === 6) {
        setMessage(<span style={{ color: 'aqua' }}>Désolé, vous avez perdu. Le mot était: {mot}</span>);
        setDefaites(defaites + 1);
        localStorage.setItem('penduDefaites', defaites + 1);
      }
      setMauvaisesTentatives(mauvaisesTentatives + 1);
    }

    // Ajouter la lettre sélectionnée à l'état des lettres devinées
    const nouvellesLettresDevinees = [...lettresDevinees, lettreMinuscule];
    setLettresDevinees(nouvellesLettresDevinees);

    // Ajouter une classe temporaire pour déclencher l'animation de fondu
    const bouton = document.querySelector(`button[data-lettre="${lettre}"]`);
    bouton.classList.add('selected');
    // Supprimer la classe après 2 secondes pour réinitialiser l'opacité
    setTimeout(() => {
      bouton.classList.remove('selected');
    }, 2000);
  };

  const lettresAffichees = mot.split('').map(l => (lettresDevinees.includes(l.toLowerCase()) ? l : '_')).join(' ');

  const handleClose = () => {
    onClose();
  };

  return (
    <div className='tout'>
      <div className="modale-pendu">
        <h2>Jeu du Pendu</h2>
        <label htmlFor="categorie">Choisissez une catégorie :</label>
        <select id="categorie" value={categorie} onChange={handleCategorieChange}>
          {Object.keys(categories).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <div className='miseEnPage'><p>{lettresAffichees}</p></div>
        
        <div className="clavier">
          {('abcdefghijklmnopqrstuvwxyz' + lettresAccentuees.join('')).split('').map((lettre, index) => (
            <button key={index} onClick={() => handleLettreCliquee(lettre)}
              disabled={lettresDevinees.includes(lettre.toLowerCase()) || message}
              className={lettresDevinees.includes(lettre.toLowerCase()) ? 'selected' : ''}
              style={{ backgroundColor: lettresDevinees.includes(lettre.toLowerCase()) ? 'rgba(0, 123, 255, 0.9)' : 'rgba(0, 123, 255, 0.1)' }}
              data-lettre={lettre} // Ajouter un attribut pour sélectionner le bouton
            >
              {lettre}
            </button>
          ))}
        </div>
        <p>Tentatives incorrectes: {mauvaisesTentatives} / 6</p>
        <p>Victoires: {victoires}</p>
        <p>Défaites: {defaites}</p>
        {message && <p className="message">{message}</p>}

        <button onClick={handleReinitialiserScores}>Réinitialiser les scores</button>
       <div className='lesBoutons'>
          <button onClick={handleNouvellePartie} className='tp10'>NOUVELLE PARTIE</button>
          <a href="#portfolio">
            <button onClick={handleClose} className='portfolio5'>PORTFOLIO</button>
          </a>
        </div>
      </div>
       
    </div>
  );
};

export default ModalePendu;
