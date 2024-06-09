import React, { useState } from 'react';
import './ModaleConnexion.css';

const ModaleConnexion = ({ onClose, onSuccess, onAdminLogin }) => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePseudoChange = (e) => setPseudo(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (pseudo === 'Admin' && password === 'root') {
      onAdminLogin();
      onClose(); 
      return;
    }

   
    const userKey = 'MM_' + pseudo;
    const userJSON = localStorage.getItem(userKey);

    if (!userJSON) {
      setErrorMessage("Utilisateur non trouvé. Veuillez vérifier vos informations.");
      return;
    }

    const user = JSON.parse(userJSON);
    if (user.password !== password) {
      setErrorMessage("Mot de passe incorrect. Veuillez réessayer.");
      return;
    }

   
    setErrorMessage("");

   
    onSuccess(pseudo); 

    
    onClose();

    setPseudo('');
    setPassword('');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="connexion">
      <div id="connexionForm">
        <h5 style={{ color: 'white' }}>CONNEXION</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="usernameConnexion" style={{ color: 'white' }}>Pseudo</label>
            <input
              type="text"
              className="form-control"
              id="usernameConnexion"
              placeholder="Admin"
              value={pseudo}
              onChange={handlePseudoChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConnexion" style={{ color: 'white' }}>Mot de passe</label>
            <div className="azerty">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                className="form-control"
                id="passwordConnexion"
                placeholder="root"
                value={password}
                onChange={handlePasswordChange}
              />
              <img
                src={isPasswordVisible ? './image/eye2.png' : './image/eye1.png'}
                id="eyeConnexion"
                onClick={togglePasswordVisibility}
                alt="Afficher le mot de passe"
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit" className="btn btn-primary" id="submitConnexion" style={{ color: 'white' }}>Valider</button>
          <div className="annuler">
            <button
              type="button"
              className="btn btn-secondary"
              style={{ color: 'white', textAlign: 'center' }}
              onClick={onClose}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModaleConnexion;
