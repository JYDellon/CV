import React, { useEffect, useState } from 'react';
import './ModaleScoresMasterMind.css';

const ModaleScoresMasterMind = ({ onClose }) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const allScores = [];

    // Parcourir toutes les clés du localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      // Vérifier si la clé commence par 'MM_' et exclure 'connected' et 'nonInscrits'
      if (key.startsWith('MM_') && key !== 'MM_connected' && key !== 'MM_nonInscrits') {
        const pseudo = key.substring(3);
        const data = JSON.parse(localStorage.getItem(key));

        // Ajouter le score à la liste des scores
        if (data && data.score) {
          allScores.push({ joueur: pseudo, score: parseInt(data.score, 10) });
        }
      }
    }

    // Trier les scores par ordre croissant
    allScores.sort((a, b) => a.score - b.score);
    setScores(allScores);
  }, []);

  return (
    <div className="modal2">
      <div className="modal-content2">
        <span className="close2" onClick={onClose}>&times;</span>
        <h2>Scores</h2>
        <table>
          <thead>
            <tr>
              <th>Joueur</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((entry, index) => (
              <tr key={index}>
                <td>{entry.joueur}</td>
                <td>{entry.score >= 3600 ? "N'a pas encore joué!" : entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="btn btn-secondary" onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default ModaleScoresMasterMind;
