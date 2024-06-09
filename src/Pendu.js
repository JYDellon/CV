import React, { useState } from 'react';
import './Pendu.css';

const Pendu = ({ mot }) => {
  const [lettresDevinees, setLettresDevinees] = useState([]);
  const [erreurs, setErreurs] = useState(0);

  const maxErreurs = 6;

  const handleLettre = (lettre) => {
    if (!lettresDevinees.includes(lettre)) {
      setLettresDevinees([...lettresDevinees, lettre]);
      if (!mot.includes(lettre)) {
        setErreurs(erreurs + 1);
      }
    }
  };

  const estGagne = mot.split('').every((lettre) => lettresDevinees.includes(lettre));
  const estPerdu = erreurs >= maxErreurs;

  return (
    <div>
      <h1>Le Pendu</h1>
      <p>Mot à deviner :</p>
      <div className="mot">
        {mot.split('').map((lettre, index) => (
          <span key={index} className="lettre">
            {lettresDevinees.includes(lettre) ? lettre : '_'}
          </span>
        ))}
      </div>
      <div className="clavier">
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((lettre) => (
          <button
            key={lettre}
            onClick={() => handleLettre(lettre)}
            disabled={lettresDevinees.includes(lettre) || estGagne || estPerdu}
          >
            {lettre}
          </button>
        ))}
      </div>
      <div className="erreurs">
        <p>Erreurs : {erreurs} / {maxErreurs}</p>
        {estPerdu && <p>Perdu ! Le mot était : {mot}</p>}
        {estGagne && <p>Gagné ! Félicitations !</p>}
      </div>
    </div>
  );
};

export default Pendu;
