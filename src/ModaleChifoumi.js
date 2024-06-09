import React, { useState, useEffect } from 'react';
import './ModaleChifoumi.css';


const ModaleChifoumi = ({ onClose }) => {

        
      
    var init=1;                
    var cptUser=0;
    var cptCpu=0;



function letsGo(choix){

    var ciseauxCpu=document.getElementById('ciseauxCpu');
    var papierCpu=document.getElementById('papierCpu');
    var pierreCpu=document.getElementById('pierreCpu');
    var diable1=document.getElementById('diable1');
    var diable2=document.getElementById('diable2');
    var diable3=document.getElementById('diable3');
    var ange1=document.getElementById('ange1');
    var ange2=document.getElementById('ange2');
    var ange3=document.getElementById('ange3');
    var result3=document.getElementById('result1');
    var resultAnge=document.getElementById('resultAnge');
    var resultDiable=document.getElementById('resultDiable');
    var ciseauxUser=document.getElementById('ciseauxUser');
    var pierreUser=document.getElementById('pierreUser');
    var papierUser=document.getElementById('papierUser');

    result3.innerHTML="";
    var auPif = Math.floor(Math.random() * 3);
    // ---------------------------------------------------------------------Si le CPU choisit la pierre---------------------------------------------------------------------
    if (auPif == 0 && diable1.style.visibility === "hidden" ){
            pierreCpu.style.boxShadow = "10px 2px 10px red";
            ciseauxCpu.style.boxShadow = "none";
            papierCpu.style.boxShadow = "none";
            diable1.style.visibility = "visible";
            diable2.style.visibility = "hidden";
            diable3.style.visibility = "hidden";
            // SI l'humain choisit pierre
            if (choix == 0) {resultAnge.innerHTML= cptUser
                            result3.innerHTML="Vs"
                            resultDiable.innerHTML= cptCpu
                            ange1.style.visibility = "visible";
                            ange2.style.visibility = "hidden";
                            ange3.style.visibility = "hidden";}
            // SI l'humain choisit feuille                
            else if (choix == 1) {  cptUser++
                                    ange1.style.visibility = "hidden";
                                    ange2.style.visibility = "visible";
                                    ange3.style.visibility = "hidden";     
                                    resultAnge.innerHTML= cptUser
                                    result3.innerHTML="Vs"
                                    resultDiable.innerHTML= cptCpu
                                    }
            // SI l'humain choisit ciseaux                        
            else {  cptCpu++
                    ange1.style.visibility = "hidden";
                    ange2.style.visibility = "hidden";
                    ange3.style.visibility = "visible"; 
                    resultAnge.innerHTML= cptUser
                    result3.innerHTML="Vs"
                    resultDiable.innerHTML= cptCpu
                    }
    }               
// ---------------------------------------------------------------------Si le CPU choisit la feuille---------------------------------------------------------------------
                   
    else if (auPif == 1 && diable2.style.visibility === "hidden"){
            papierCpu.style.boxShadow = "10px 2px 10px red";
            ciseauxCpu.style.boxShadow = "none";
            pierreCpu.style.boxShadow = "none";
            diable1.style.visibility = "hidden";
            diable2.style.visibility = "visible";
            diable3.style.visibility = "hidden";
            // SI l'humain choisit pierre
            if (choix == 0) {cptCpu++
                            ange1.style.visibility = "visible";
                            ange2.style.visibility = "hidden";
                            ange3.style.visibility = "hidden";
                            resultAnge.innerHTML= cptUser
                            result3.innerHTML="Vs"
                            resultDiable.innerHTML= cptCpu
                            }
            // SI l'humain choisit feuille                  
            else if (choix == 1) {  ange1.style.visibility = "hidden";
                                    ange2.style.visibility = "visible";
                                    ange3.style.visibility = "hidden";
                                    resultAnge.innerHTML= cptUser
                                    result3.innerHTML="Vs"
                                    resultDiable.innerHTML= cptCpu
                                    }
            // SI l'humain choisit ciseaux                        
            else {  ange1.style.visibility = "hidden";
                    ange2.style.visibility = "hidden";
                    ange3.style.visibility = "visible";
                    cptUser++
                    resultAnge.innerHTML= cptUser
                    result3.innerHTML="Vs"
                    resultDiable.innerHTML= cptCpu
                    }   
// ---------------------------------------------------------------------Si le CPU choisit les ciseaux---------------------------------------------------------------------                       
    }else{  ciseauxCpu.style.boxShadow = "10px 2px 10px red";
            pierreCpu.style.boxShadow = "none";
            papierCpu.style.boxShadow = "none";
            diable1.style.visibility = "hidden";
            diable2.style.visibility = "hidden";
            diable3.style.visibility = "visible";
            // SI l'humain choisit pierre
            if (choix == 0) {ange1.style.visibility = "visible";
                            ange2.style.visibility = "hidden";
                            ange3.style.visibility = "hidden";
                            cptUser++
                            resultAnge.innerHTML= cptUser
                            result3.innerHTML="Vs"
                            resultDiable.innerHTML= cptCpu}
            // SI l'humain choisit feuille  
            else if (choix == 1) {  ange1.style.visibility = "hidden";
                                    ange2.style.visibility = "visible";
                                    ange3.style.visibility = "hidden";
                                    cptCpu++
                                    resultAnge.innerHTML= cptUser
                                    result3.innerHTML="Vs"
                                    resultDiable.innerHTML= cptCpu
                                    }
            // SI l'humain choisit ciseaux                          
            else {  resultAnge.innerHTML= cptUser
                    result3.innerHTML="Vs"
                    resultDiable.innerHTML= cptCpu
                    ange1.style.visibility = "hidden";
                    ange2.style.visibility = "hidden";
                    ange3.style.visibility = "visible";}
    }


    if (cptCpu == 5 && cptUser<5) {result3.innerHTML="Perdu";
                                    ange1.style.visibility = "hidden";
                                    ange2.style.visibility = "hidden";
                                    ange3.style.visibility = "hidden";
                                    diable1.style.visibility = "hidden";
                                    diable2.style.visibility = "hidden";
                                    diable3.style.visibility = "hidden";
                                    ciseauxCpu.style.visibility = "hidden";
                                    pierreCpu.style.visibility = "hidden";
                                    papierCpu.style.visibility = "hidden";
                                    ciseauxUser.style.visibility = "hidden";
                                    pierreUser.style.visibility = "hidden";
                                    papierUser.style.visibility = "hidden";
                                    cptCpu=0;  cptUser=0;}
   else if (cptCpu < 5 && cptUser== 5) {result3.innerHTML="Gagné";
                                    ange1.style.visibility = "hidden";
                                    ange2.style.visibility = "hidden";
                                    ange3.style.visibility = "hidden";
                                    diable1.style.visibility = "hidden";
                                    diable2.style.visibility = "hidden";
                                    diable3.style.visibility = "hidden";
                                    ciseauxCpu.style.visibility = "hidden";
                                    pierreCpu.style.visibility = "hidden";
                                    papierCpu.style.visibility = "hidden";
                                    ciseauxUser.style.visibility = "hidden";
                                    pierreUser.style.visibility = "hidden";
                                    papierUser.style.visibility = "hidden";
                                    if (localStorage.getItem("scorecpu")==null){localStorage.setItem("scorecpu", 5)}                                              
                                    if (cptCpu<localStorage.getItem("scorecpu")){localStorage.setItem("scorecpu",cptCpu);}

                                    result3.innerHTML="Meilleur score: " + "5 / " + localStorage.getItem("scorecpu") ;
                                    cptCpu=0;  cptUser=0;}


}

function initDesScores() {
    cptUser = 0;
    cptCpu = 0;
   document.getElementById('resultAnge').innerHTML = cptUser;
    document.getElementById('resultDiable').innerHTML = cptCpu;


    var cartes = document.getElementsByClassName('cardz');
    for (var i = 0; i < cartes.length; i++) {
        cartes[i].style.visibility = 'visible';
    }
}
    



    const handleClose3 = () => {
        onClose();
      };



  return (
    <>
    <div className='corps2'>

            <div className="containerZZ">
                <div >
                        <a>
                        <button className="tp20" onClick={initDesScores}>
                                NOUVELLE PARTIE
                            </button>
                        </a>
                </div> 
                <div >
                        <a href="#portfolio">
                        <button type="button" onClick={handleClose3} className="portfolio20">
                                PORTFOLIO
                            </button>
                        </a>
                </div>
            </div>
            <div className="container14">
                
                <div className="container55">
                    <div id="ange1">
                        <img src="./image/Ange.png" alt="" height="140"/>
                    </div>
                    <div id="ange2">
                        <img src="./image/Ange.png" alt="" height="140"/>
                    </div>
                    <div id="ange3">
                        <img src="./image/Ange.png" alt="" height="140"/>
                    </div>
                </div>
                <div className="container22">
                    <div id="pierreUser"  className="cardz" onClick={() => letsGo(0)}>
                        <img src="./image/pierre.jpg" alt="" width="120"/>
                    </div>
                    <div id="papierUser"  className="cardz" onClick={() => letsGo(1)}>
                        <img src="./image/feuille.jpg" alt="" width="120"/>
                    </div>
                    <div id="ciseauxUser"  className="cardz" onClick={() => letsGo(2)}>
                        <img src="./image/ciseaux.jpg" alt="" width="120"/>
                    </div>
                </div>
                <div className="container33">
                    <div id="pierreCpu" className="cardz" >
                        <img id="pierre" src="./image/pierre.jpg" alt="" width="120"/>
                    </div>
                    <div id="papierCpu" className="cardz" >
                        <img id="feuille" src="./image/feuille.jpg" alt="" width="120"/>
                    </div>
                    <div id="ciseauxCpu" className="cardz" >
                        <img id="ciseaux" src="./image/ciseaux.jpg" alt="" width="120"/>
                    </div>
                </div>
                <div className="container44">
                    <div id="diable1">
                        <img src="./image/diable.png" alt="" height="140"/>
                    </div>
                    <div id="diable2">
                        <img src="./image/diable.png" alt="" height="140"/>
                    </div>
                    <div id="diable3">
                        <img src="./image/diable.png" alt="" height="140"/>
                    </div>
                </div>
                
            </div>
            <div className="resultat200">
                <div className="affichResultatAnge">
                    <h2 id="resultAnge"></h2>
                </div>
                <div className="affichResultat">
                    <h1 id="result1"></h1> 
                    <h1 id="result2"></h1>    
                </div>
                <div className="affichResultatDiable">
                    <h2 id="resultDiable"></h2>
                </div>
            </div>
    </div>
    </>
  );
};

export default ModaleChifoumi;
