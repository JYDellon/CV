import React from 'react';

const Competences = () => {
  return (
    <section className='technologies'>
      <h3>Technologies</h3>
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
                      <img  src="./image/html.png" alt="html" width={45}></img>
                    </div>
                    <div className="icones">
                      <img src="./image/css.png" alt="css" width={35}></img>
                    </div>
                    <div className="icones">
                      <img src="./image/js.png" alt="java script" width={50}></img>
                    </div>
                    <div className="icones">
                      <img src="./image/mysql.png" alt="mysql" width={50}></img>
                    </div>
                    <div className="icones">
                      <img src="./image/react.png" alt="REACT" width={50}></img>
                    </div>
                    <div className="icones">
                      <img src="./image/php.png" alt="php" width={50}></img>
                    </div>
                    <div className="icones">
                      <img src="./image/symfony.png" alt="symfony" width={50}></img>
                    </div>
                </div>
    </section>
  );
};

export default Competences;
