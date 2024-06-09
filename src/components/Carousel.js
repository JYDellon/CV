import React, { useState } from 'react';
import Slider from 'react-slick';
import ModaleMenuPuzzleGlissant from '../ModaleMenuPuzzleGlissant';
import ModalePendu from '../ModalePendu'; 
import ModaleSnake from '../ModaleSnake'; 

const Carousel = ({   onOpenModaleSolitaire,
  onOpenModaleMemory,
  onOpenModaleChifoumi,
  onOpenModaleFizzBuzz,
  onOpenModaleMenuMasterMind,
  onOpenModaleMenuPuzzleGlissant,
  onOpenModaleSnake,
  onOpenModalePendu }) => {

  const [isModalePuzzleGlissantOpen, setIsModalePuzzleGlissantOpen] = useState(false);

  
  const openModalePuzzleGlissant = () => {setIsModalePuzzleGlissantOpen(true);};
  const closeModalePuzzleGlissant = () => {setIsModalePuzzleGlissantOpen(false);};

  const [isModalePenduOpen, setModalePenduOpen] = useState(false);
  const [isModaleSnakeOpen, setModaleSnakeOpen] = useState(false);
  
  const openModalePendu = () => setModalePenduOpen(true);
  const closeModalePendu = () => setModalePenduOpen(false);

  const openModaleSnake = () => setModaleSnakeOpen(true);
  const closeModaleSnake = () => setModaleSnakeOpen(false);

  const parametres = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };




  return (
   <>
    <Slider {...parametres} className='carousel sectionWrapper swiper swiper-wrapper'>
      
        <div>
          <figure className="swiper-slide cardPopout">

            <div className="cardPopout" data-swiper-parallax="30" data-swiper-parallax-scale="0.9" data-swiper-parallax-opacity="0.8" data-swiper-parallax-duration="1000">

              <img src="https://cdn.pixabay.com/photo/2024/02/19/13/23/ai-generated-8583396_1280.png" alt="jellyfish" width="800" height="400" data-swiper-parallax="80" data-swiper-parallax-duration="2000"></img>

              <h2 className="title" data-swiper-parallax="80" data-swiper-parallax-duration="1000">
                Un site pour un garage
              </h2>

              <h4 className="subtitle" data-swiper-parallax="80" data-swiper-parallax-duration="1500">
                Langages: HTML - CSS
              </h4>

              
              <a
                href="https://jydellon.github.io/JRAuto/"
                title="JRAuto"
                target="_blank"
                rel="noopener noreferrer"
                data-swiper-parallax="80"
                data-swiper-parallax-opacity="0.2"
                data-swiper-parallax-duration="1750"
              >
                En savoir plus!
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
              </a>

            </div>

          </figure>    
        </div>   
        <div>          
          <figure className="swiper-slide cardPopout">

            <div className="cardPopout" data-swiper-parallax="30" data-swiper-parallax-scale="0.9" data-swiper-parallax-opacity="0.8" data-swiper-parallax-duration="1000">
                
                
              <img src="https://cdn.pixabay.com/photo/2024/04/13/01/21/ai-generated-8692966_1280.jpg" height="400" data-swiper-parallax="80" data-swiper-parallax-duration="2000"></img>
              <div className="panelAdmin">
              </div>
              <h2 className="title" data-swiper-parallax="80" data-swiper-parallax-duration="1000">
                Le mastermind  <span className='clignoter'>PANEL ADMIN</span>
              </h2>
              

              <h4 className="subtitle" data-swiper-parallax="80" data-swiper-parallax-duration="1500">
                Langage: REACT 18.3
              </h4>

              

              <a onClick={onOpenModaleMenuMasterMind} title="chifoumi" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                En savoir plus!
                <svg xmlns="https://m.media-amazon.com/images/G/08/aplusautomation/vendorimages/aa5b0d73-0834-4fdf-85a8-b896a0cf5eaa.jpg._CB485982110__SR300,300_.jpg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
              </a>

            </div>
            
          </figure> 
        </div>  
        <div>
          <figure className="swiper-slide cardPopout">

            <div className="cardPopout" data-swiper-parallax="30" data-swiper-parallax-scale="0.9" data-swiper-parallax-opacity="0.8" data-swiper-parallax-duration="1000">

              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSE5QL7NTm1oFEisaFpYElzF_ErPfLy4d6A&usqp=CAU" alt="chifoumi" width="800" height="400" data-swiper-parallax="80" data-swiper-parallax-duration="2000"></img>

              <h2 className="title" data-swiper-parallax="80" data-swiper-parallax-duration="1000">
                Le chifoumi
              </h2>

              <h4 className="subtitle" data-swiper-parallax="80" data-swiper-parallax-duration="1500">
              Langage: REACT 18.3
              </h4>
              

              <a onClick={onOpenModaleChifoumi} title="chifoumi" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                En savoir plus!
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
              </a>
              
            </div>

          </figure> 
        </div>    
        <div>  
          <figure className="swiper-slide cardPopout">

            <div className="cardPopout" data-swiper-parallax="30" data-swiper-parallax-scale="0.9" data-swiper-parallax-opacity="0.8" data-swiper-parallax-duration="1000">

              <img src="https://cdn.pixabay.com/photo/2023/06/02/09/58/ai-generated-8035194_1280.jpg" alt="memory" width="800" height="400" data-swiper-parallax="80" data-swiper-parallax-duration="2000"></img>

              <h2 className="title" data-swiper-parallax="80" data-swiper-parallax-duration="1000">
                Le memory
              </h2>

              <h4 className="subtitle" data-swiper-parallax="80" data-swiper-parallax-duration="1500">
              Langage: REACT 18.3
              </h4>


              <a id='en-savoir-plus-button' onClick={onOpenModaleMemory} title="Le solitaire" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                En savoir plus!
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
              </a>

            </div>

          </figure>  
          </div>    
        <div>
          <figure className="swiper-slide cardPopout">

            <div className="cardPopout" data-swiper-parallax="30" data-swiper-parallax-scale="0.9" data-swiper-parallax-opacity="0.8" data-swiper-parallax-duration="1000">

              <img src="https://project-assets.showwcase.com/1420x/8108/1634650524021-fizzbuzz.png?type=webp" alt="Barracudas" width="200" height="100" data-swiper-parallax="80" data-swiper-parallax-duration="2000"></img>

              <h2 className="title" data-swiper-parallax="80" data-swiper-parallax-duration="1000">
                Le Fizz-Buzz
              </h2>

              <h4 className="subtitle" data-swiper-parallax="80" data-swiper-parallax-duration="1500">
              Langage: REACT 18.3
              </h4>


              <a onClick={onOpenModaleFizzBuzz} title="chifoumi" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                En savoir plus!
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
              </a>

            </div>

          </figure>
        </div>
        <div>
          <figure className="swiper-slide cardPopout">

            <div className="cardPopout" data-swiper-parallax="30" data-swiper-parallax-scale="0.9" data-swiper-parallax-opacity="0.8" data-swiper-parallax-duration="1000">

              <img src="https://play-lh.googleusercontent.com/EijW1nqSrPp3smvn_gTKlmlg4ferqdQh9-S2Y8seWfayL3GB-AmPTHbw5il1GuQZQw=w480-h960" alt="Queen Angelfish" width="800" height="400" data-swiper-parallax="80" data-swiper-parallax-duration="2000"></img>

              <h2 className="title" data-swiper-parallax="80" data-swiper-parallax-duration="1000">
                Le pendu
              </h2>

              <h4 className="subtitle" data-swiper-parallax="80" data-swiper-parallax-duration="1500">
              Langage: REACT 18.3
              </h4>

              <a href='#' onClick={onOpenModalePendu} title="Le Fizz-Buzz" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
              {/* <a  title="Le juste prix" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750"> */}
                En savoir plus!
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
              </a>

            </div>

          </figure> 
        </div>  
        <div>
          <figure className="swiper-slide cardPopout">

            <div className="cardPopout" data-swiper-parallax="30" data-swiper-parallax-scale="0.9" data-swiper-parallax-opacity="0.8" data-swiper-parallax-duration="1000">

              <img src="https://media1.naturiou.fr/4952-large_default/solitaire-en-bois-goki.jpg" alt="Queen Angelfish" width="800" height="400" data-swiper-parallax="80" data-swiper-parallax-duration="2000"></img>

              <h2 className="title" data-swiper-parallax="80" data-swiper-parallax-duration="1000">
                Le solitaire
              </h2>

              <h4 className="subtitle" data-swiper-parallax="80" data-swiper-parallax-duration="1500">
              Langage: REACT 18.3
              </h4>

              

              <a id='en-savoir-plus-button' onClick={onOpenModaleSolitaire} title="Le solitaire" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                En savoir plus!
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
              </a>

            </div>

          </figure>
        </div>  
        <div>
          <figure className="swiper-slide cardPopout">

            <div className="cardPopout" data-swiper-parallax="30" data-swiper-parallax-scale="0.9" data-swiper-parallax-opacity="0.8" data-swiper-parallax-duration="1000">

              <img src="https://kubekings.fr/31134-home_default/qiyi-slice-mini-klotski-lite.jpg" height="400" data-swiper-parallax="80" data-swiper-parallax-duration="2000"></img>

              <h2 className="title" data-swiper-parallax="80" data-swiper-parallax-duration="1000">
                Le puzzle glissant
              </h2>

              <h4 className="subtitle" data-swiper-parallax="80" data-swiper-parallax-duration="1500">
              Langage: REACT 18.3
              </h4>

             

             <a onClick={onOpenModaleMenuPuzzleGlissant} title="Le puzzle glissant" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                En savoir plus!
                <svg xmlns="https://m.media-amazon.com/images/G/08/aplusautomation/vendorimages/aa5b0d73-0834-4fdf-85a8-b896a0cf5eaa.jpg._CB485982110__SR300,300_.jpg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
              </a>

            </div>

          </figure>
        </div>  
        <div>
          <figure className="swiper-slide cardPopout">

            <div className="cardPopout" data-swiper-parallax="30" data-swiper-parallax-scale="0.9" data-swiper-parallax-opacity="0.8" data-swiper-parallax-duration="1000">

              <img src="https://www.coolmathgames.com/sites/default/files/styles/blog_node_image/public/2023-01/History%20of%20Snake%20Game%20Blog%20Thumbnail.png?itok=-2XLM6FY" height="400" data-swiper-parallax="80" data-swiper-parallax-duration="2000"></img>

              <h2 className="title" data-swiper-parallax="80" data-swiper-parallax-duration="1000">
                Le snake
              </h2>

              <h4 className="subtitle" data-swiper-parallax="80" data-swiper-parallax-duration="1500">
              Langage: REACT 18.3
              </h4>

             

             <a onClick={onOpenModaleSnake} title="Le puzzle glissant" data-swiper-parallax="80" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="1750">
                En savoir plus!
                <svg xmlns="https://m.media-amazon.com/images/G/08/aplusautomation/vendorimages/aa5b0d73-0834-4fdf-85a8-b896a0cf5eaa.jpg._CB485982110__SR300,300_.jpg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
              </a>

            </div>

          </figure>
        </div>  

    </Slider>

    {isModalePuzzleGlissantOpen && <ModaleMenuPuzzleGlissant onClose={closeModalePuzzleGlissant} />} 
    {isModalePenduOpen && (<ModalePendu onClose={closeModalePendu} />)}
    {isModaleSnakeOpen && (<ModaleSnake onClose={closeModaleSnake} />)}
  </> 
  );
};

export default Carousel;
