const auPif = Math.floor(Math.random() * 100);
var date= Date.now();
const cpt = 30000;
var ladate= new Date();
var s = 30;var s2=2;
var compteurCoups=0;
var trouver = new Boolean;
//------------------------------------------------------------------------------------------------------------------------------------------

onload = function initialisation (){
    var monInterval2 = setInterval(function () {
        
        if (s2==2){document.getElementById('tempo').innerHTML = "Prêt";}
        else if (s2==1){document.getElementById('tempo').innerHTML = "Partez";} 
        else if (s2<=1){
                        clearInterval(monInterval2)
                        fin = false;
                        initialisation02()}
                        s2--
        ;}, 1000);
}


//------------------------------------------------------------------------------------------------------------------------------------------

function initialisation02(){
    // lancement du compte à rebour de s=30 secondes
    document.getElementById('tempo').innerHTML=s;
    var monInterval = setInterval(function () {document.getElementById('tempo').innerHTML=s--;
                                            if (trouver == true) {clearInterval(monInterval);}
                                            if (s<10 && s>0){document.getElementById('tempo').style.color="red";
                                            }else if (s<0){
                                                            clearInterval(monInterval);                                                            
                                                          }
    }
                , 1000);
}
//------------------------------------------------------------------------------------------------------------------------------------------
function justeNbre(){
    
    
    // Enregistrement de la saisie dans l'input
    nb = document.getElementById("nbre").value
    nbre=parseInt(nb);
    // Effacement de la saisie dans l'input
    document.getElementById("nbre").value="";
    // préparation pour une nouvelle saisie sans passer par la souris ni le clavier
    document.getElementById("nbre").focus();
    compteurCoups++;

    if (s>0){
        // Si le nombre saisi est supérieur au nombre à trouver
        if (nbre < auPif){
            // Faire apparaitre la flèche qui pointe vers le haut
            document.getElementById('up').style.display = "block";  
            // Faire disparaitre la flèche qui pointe vers le bas 
            document.getElementById('down').style.display = "none";
        // Si le nombre saisi est inférieur au nombre à trouver      
        }else if (nbre > auPif){
            // Faire apparaitre la flèche qui pointe vers le bas
            document.getElementById('down').style.display = "block";
            // Faire disparaitre la flèche qui pointe vers le haut 
            document.getElementById('up').style.display = "none";
        // Si le nombre saisi est égal au nombre à trouver 
        }else if(nbre == auPif){
            // Faire disparaitre les deux flèches
            document.getElementById('up').style.display = "none";  
            document.getElementById('down').style.display = "none";  
            // afficher le résultat
            var tempsRestant = 30-s;
                document.getElementById('resultat1').innerHTML="Le " + nbre + " a été trouvé en "+ tempsRestant + "s" + " et " + compteurCoups + " coups";
            document.getElementById('resultat1').style.color="white";
            // Interdire une nouvelle saisie de nombre
            document.getElementById('nbre').readOnly = true;
            // Enregistrement du record dans le localStorage
            if((localStorage.getItem('compteurCoups') == null) || (localStorage.getItem('tempsRestant')>tempsRestant)){
                localStorage.setItem('compteurCoups',compteurCoups);
                localStorage.setItem('tempsRestant',tempsRestant);
                // Affichage du record
                document.getElementById('record').innerHTML="Record: " +  localStorage.getItem('tempsRestant') + "s" + " et " + localStorage.getItem('compteurCoups') + " coups";
                document.getElementById('record').style.color="white";
            }else{
                // Affichage du record
                document.getElementById('record').innerHTML="Record: " +  localStorage.getItem('tempsRestant') + "s" + " et " + localStorage.getItem('compteurCoups') + " coups";
                document.getElementById('record').style.color="white";
            }
            trouver = true;
        }
    }
}