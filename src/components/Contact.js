import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className='contactX'>

          <div className='contact199'>

            <div className='contact100'>
              <a className='phone' href="tel:+33672153537">
                    06 72 15 35 37
              </a>
            </div>
            
            <div className='contact11'>
              <a className='phone' href="tel:+33672153537">
                <img src="./image/phone.png" alt="Mon téléphone" style={{ width: '70px'}} />
              </a>
            </div>

          </div>

          <div className='reseauxetportfolio'>
              <div className='reseaux'>
                <div className='contact2'>
                    <a href="https://www.linkedin.com/in/jean-yves-dellon-5218499b/" target="_blank"><img src="./image/linkedin.png" width="50px" alt="linkedIn"></img></a>
                </div>
                
                <div className='contact3'>
                    <a href="https://my.indeed.com/p/jeanyvesd-8ljnqr8" target="_blank"><img src="./image/indeed.png" width="50px" alt="indeed"></img></a>
                </div>
              </div>

            <div className='centrer'>

                  <div className="parentLien">
                      <div id="lien1">            
                        <a className="coeur" href="#portfolio">
                            <button type="button"  className="portfolio1X">
                                PORTFOLIO
                            </button>
                          </a>
                      </div>
                  </div>

            </div>
          </div>

          <div className='contact4'>
              <div className='contact40'>
                <a className='mail' href="mailto:jy.dellon@gmail.com?subject=Titre&body=Exemple" id="mail">
                  jy.dellon@gmail.com
                </a>
              </div>
              <div className='contact41'>
                <a className='mail' href="mailto:jy.dellon@gmail.com?subject=Titre&body=Exemple" id="mail">
                  <img src="./image/mail.png" alt="Mon mail" style={{ width: '70px'}} />
                </a>
              </div>
          </div>
      </div>
      <div className='adresse'>
      </div>
    </div>
  );
};

export default Contact;
