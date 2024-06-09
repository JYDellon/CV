import React, { useState } from 'react';
import './App.css';
import EnTete from './components/EnTete';
import Experience from './components/Experience';
import Formation from './components/Formation';
import Competences from './components/Competences';
import Contact from './components/Contact';
import LettreMotivation from './components/LettreMotivation';
import SavoirEtre from './components/SavoirEtre';
import Carousel from './components/Carousel';
import CvEnAccordeon from './components/CvEnAccordeon';
import PortfilioEnAccordeon from './components/PortfilioEnAccordeon';
import PiedDePage from './components/PiedDePage';
import ModaleSolitaire from './ModaleSolitaire';
import ModaleMemory from './ModaleMemory';
import ModaleChifoumi from './ModaleChifoumi';
import ModaleFizzBuzz from './ModaleFizzBuzz';
import ModaleMenuMasterMind from './ModaleMenuMasterMind';
import ModaleMenuPuzzleGlissant from './ModaleMenuPuzzleGlissant'; 
import ModalePendu from './ModalePendu'; 
import ModaleSnake from './ModaleSnake'; 

const App = () => {
  const [isModaleOpen, setIsModaleOpen] = useState(false);
  const [isMemoryModaleOpen, setIsMemoryModaleOpen] = useState(false);
  const [isChifoumiModaleOpen, setIsChifoumiModaleOpen] = useState(false);
  const [isFizzBuzzModaleOpen, setIsFizzBuzzModaleOpen] = useState(false);
  const [isMenuMasterMindModaleOpen, setIsMenuMasterMindModaleOpen] = useState(false);
  const [isMenuPuzzleGlissantModaleOpen, setIsMenuPuzzleGlissantModaleOpen] = useState(false); 
  const [isPenduModaleOpen, setIsPenduModaleOpen] = useState(false); 
  const [isModaleSnakeOpen, setIsModaleSnakeOpen] = useState(false); 
  //-----------------------------------------------------------
  const openModaleSolitaire = () => {
    setIsModaleOpen(true);
  };
  
  const closeModaleSolitaire = () => {
    setIsModaleOpen(false);
  };  
  //-----------------------------------------------------------

  const openModaleMemory = () => {
    setIsMemoryModaleOpen(true);
  };

  const closeModaleMemory = () => {
    setIsMemoryModaleOpen(false);
  };
  //-----------------------------------------------------------

  const openModaleChifoumi = () => {
    setIsChifoumiModaleOpen(true);
  };

  const closeModaleChifoumi = () => {
    setIsChifoumiModaleOpen(false);
  };
  //-----------------------------------------------------------

  const openModaleFizzBuzz = () => {
    setIsFizzBuzzModaleOpen(true);
  };

  const closeModaleFizzBuzz = () => {
    setIsFizzBuzzModaleOpen(false);
  };
  //-----------------------------------------------------------

  const openModaleMenuMasterMind = () => {
    setIsMenuMasterMindModaleOpen(true);
  };

  const closeModaleMenuMasterMind  = () => {
    setIsMenuMasterMindModaleOpen(false);
  };
  //-----------------------------------------------------------

  const openModaleMenuPuzzleGlissant = () => {
    setIsMenuPuzzleGlissantModaleOpen(true);
  };

  const closeModaleMenuPuzzleGlissant  = () => {
    setIsMenuPuzzleGlissantModaleOpen(false);
  };
  //-----------------------------------------------------------
  
  const openModalePendu = () => {
    setIsPenduModaleOpen(true);
  };

  const closeModalePendu  = () => {
    setIsPenduModaleOpen(false);
  };
  //-----------------------------------------------------------
  
  const openModaleSnake = () => {
    setIsModaleSnakeOpen(true);
  };

  const closeModaleSnake  = () => {
    setIsModaleSnakeOpen(false);
  };
  //-----------------------------------------------------------

  return (
    <div className="App">
      <div className='Entete'>
        <EnTete />
        <Contact />
      </div>
      <LettreMotivation />
      <div className='toi'>
        <CvEnAccordeon />
      </div>
      <div className='corpsX'>
        <Formation />
        <Competences />
        <Experience />
      </div>
      <div className='corpsX'>
        <SavoirEtre />
      </div>
      <div className='carousel'>
        <Carousel onOpenModaleSolitaire={openModaleSolitaire} onOpenModaleMemory={openModaleMemory} onOpenModaleChifoumi={openModaleChifoumi} onOpenModaleFizzBuzz={openModaleFizzBuzz} onOpenModaleMenuMasterMind={openModaleMenuMasterMind} onOpenModaleMenuPuzzleGlissant={openModaleMenuPuzzleGlissant}  onOpenModalePendu={openModalePendu} onOpenModaleSnake={openModaleSnake} />
      </div>
      <div>
        <PortfilioEnAccordeon onOpenModaleSolitaire={openModaleSolitaire} onOpenModaleMemory={openModaleMemory} onOpenModaleChifoumi={openModaleChifoumi} onOpenModaleFizzBuzz={openModaleFizzBuzz} onOpenModaleMenuMasterMind={openModaleMenuMasterMind} onOpenModaleMenuPuzzleGlissant={openModaleMenuPuzzleGlissant} onOpenModalePendu={openModalePendu} onOpenModaleSnake={openModaleSnake}/>
      </div> 
      <div>
        <PiedDePage />
      </div>
      {isModaleOpen && <ModaleSolitaire onClose={closeModaleSolitaire} />}
      {isMemoryModaleOpen && <ModaleMemory onClose={closeModaleMemory} />}
      {isChifoumiModaleOpen && <ModaleChifoumi onClose={closeModaleChifoumi} />}
      {isFizzBuzzModaleOpen && <ModaleFizzBuzz onClose={closeModaleFizzBuzz} />}
      {isMenuMasterMindModaleOpen && <ModaleMenuMasterMind onClose={closeModaleMenuMasterMind} />}
      {isMenuPuzzleGlissantModaleOpen && <ModaleMenuPuzzleGlissant onClose={closeModaleMenuPuzzleGlissant} />}
      {isPenduModaleOpen && <ModalePendu onClose={closeModalePendu} />}
      {/* {isModaleSnakeOpen && <ModaleSnake onClose={closeModaleSnake} />} */}
      {isModaleSnakeOpen && <ModaleSnake isOpen={isModaleSnakeOpen} onClose={closeModaleSnake} />}
    </div>
  );
};

export default App;
