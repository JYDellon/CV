import React, { useState } from 'react';
import Slider from 'react-slick';

import ModaleMemory from '../ModaleMemory';
import ModaleSolitaire from '../ModaleSolitaire';
import ModaleChifoumi from '../ModaleChifoumi';
import ModaleFizzBuzz from '../ModaleFizzBuzz';
import ModaleMenuMasterMind from '../ModaleMenuMasterMind';
import ModaleMenuPuzzleGlissant from '../ModaleMenuPuzzleGlissant';
import ModalePendu from '../ModalePendu';

const PortfilioEnAccordeon =  ({ onOpenModaleSolitaire, onOpenModaleMemory, onOpenModaleChifoumi, onOpenModaleFizzBuzz, onOpenModaleMenuMasterMind, onOpenModaleMenuPuzzleGlissant, onOpenModalePendu, onOpenModaleSnake }) => {


  return (

    <div className="accordion">
    <div className="accordion2 accordion-flush hidden1" id="accordionFlushExampleBis">
        <div className="accordion-item">
            <div className='centred'>
                <button className="accordion-button collapsed bgPerso fs cardo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h2 className="accordion-header" id="flush-headingFive">
                        1 - UN SITE VITRINE
                    </h2>
                </button>
            </div>
            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExampleBis">
                <div className="accordion-body bgPerso experience">
                    <div>
                        <p className="espace">Durant ma formation, il nous a été demandé de satisfaire au besoin d'un garagiste en créant son site vitrine.
                12 sites lui ont été présentés. Je vous propose de découvrir ma réalisation:</p>
                    <a
                        href="https://jydellon.github.io/JRAuto/"
                        title="JRAuto"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-swiper-parallax="80"
                        data-swiper-parallax-opacity="0.2"
                        data-swiper-parallax-duration="1750"
                    >
                             <i> 
                                <span className="cliker">
                                    En savoir plus!
                                </span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <div className='centred'>
                <button className="accordion-button collapsed bgPerso fs cardo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                   <h2 className="accordion-header" id="flush-headingSix">
                        2 - LE CHI-FOU-MI
                    </h2>
                </button>
            </div>  
            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExampleBis">
                <div className="accordion-body bgPerso experience">
                    <div id="formationsLanguesHobbie">
                        <p className="espace">Le Chi-fou-mi est un jeu de mains à trois positions qui oppose deux adversaires en 5 coups.Voici ma version de ce jeu mythique:</p>
                        <a href='#' onClick={onOpenModaleChifoumi} title="chifoumi" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                            <i>
                                <span className="cliker">
                                    En savoir plus!
                                </span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <div className='centred'>
                <button className="accordion-button collapsed bgPerso fs cardo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <h2 className="accordion-header" id="flush-headingSeven">
                        3 - LE MEMORY
                    </h2>
                </button>
            </div>
            <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExampleBis">
                <div className="accordion-body bgPerso experience">
                    <div>
                        <p className="espace">Qui ne connaît pas le memory? Ce jeu de mémoire légendaire a été inventé en 1959 et se renouvelle sans cesse: </p>
                        <a href='#' onClick={onOpenModaleMemory} title="Le memory" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                            <span className="cliker">
                                En savoir plus!
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <div className='centred'>
                <button className="accordion-button collapsed bgPerso fs cardo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                   <h2 className="accordion-header" id="flush-headingNine">
                        4 - LE FIZZ-BUZZ
                    </h2>
                </button>
            </div>    
            <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExampleBis">
                <div className="accordion-body bgPerso experience">
                    <div>
                        <p>divisible par 3: Fizz</p>
                        <p>divisible par 5: Buzz</p>
                        <p>divisible par 3 et par 5: Fizz-Buzz</p>
                        <p className="espace">ni l'un ni l'autre: choisissez le nombre.</p>
                        <a href='#' onClick={onOpenModaleFizzBuzz} title="Le Fizz-Buzz" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                            <i>
                                <span className="cliker">
                                    En savoir plus!
                                </span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <div className='centred'>
                <button className="accordion-button collapsed bgPerso fs cardo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                    <h2 className="accordion-header" id="flush-headingTen">
                        5 - LE PENDU
                    </h2>
                </button>
            </div>   
            <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExampleBis">
                <div className="accordion-body bgPerso experience">
                    <div>
                        <p>Tentez de deviner le mot secret en entrant des lettres une par une au clavier. Ne gaspillez pas vos coups, car si trop de vos choix sont erronés vous tuerez le pendu et vous perdrez la partie.</p>
                        <a href='#' onClick={onOpenModalePendu} title="Le Fizz-Buzz" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                            <i>
                                <span className="cliker">
                                    En savoir plus!
                                </span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <div className='centred'>   
                <button className="accordion-button collapsed bgPerso fs cardo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                   <h2 className="accordion-header" id="flush-headingEleven">
                    6 - LE SOLITAIRE
                    </h2>
                </button>
            </div>
            <div id="flush-collapseEleven" className="accordion-collapse collapse" aria-labelledby="flush-headingEleven" data-bs-parent="#accordionFlushExampleBis">
                <div className="accordion-body bgPerso experience">
                    <div>
                        <p>Comme son nom l'indique, c'est un jeu qui se joue seul. Il est considéré comme un casse-tête. Il doit rester le minimum de billes. Une seule à la fin, c'est possible!</p>
                        <a href="#"  id='en-savoir-plus-button' onClick={onOpenModaleSolitaire} title="Le solitaire" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                            <i>
                                <span className="cliker">
                                    En savoir plus!
                                </span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <div className='centred'>  
                <button className="accordion-button collapsed bgPerso fs cardo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
                    <h2 className="accordion-header" id="flush-headingTwelve">
                        7 - LE MASTERMIND  <div className='clignoter'>PANEL ADMIN</div>
                    </h2>
                </button>
            </div>
            <div id="flush-collapseTwelve" className="accordion-collapse collapse" aria-labelledby="flush-headingTwelve" data-bs-parent="#accordionFlushExampleBis">
                <div className="accordion-body bgPerso experience">
                    <div>
                        <p>Le Mastermind est un jeu de logique pour deux joueurs, où l'un des joueurs (appelé le codeur ou le maître du jeu) crée un code secret et l'autre joueur (appelé le décodeur ou le joueur) tente de deviner ce code en un nombre limité de tentatives.</p>
                        <a href="#"  onClick={onOpenModaleMenuMasterMind} title="masterMind" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                            <i>
                                <span className="cliker">
                                    En savoir plus!
                                </span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion-item">
        <div className='centred'> 
            <button className="accordion-button collapsed bgPerso fs cardo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsethirteen" aria-expanded="false" aria-controls="flush-collapsethirteen">
                <h2 className="accordion-header" id="flush-headingthirteen">
                    8 - LE PUZZLE GLISSANT
                </h2>
            </button>
        </div>
            <div id="flush-collapsethirteen" className="accordion-collapse collapse" aria-labelledby="flush-headingthirteen" data-bs-parent="#accordionFlushExampleBis">
                <div className="accordion-body bgPerso experience">
                    <div>
                        <p>Le taquin est un jeu très populaire. Inventé dans les années 1870 aux Etats-Unis par Samuel Lloyd.Toujours aussi populaire dans les années 2000, il est désormais un support de communication innovant pour promouvoir une entreprise.</p>
                        

                        <a href='#' onClick={onOpenModaleMenuPuzzleGlissant} title="Le Fizz-Buzz" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                            <i>
                                <span className="cliker">
                                    En savoir plus!
                                </span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion-item">
        <div className='centred'> 
            <button className="accordion-button collapsed bgPerso fs cardo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefourteen" aria-expanded="false" aria-controls="flush-collapsefourteen">
                <h2 className="accordion-header" id="flush-headingfourteen">
                    8 - LE SNAKE
                </h2>
            </button>
        </div>
            <div id="flush-collapsefourteen" className="accordion-collapse collapse" aria-labelledby="flush-headingfourteen" data-bs-parent="#accordionFlushExampleBis">
                <div className="accordion-body bgPerso experience">
                    <div>
                        <p>Le taquin est un jeu très populaire. Inventé dans les années 1870 aux Etats-Unis par Samuel Lloyd.Toujours aussi populaire dans les années 2000, il est désormais un support de communication innovant pour promouvoir une entreprise.</p>
                        

                        <a href='#' onClick={onOpenModaleSnake} title="Le Fizz-Buzz" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                            <i>
                                <span className="cliker">
                                    En savoir plus!
                                </span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
 </div>

  );
};

export default PortfilioEnAccordeon;
