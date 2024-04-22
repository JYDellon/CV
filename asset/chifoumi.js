        
      
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
                var result3=document.getElementById('result1');
                var resultAnge=document.getElementById('resultAnge');
                var resultDiable=document.getElementById('resultDiable');
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






