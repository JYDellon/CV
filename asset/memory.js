
//----------------------------------------------------------------------------------------------------------

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
//----------------------------------------------------------------------------------------------------------

window.onload = function initialisation (){

var auPif  = 0;
var i=0;
var nbre=0;

    for(auPif =0;auPif<5;auPif++){
        while(tPair[auPif]<2){
            i = Math.floor(Math.random() * 10)+1;
            if (valeur[i]==1){ }
            else{
                valeur[i]=valeur[i]+1;
                valeur2 [i] = auPif;
                tPair[auPif]=tPair[auPif]+1;
            }
        }
    }

    for (i=1; i<11;i++){
        console.log("carte n°: "+ i +" " +"couleur n°: " + valeur2[i]);
    }

}

//----------------------------------------------------------------------------------------------------------
function memory(nbre){

    var img     = [0,document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img')];
    var tImages = [ "../image/1.png", "../image/2.png", "../image/3.png", "../image/4.png", "../image/5.png","../image/dos.png"];
    var card    = [document.getElementById("card"+1),document.getElementById("card"+2),document.getElementById("card"+3),document.getElementById("card"+4),document.getElementById("card"+5),document.getElementById("card"+6),document.getElementById("card"+7),document.getElementById("card"+8),document.getElementById("card"+9),document.getElementById("card"+10),document.getElementById("card"+11)];

        if (nbre==1 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';img[nbre].src = tImages[valeur2[nbre]];card[nbre] = document.getElementById("card"+nbre);card[nbre].innerHTML = " "; card[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre == 0;
        }else if (nbre == 2 && vu < 2 && check[nbre] == false){
            vu++;
            cpt++;
            
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            card[nbre] = document.getElementById("card"+nbre);
            card[nbre].innerHTML = " ";
            card[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre == 0;
        }else if (nbre == 3 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            card[nbre] = document.getElementById("card"+nbre);
            card[nbre].innerHTML = " "; 
            card[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre == 0;
        }else if (nbre==4 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            card[nbre] = document.getElementById("card"+nbre);
            card[nbre].innerHTML = " "; 
            card[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre == 0;
        }else if (nbre==5 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt]=nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            card[nbre] = document.getElementById("card"+nbre);
            card[nbre].innerHTML = " ";
            card[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre == 0;
        }else if (nbre==6 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt]=nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            card[nbre] = document.getElementById("card"+nbre);
            card[nbre].innerHTML = " "; 
            card[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre == 0;
        }else if (nbre==7 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt]  =nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            card[nbre] = document.getElementById("card"+nbre);
            card[nbre].innerHTML = " "; 
            card[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre == 0;
        }else if (nbre==8 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            card[nbre] = document.getElementById("card"+nbre);
            card[nbre].innerHTML = " "; 
            card[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre == 0;
        }else if (nbre==9 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            card[nbre] = document.getElementById("card"+nbre);
            card[nbre].innerHTML = " "; 
            card[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre == 0;
        }else if (nbre==10 && vu<2 && check[nbre] == false){
            vu++;
            cpt++;
            couleur[cpt] = valeur2[nbre];
            compar[cpt] = nbre;
            img[nbre].src = ' ';
            img[nbre].src = tImages[valeur2[nbre]];
            card[nbre] = document.getElementById("card"+nbre);
            card[nbre].innerHTML = " "; 
            card[nbre].appendChild(img[nbre]);
            check[nbre] = true;
            nbre == 0;
        }
        
    if (couleur[1]==couleur[2] && vu==2){
    
        setTimeout(tempo2,400,compar[1]-1,compar[2]-1)

            NombreDeCoup++
            document.getElementById("result").textContent=NombreDeCoup; 
            cpt=0;
            vu=0;
            compar[1] = 0;
            compar[2] = 0;
            couleur[1]=0;
            couleur[2]=0;
            
        
    }else if (couleur[1]!=couleur[2] && vu==2){       
              
        setTimeout(tempo,400,compar[1],compar[2])

            NombreDeCoup++
            document.getElementById("result").textContent=NombreDeCoup; 

            cpt=0;
            vu=0;
            compar[1] = 0;
            compar[2] = 0;
            couleur[1]=0;
            couleur[2]=0;
            check = new Array(11).fill(false);
    }
}
function tempo(x,y){
 
    var img     = [0,document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img')];
    var tImages = [ "../image/1.png", "../image/2.png", "../image/3.png", "../image/4.png", "../image/5.png","../image/dos.png"];
    var card    = [document.getElementById("card"+1),document.getElementById("card"+2),document.getElementById("card"+3),document.getElementById("card"+4),document.getElementById("card"+5),document.getElementById("card"+6),document.getElementById("card"+7),document.getElementById("card"+8),document.getElementById("card"+9),document.getElementById("card"+10),document.getElementById("card"+11)];



    img[x].src = ' ';
    img[x].src = tImages[5];
     card[x] = document.getElementById("card"+x);
    card[x].innerHTML = " ";           
    card[x].appendChild(img[x]);

    img[y].src = ' ';
    img[y].src = tImages[5];            
    card[y] = document.getElementById("card"+y);
    card[y].innerHTML = " ";
    card[y].appendChild(img[y]);

}

function tempo2(x,y){
    var img     = [0,document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img')];
    var tImages = [ "../image/1.png", "../image/2.png", "../image/3.png", "../image/4.png", "../image/5.png","../image/dos.png"];
    var card    = [document.getElementById("card"+1),document.getElementById("card"+2),document.getElementById("card"+3),document.getElementById("card"+4),document.getElementById("card"+5),document.getElementById("card"+6),document.getElementById("card"+7),document.getElementById("card"+8),document.getElementById("card"+9),document.getElementById("card"+10),document.getElementById("card"+11)];

    card[x].style.visibility = "hidden";
    card[y].style.visibility = "hidden";
   
}