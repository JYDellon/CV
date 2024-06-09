import React, { useState, useEffect } from 'react';
import './ModaleMemory.css';


const ModaleMemory = ({ onClose }) => {
const [gameInitialized, setGameInitialized] = useState(false);


    useEffect(() => {
        initialisation();        
        setGameInitialized(true);
    }, [gameInitialized]);


var vu = 0;
var valeur2 = [0,0,0,0,0,0,0,0,0,0,0];
var tPair   = [0,0,0,0,0,0];
var valeur  = [0,0,0,0,0,0,0,0,0,0,0];
var nbreCards=10;
var compar  = [0,0,0];
var couleur = [0,0,0];
var cpt=0;
var check = new Array(11).fill(false);
var NombreDeCoup=0;
var record="";
var total=0;


function memory(nbre){

    var img     = [0,document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img')];
    var tImages = [ "./image/1.png", "./image/2.png", "./image/3.png", "./image/4.png", "./image/5.png","./image/dos.png"];
    var cardi    = [document.getElementById("card"+1),document.getElementById("card"+2),document.getElementById("card"+3),document.getElementById("card"+4),document.getElementById("card"+5),document.getElementById("card"+6),document.getElementById("card"+7),document.getElementById("card"+8),document.getElementById("card"+9),document.getElementById("card"+10),document.getElementById("card"+11)];
//---------------------------------------decouvre 2 cartes---------------------------------------------------
        if (nbre==1 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            cardi[nbre] = document.getElementById("card"+nbre);
            cardi[nbre].innerHTML = " ";
            cardi[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre = 0;
        }else if (nbre == 2 && vu < 2 && check[nbre] == false){
            vu++;
            cpt++;
            
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            cardi[nbre] = document.getElementById("card"+nbre);
            cardi[nbre].innerHTML = " ";
            cardi[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre = 0;
        }else if (nbre == 3 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            cardi[nbre] = document.getElementById("card"+nbre);
            cardi[nbre].innerHTML = " "; 
            cardi[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre = 0;
        }else if (nbre==4 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            cardi[nbre] = document.getElementById("card"+nbre);
            cardi[nbre].innerHTML = " "; 
            cardi[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre = 0;
        }else if (nbre==5 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt]=nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            cardi[nbre] = document.getElementById("card"+nbre);
            cardi[nbre].innerHTML = " ";
            cardi[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre = 0;
        }else if (nbre==6 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt]=nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            cardi[nbre] = document.getElementById("card"+nbre);
            cardi[nbre].innerHTML = " "; 
            cardi[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre = 0;
        }else if (nbre==7 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt]  =nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            cardi[nbre] = document.getElementById("card"+nbre);
            cardi[nbre].innerHTML = " "; 
            cardi[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre = 0;
        }else if (nbre==8 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            cardi[nbre] = document.getElementById("card"+nbre);
            cardi[nbre].innerHTML = " "; 
            cardi[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre = 0;
        }else if (nbre==9 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            cardi[nbre] = document.getElementById("card"+nbre);
            cardi[nbre].innerHTML = " "; 
            cardi[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre = 0;
        }else if (nbre==10 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            cardi[nbre] = document.getElementById("card"+nbre);
            cardi[nbre].innerHTML = " "; 
            cardi[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre = 0;
        }
//-------------------------------Si les couleurs de s cartes sont identiques --------------------------------      
    if (couleur[1]==couleur[2] && vu==2){
    
        setTimeout(tempo2,400,compar[1]-1,compar[2]-1)
            
            
            total++;
            NombreDeCoup++
            document.getElementById("result").textContent=NombreDeCoup;
            //------------------------------Enregistrement du meilleur score--------------------------------
            if (total== 5) {
                if(localStorage.getItem('Record')==null || localStorage.getItem('Record') > NombreDeCoup){
                    localStorage.setItem("Record",NombreDeCoup);
                }
            }
            document.getElementById("result2").textContent=localStorage.getItem("Record");
            //----------------------------------------------------------------------------------------------
            cpt=0;
            vu=0;
            compar[1] = 0;
            compar[2] = 0;
            couleur[1]=0;
            couleur[2]=0;       
            
//------------------------------------Si les couleurs sont différentes---------------------------------------          
    }else if (couleur[1]!=couleur[2] && vu==2){       
              
        setTimeout(tempo,400,compar[1],compar[2])

            NombreDeCoup++
            document.getElementById("result").textContent=NombreDeCoup;
            resetComparison();
            cpt=0;
            vu=0;
            compar[1] = 0;
            compar[2] = 0;
            couleur[1]=0;
            couleur[2]=0;
            check = new Array(11).fill(false);
    }
}

function resetComparison() {
    cpt = 0;
    vu = 0;
    compar = [0, 0, 0];
    couleur = [0, 0, 0];
    check.fill(false);
}
function tempo(x,y){
 
    var img     = [0,document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img')];
    var tImages = [ "./image/1.png", "./image/2.png", "./image/3.png", "./image/4.png", "./image/5.png","./image/dos.png"];
    var cardi    = [document.getElementById("card"+1),document.getElementById("card"+2),document.getElementById("card"+3),document.getElementById("card"+4),document.getElementById("card"+5),document.getElementById("card"+6),document.getElementById("card"+7),document.getElementById("card"+8),document.getElementById("card"+9),document.getElementById("card"+10),document.getElementById("card"+11)];



    img[x].src = ' ';
    img[x].src = tImages[5];
     cardi[x] = document.getElementById("card"+x);
    cardi[x].innerHTML = " ";           
    cardi[x].appendChild(img[x]);

    img[y].src = ' ';
    img[y].src = tImages[5];            
    cardi[y] = document.getElementById("card"+y);
    cardi[y].innerHTML = " ";
    cardi[y].appendChild(img[y]);

}
//---------------------------disparition des cartes identiques--------------------------------------------------------

function tempo2(x,y){
    var img     = [0,document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img')];
    var tImages = [ "./image/1.png", "./image/2.png", "./image/3.png", "./image/4.png", "./image/5.png","./image/dos.png"];
    var cardi    = [document.getElementById("card"+1),document.getElementById("card"+2),document.getElementById("card"+3),document.getElementById("card"+4),document.getElementById("card"+5),document.getElementById("card"+6),document.getElementById("card"+7),document.getElementById("card"+8),document.getElementById("card"+9),document.getElementById("card"+10),document.getElementById("card"+11)];

    cardi[x].style.visibility = "hidden";
    cardi[y].style.visibility = "hidden";
   
}

function initialisation() {
    let auPif = 0;
    let i = 0;

    tPair.fill(0);
    valeur.fill(0);
    valeur2.fill(0);
    check.fill(false);
    NombreDeCoup = 0;
    total = 0;
    document.getElementById("result").textContent = NombreDeCoup;
    document.getElementById("result2").textContent = localStorage.getItem("Record");

    for (auPif = 0; auPif < 5; auPif++) {
        while (tPair[auPif] < 2) {
            i = Math.floor(Math.random() * 10) + 1;
            if (valeur[i] === 0) {
                valeur[i]++;
                valeur2[i] = auPif;
                tPair[auPif]++;
            }
        }
    }

    for (let j = 1; j <= 10; j++) {
        const card = document.getElementById(`card${j}`);
        const img = document.createElement('img');
        img.src = "./image/dos.png";
        card.innerHTML = "";
        card.style.visibility = "visible";
        card.appendChild(img);
    }
}

const handleClose = () => {
    onClose();
  };
function nouvellePartie() {
    setGameInitialized(false);
}
 
  return (
    <>
        <div className='lui'>
                <div className="container12">
                        <div >
                                <a>
                                <button className="tpY" onClick={nouvellePartie}>
                                        NOUVELLE PARTIE
                                    </button>
                                </a>
                        </div> 
                        <div>
                                <a href="#portfolio">
                                    <button type="button" onClick={handleClose} className="portfolioY">
                                        PORTFOLIO
                                    </button>
                                </a>
                        </div>
                </div>

                <div className="container10">
                    <div className="cardi" id="card1"  onClick ={() => memory(1)} >
                        <img src="./image/dos.png" alt=""></img>
                    </div>
                    <div className="cardi" id="card2" onClick={() => memory(2)}>
                        <img src="./image/dos.png" alt="" ></img>
                    </div>
                    <div className="cardi" id="card3" onClick={() => memory(3)}>
                        <img src="./image/dos.png" alt="" ></img>
                    </div>
                    <div className="cardi" id="card4" onClick={() => memory(4)}>
                        <img src="./image/dos.png" alt="" ></img>
                    </div>
                    <div className="cardi" id="card5" onClick={() => memory(5)}>
                        <img src="./image/dos.png" alt="" ></img>
                    </div>
                </div>    

                <div className="resultat"> 
                    <div>Nombre de coups: <span id="result"></span> </div>
                    <div className="record">Record: <span id="result2"></span></div>
                </div>
                
                <div className="container11"> 
                    <div className="cardi" id="card6" onClick={() => memory(6)}>
                        <img src="./image/dos.png" alt="" ></img>
                    </div>
                    <div className="cardi" id="card7" onClick={() => memory(7)}>
                        <img src="./image/dos.png" alt="" ></img>
                    </div>
                    <div className="cardi" id="card8" onClick={() => memory(8)}>
                        <img src="./image/dos.png" alt=""></img>
                    </div>
                    <div className="cardi" id="card9" onClick={() => memory(9)}>
                        <img src="./image/dos.png" alt="" ></img>
                    </div>
                    <div className="cardi" id="card10" onClick={() => memory(10)}>
                        <img src="./image/dos.png" alt=""></img>
                    </div>
                </div> 
        </div>
    </>
  );
};

export default ModaleMemory;
