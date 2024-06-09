import React, { useState } from 'react';
import './ModaleEditionJoueur.css';

const ModaleEditionJoueur = ({ playerData, onClose, onSave, pseudo }) => {
  const [email, setEmail] = useState(playerData.email);
  const [score, setScore] = useState(playerData.score);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleScoreChange = (e) => setScore(e.target.value);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSave = () => {
    const updatedPlayerData = { ...playerData, email, score };
    onSave(updatedPlayerData);
    onClose();
  };

  return (
    <div className="modaleEditionJoueur">
      <div className="modale-contenu">
        <span className="close" onClick={onClose}>&times;</span>
        <h1>ÉDITION DU JOUEUR</h1>
        <form>
          <div className="form-group">
            <label htmlFor="pseudo">Pseudo</label>
            <input
              type="text"
              id="pseudo"
              value={pseudo}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="score">Score</label>
            <input
              type="text"
              id="score"
              value={score}
              onChange={handleScoreChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              value={playerData.password}
              readOnly
            />
            <img
              src="./image/eye1.png"
              onClick={togglePasswordVisibility}
              alt="Afficher le mot de passe"
              style={{ cursor: 'pointer' }}
            />
          </div>
          <button type="button" onClick={onClose}>Annuler</button>
          <button type="button" onClick={handleSave}>Sauvegarder</button>
        </form>
      </div>
    </div>
  );
};

export default ModaleEditionJoueur;
