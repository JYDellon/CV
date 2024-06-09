import React, { useState, useEffect } from 'react';
import './ModalePanelAdmin.css';
import ModaleEditionJoueur from './ModaleEditionJoueur';

const ModalePanelAdmin = ({ onClose }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayers = () => {
      const allPlayers = [];
      for (let key in localStorage) {
        if (key.startsWith('MM_') && key !== 'MM_connected' && key !== 'MM_nonInscrits') {
          const playerData = localStorage.getItem(key);
          const pseudo = key.replace('MM_', '');
          allPlayers.push({ key, pseudo, data: JSON.parse(playerData) });
        }
      }
      setPlayers(allPlayers);
    };
    fetchPlayers();
  }, []);

  const handleDeletePlayer = (key) => {
    localStorage.removeItem(key);
    setPlayers(players.filter(player => player.key !== key));
    setSelectedPlayers(selectedPlayers.filter(player => player.key !== key));
  };

  const handleDeletePlayer2 = () => {
    selectedPlayers.forEach(player => {
      localStorage.removeItem(player.key);
    });
    const updatedPlayers = players.filter(player => !selectedPlayers.some(selectedPlayer => selectedPlayer.key === player.key));
    setPlayers(updatedPlayers);
    setSelectedPlayers([]);
  };

  const handleEditPlayer = (key) => {
    const playerToEdit = players.find(player => player.key === key);
    setSelectedPlayer(playerToEdit);
  };

  const handleCloseEditModal = () => {
    setSelectedPlayer(null);
  };

  const handleSavePlayer = (updatedPlayerData) => {
    const updatedPlayers = players.map(player => {
      if (player.key === selectedPlayer.key) {
        return { ...player, data: updatedPlayerData };
      }
      return player;
    });
    setPlayers(updatedPlayers);
    localStorage.setItem(selectedPlayer.key, JSON.stringify(updatedPlayerData));
  };

  return (
    <div className='corpsT'>
      <div className="modalePanelAdmin">

      <span className="close" onClick={onClose}>&times;</span>
          <h1>PANEL ADMIN</h1>
          <p>Bienvenue dans le panneau d'administration.</p>
          <h2>Liste des joueurs inscrits :</h2>
            
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Pseudo</th>
                  <th>Email</th>
                  <th>Mot de passe</th>
                  <th>Score</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {players.map(player => (
                  <tr key={player.key}>
                    <td className="checkbox-column">
                      <input
                        type="checkbox"
                        checked={selectedPlayers.some(selectedPlayer => selectedPlayer.key === player.key)}
                        onChange={() => {
                          const isSelected = selectedPlayers.some(selectedPlayer => selectedPlayer.key === player.key);
                          setSelectedPlayers(prevSelectedPlayers => {
                            if (isSelected) {
                              return prevSelectedPlayers.filter(selectedPlayer => selectedPlayer.key !== player.key);
                            } else {
                              return [...prevSelectedPlayers, player];
                            }
                          });
                        }}
                      />
                    </td>
                    <td>{player.pseudo}</td>
                    <td>{player.data.email}</td>
                    <td>{player.data.password}</td>
                    <td>{player.data.score === 3600 ? "N'a pas encore joué !" : player.data.score}</td>
                    <td>
                      <div className='tir'>
                          <a className='editerPng' onClick={() => handleEditPlayer(player.key)} ><img className='icones' src="./image/editer.png"/></a>
                          <button onClick={() => handleEditPlayer(player.key)}  className=' boutonEditer prima btn btn-primary'>Éditer</button>

                          <a className='supprimerPng' onClick={() => handleDeletePlayer(player.key)} ><img className='icones' src='./image/supprimer.png'/></a>
                          <button onClick={() => handleDeletePlayer(player.key)} className='boutonSupprimer btn btn-danger'>Supprimer</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button onClick={handleDeletePlayer2} className='boutonSupprimer2'>Suppression multiple</button>
            <button onClick={onClose} className='boutonFermer'>Fermer</button>



        {selectedPlayer && (
          <ModaleEditionJoueur
            playerData={selectedPlayer.data}
            onClose={handleCloseEditModal}
            onSave={handleSavePlayer}
            pseudo={selectedPlayer.pseudo}
          />
        )}
      </div>
    </div>
  );
};

export default ModalePanelAdmin;
