const auPif = Math.floor(Math.random() * 100);
var date= Date.now();
const cpt = 30000;
var ladate= new Date();
var s = 30;
var compteurCoups=0;
//------------------------------------------------------------------------------------------------------------------------------------------

onload = function initialisation (){

    document.getElementById('tempo').innerHTML=s;
    var monInterval = setInterval(function () {document.getElementById('tempo').innerHTML=s--;
                                            if (s<10 && s>0){document.getElementById('tempo').style.color="red";
                                            }else if (s<0){
                                                            clearInterval(monInterval);
                                                          }
    }
                , 1000);
}
//------------------------------------------------------------------------------------------------------------------------------------------
function justeNbre(){   

    nb = document.getElementById("nbre").value
    nbre=parseInt(nb);
    document.getElementById("nbre").value="";
    compteurCoups++;
    document.getElementById("nbre").focus();

    if (s>0){
        if (nbre < auPif){

            document.getElementById('up').style.display = "block";   
            document.getElementById('down').style.display = "none";  
        }else if (nbre > auPif){
            document.getElementById('down').style.display = "block";
            document.getElementById('up').style.display = "none"; 
        }else if(nbre == auPif){
            document.getElementById('up').style.display = "none";  
            document.getElementById('down').style.display = "none";  
            document.getElementById('resultat1').innerHTML="BRAVO";
            document.getElementById('resultat1').style.color="white";
            var tempsRestant = 30-s;
                document.getElementById('resultat1').innerHTML="Le nombre " + nbre + " a été trouvé en "+ tempsRestant + "s" + " et " + compteurCoups + " coups";
            document.getElementById('resultat1').style.color="white";
            document.getElementById('nbre').readOnly = true;
            if((localStorage.getItem('compteurCoups') == null) || (localStorage.getItem('tempsRestant')>tempsRestant)){
                localStorage.setItem('compteurCoups',compteurCoups);
                localStorage.setItem('tempsRestant',tempsRestant);
                document.getElementById('record').innerHTML="Record: " +  localStorage.getItem('tempsRestant') + "s" + " et " + localStorage.getItem('compteurCoups') + " coups";
                document.getElementById('record').style.color="white";
            }else{
                document.getElementById('record').innerHTML="Record: " +  localStorage.getItem('tempsRestant') + "s" + " et " + localStorage.getItem('compteurCoups') + " coups";
                document.getElementById('record').style.color="white";
        }
            }
    }
}