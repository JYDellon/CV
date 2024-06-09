import React, { useState, useEffect } from 'react';
import './ModaleFizzBuzz.css';

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 99) + 1;
};

const ModaleFizzBuzz = ({ onClose }) => {
    const [nombre, setNombre] = useState(generateRandomNumber());
    const [résultat, setRésultat] = useState('');
    const [tempsRestant, setTempsRestant] = useState(30);
    const [bonnesRéponses, setBonnesRéponses] = useState(0);
    const [mauvaisesRéponses, setMauvaisesRéponses] = useState(0);
    const [jeuEnCours, setJeuEnCours] = useState(true);
    const [meilleurJoueur, setMeilleurJoueur] = useState({ bonnes: 0, mauvaises: 0 });

    useEffect(() => {
        const record = JSON.parse(localStorage.getItem('record'));
        if (record) {
            setMeilleurJoueur(record);
        }
    }, []);

    useEffect(() => {
        if (bonnesRéponses > meilleurJoueur.bonnes) {
            const nouveauRecord = { bonnes: bonnesRéponses, mauvaises: mauvaisesRéponses };
            localStorage.setItem('record', JSON.stringify(nouveauRecord));
            setMeilleurJoueur(nouveauRecord);
        }
    }, [bonnesRéponses]);

    useEffect(() => {
        if (jeuEnCours) {
            const timer = setInterval(() => {
                setTempsRestant(prevTemps => prevTemps - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [jeuEnCours]);

    useEffect(() => {
        if (tempsRestant === 0) {
            setJeuEnCours(false);
        }
    }, [tempsRestant]);

    const vérifierRéponse = (réponse) => {
        if (!jeuEnCours) return;

        let message = '';
        let attendu = '';
        if (nombre % 3 === 0 && nombre % 5 === 0) {
            attendu = 'FizzBuzz';
        } else if (nombre % 3 === 0) {
            attendu = 'Fizz';
        } else if (nombre % 5 === 0) {
            attendu = 'Buzz';
        } else {
            attendu = 'Ni l\'un ni l\'autre';
        }

        if (réponse === attendu) {
            message = 'Correct!';
            setBonnesRéponses(bonnesRéponses + 1);
        } else {
            message = `Incorrect! Le bon résultat était: ${attendu}`;
            setMauvaisesRéponses(mauvaisesRéponses + 1);
        }

        setRésultat(message);
        setNombre(generateRandomNumber());
    };

    const nouvellePartie = () => {
        setBonnesRéponses(0);
        setMauvaisesRéponses(0);
        setTempsRestant(30);
        setJeuEnCours(true);
        setRésultat('');
        setNombre(generateRandomNumber());
    };

    return (
      <>
        <div className="modale-fizzbuzz">
            <h1>Jeu du FizzBuzz</h1>
            <p></p>
            <h2>Record: {meilleurJoueur.bonnes} bonnes réponses</h2>
            {/* <p>{meilleurJoueur.mauvaises} mauvaises réponses: </p> */}
            {jeuEnCours ? (
                <>
                    <p>Temps restant: {tempsRestant} secondes</p>
                    <p>Nombre actuel: {nombre}</p>
                    <div className="boutons">
                        <button className="bouton" onClick={() => vérifierRéponse('Fizz')}>Fizz</button>
                        <button className="bouton" onClick={() => vérifierRéponse('Buzz')}>Buzz</button>
                        <button className="bouton" onClick={() => vérifierRéponse('FizzBuzz')}>FizzBuzz</button>
                        <button className="bouton" onClick={() => vérifierRéponse('Ni l\'un ni l\'autre')}>Ni l'un ni l'autre</button>
                    </div>
                    {résultat && <p>{résultat}</p>}
                </>
            ) : (
                <div>
                    <p>Le temps est écoulé !</p>
                </div>
            )}
            <p>Bonnes réponses: {bonnesRéponses}</p>
            <p>Mauvaises réponses: {mauvaisesRéponses}</p>
            
            
        </div>

        <div className="modale-fizzbuzz2">
          <div className='finDePage'>
                <dix><button onClick={nouvellePartie} className='tp'>NOUVELLE PARTIE</button></dix>
                <a href="#portfolio">
                    <dix><button onClick={onClose} className='portfoliA'>PORTFOLIO</button></dix>
                </a>
            </div>
        </div>

      </>
    );
};

export default ModaleFizzBuzz;
