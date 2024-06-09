import React, { useState } from 'react';
import './ModaleInscription.css';

const ModaleInscription = ({ onClose, onConnect }) => {
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isInscriptionSuccess, setIsInscriptionSuccess] = useState(false);

  const handlePseudoChange = (e) => setPseudo(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Les mots de passe ne correspondent pas.");
      return;
    }
    console.log('Pseudo:', pseudo);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Enregistrer l'utilisateur dans le localStorage
    const userKey = 'MM_' + pseudo;
    const existingUser = localStorage.getItem(userKey);
    if (existingUser) {
      console.log('Pseudo déjà utilisé');
      return;
    }
    localStorage.setItem(userKey, JSON.stringify({ email, password, score: 3600 }));
    setIsInscriptionSuccess(true);

    onClose();
  };

  const handleClose = () => {
    onClose();
    if (isInscriptionSuccess) {
      onConnect();
    }
  };

  const changer1 = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const changer2 = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className="signUp">
      <div id="signupForm">
        <h5>INSCRIPTION</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="usernameSignup">Pseudo</label>
            <input
              type="text"
              className="form-control"
              id="usernameSignup"
              placeholder="Saisissez votre Pseudo"
              value={pseudo}
              onChange={handlePseudoChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Saisissez votre adresse Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
          </div>
          <div className="azerty">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              className="form-control"
              id="password"
              placeholder="Saisissez votre mot de passe"
              value={password}
              onChange={handlePasswordChange}
            />
            <img
              src={isPasswordVisible ? './image/eye2.png' : './image/eye1.png'}
              id="eye1"
              onClick={changer1}
              alt="Afficher le mot de passe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmation de mot de passe</label>
          </div>
          <div className="azerty">
            <input
              type={isConfirmPasswordVisible ? 'text' : 'password'}
              className="form-control"
              id="confirmPassword"
              placeholder="Confirmez votre mot de passe"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <img
              src={isConfirmPasswordVisible ? './image/eye2.png' : './image/eye1.png'}
              id="eye2"
              onClick={changer2}
              alt="Afficher la confirmation du mot de passe"
            />
          </div>
          <div className='op'>
            <button type="submit" className="btn btn-primary" id="submit">Valider</button>
            <div className="annuler">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Annuler
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModaleInscription;
