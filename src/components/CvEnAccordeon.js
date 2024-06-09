import React from 'react';

const CvEnAccordeon = () => {
    return (


        <div className="mtaccordion">
            <div className="accordion accordion-flush hidden" id="accordionFlushExample">
                <div className="accordion-item ">
                    <div className='centred'>
                        <button className="accordion-button collapsed bgPerso fs cardo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h2 className="accordion-header" id="flush-headingOne">
                                TECHNOLOGIES
                            </h2>        
                        </button>
                        

                    </div>
                <div id="flush-collapseOne" className="accordion-collapse collapse bgPerso" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body ">
                        <div className="competence2">
                            <ul>
                                <li id="licompetences">Figma</li>
                                <li id="licompetences">HTML</li>
                                <li id="licompetences">CSS</li>
                                <li id="licompetences">JAVASCRIPT</li>
                                <li id="licompetences">METHODES AGILES</li>
                                <li id="licompetences">SCRUM</li>
                                <li id="licompetences">GIT/GITHUB</li>
                                <li id="licompetences">PHP</li>
                                <li id="licompetences">SYMFONY6 WEBSITE</li>
                                <li id="licompetences">SYMFONY6 API-REST</li>
                                <li id="licompetences">REACT</li>
                                <li id="licompetences">REACT NATIVE</li>
                                <li id="licompetences">ANDROID STUDIO</li>
                                <li id="licompetences">POSTMAN</li>
                                <li id="licompetences">PHPMYADMIN</li>
                                <li id="licompetences">MYSQL</li>
                            </ul>
                            <div id="icons">
                                <div className="icones">
                                    <img src="./image/html.png" alt="html" width={45}></img>
                                </div>
                                <div className="icones">
                                    <img src="./image/css.png" alt="css" width={35}></img>
                                </div>
                                <div className="icones">
                                    <img src="./image/js.png" alt="java script"width={50}></img>
                                </div>
                                <div className="icones">
                                    <img src="./image/mysql.png" alt="mysql"width={50}></img>
                                </div>
                                <div className="icones">
                                    <img src="./image/react.png" alt="REACT"width={50}></img>
                                </div>
                                <div className="icones">
                                    <img src="./image/php.png" alt="php"width={50}></img>
                                </div>
                                <div className="icones">
                                    <img src="./image/symfony.png" alt="symfony"width={50}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <div className='centred'>
                    <button className="accordion-button collapsed bgPerso fs cardo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            FORMATIONS
                        </h2>
                    </button>
                </div>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body bgPerso">
                        <div id="formationsLanguesHobbie">
                            <div className="formation2">
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
                                    <h4>Deug MIAS-Maths/Informatique</h4>
                                    Université Paris XI - Orsay 91
                                    <h5>1992-94</h5>
                                </li>
                                <li>
                                    <h4>Bac E-Maths/Physique/Chimie</h4>
                                    Lycée G.Eiffel - Cachan 94
                                    <h5>1992</h5>
                                </li>
                            </ul>
                            </div>
                            <div className="langues2"> 
                                <h2>LANGUE</h2>
                                <div id="bilingue">
                                    <div className="imgLang2">
                                        <img src="./image/drapeauangleterre.png" alt="anglais" title="Anglais"></img>
                                    </div>
                                    <div className="lang2">
                                    B1
                                    </div>
                                </div>
                            </div>
                            <div className="hobbies2">
                                <h2>LOISIRS</h2> 
                                <div id="listhobbies">
                                    <p>La natation</p>
                                    <p>Les échecs</p>
                                    <p>Le jazz</p>
                                </div> 
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <div className='centred'>
                    <button className="accordion-button collapsed bgPerso fs cardo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <h2 className="accordion-header" id="flush-headingThree">
                            EXPERIENCES PROFESSIONNELLES
                        </h2>
                    </button>
                </div>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body bgPerso">
                        <div className="experience">
                            <div className="list">
                                <ul>
                                    <li id="liexperiences">
                                        <h4>Projet de site e-commerce (SCRUM)</h4>
                                            L'incubateur (Lille)
                                        <h5>Oct-Dec 2023</h5>
                                    </li>
                                    <li id="liexperiences">
                                        <h4>Stage: Création d'une appli de gestion de restaurants</h4>
                                            Le Panoramique (Cassel)
                                        <h5>Juillet 2023</h5>
                                    </li>  
                                <li id="liexperiences">
                                    <h4>Gestionnaire logistique sur showroom</h4>
                                    Valophis
                                    <h5>2016-17</h5>
                                </li>
                                <li id="liexperiences">
                                    <h4>Agent d’accueil et d'information</h4>
                                    Adoma/CDC Habitat
                                    <h5>2015 16</h5>
                                </li>
                                <li id="liexperiences">
                                    <h4>Assistant achat</h4>
                                    ALX Création/Fabrique d’uniformes Croix-Rouge
                                    <h5>2014-15</h5>
                                </li>
                                <li id="liexperiences">
                                    <h4>Gestionnaire de stocks</h4>
                                    EDF/Gestion de stocks des centrales nucléaires
                                    <h5>2012-14</h5>
                                </li>
                                <li id="liexperiences">
                                    <h4>Assistant achat</h4>
                                    ETMA - Pots d’échappement poids lourds
                                    <h5>2001-12</h5>
                                </li>
                                
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <div className='centred'>
                   <button className="accordion-button collapsed bgPerso fs cardo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        <h2 className="accordion-header" id="flush-headingFour">
                            SAVOIR-ETRE
                        </h2>
                    </button>
                </div>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body bgPerso">
                            <div className="savoiretre2">
                                <div className="list">
                                    <ul>
                                        <li id="liexperiences">
                                            <h4>Travailler en équipe</h4>
                                        </li>
                                        <li id="liexperiences">
                                            <h4>Faire preuve d'autonomie</h4>
                                        </li>
                                        <li id="liexperiences">
                                            <h4>Faire preuve de rigueur et de précision</h4>
                                        </li>
                                        <li id="liexperiences">
                                            <h4>Faire preuve de créativité, d'inventivité</h4>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default CvEnAccordeon;