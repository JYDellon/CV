import React from 'react';

const Formation = () => {
  return (
    <section className='formation'>
      <div id="formations">
          <h3>Formations</h3>   
          <ul>
                    <li>
                        <h4>CDA</h4>
                        ADAPECO/SOFIP - Roubaix 59
                        <h5>2023</h5>
                    </li>
                    <li>
                        <h4>MS Développeur Cobol</h4>
                        AFPA - Roubaix 59
                        <h5>2022-23</h5>
                    </li>
                    <li>
                        <h4>Formation aux métiers du numérique</h4>
                        Nurserie/Euratechnologies - Lille 59
                        <h5>2022</h5>
                    </li>
                    <li>
                        <h4>Deug MIAS (Maths/Informatique)</h4>
                        Université Paris XI - Orsay 91
                        <h5>1992-94</h5>
                    </li>
                    <li>
                        <h4>Bac E (Maths/Physique/Chimie)</h4>
                        Lycée G.Eiffel - Cachan 94
                        <h5>1992</h5>
                    </li>
          </ul>      
      </div>
      <div id="langues"> 
                    <h3 className='moi'>Langues</h3>
                    <div id="bilingue">
                        <div className="imgLang2">
                          <img src="/image/drapeauangleterre.png" alt="anglais" title="Anglais"></img>
                        </div>
                        <div className="lang2">
                            <p>B1</p>
                        </div>
                    </div>
      </div>
      <div id="hobbies">
                        <h3 className='moi'>Loisirs</h3> 
                        <div id="listhobbies">
                            <p>La natation</p>
                            <p>Les échecs</p>
                            <p>Le jazz</p>
                        </div>
                                
      </div>
    </section>
  );
};

export default Formation;
