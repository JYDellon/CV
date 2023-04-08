        
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

                if (auPif == 0 && diable1.style.visibility === "hidden" ){
                        pierreCpu.style.boxShadow = "10px 2px 10px red";
                        ciseauxCpu.style.boxShadow = "none";
                        papierCpu.style.boxShadow = "none";
                        diable1.style.visibility = "visible";
                        diable2.style.visibility = "hidden";
                        diable3.style.visibility = "hidden";
                        if (choix == 0) {resultAnge.innerHTML= cptUser
                                        result3.innerHTML="Vs"
                                        resultDiable.innerHTML= cptCpu
                                        ange1.style.visibility = "visible";
                                        ange2.style.visibility = "hidden";
                                        ange3.style.visibility = "hidden";}
                                        
                        else if (choix == 1) {  cptUser++
                                                ange1.style.visibility = "hidden";
                                                ange2.style.visibility = "visible";
                                                ange3.style.visibility = "hidden";     
                                                resultAnge.innerHTML= cptUser
                                                result3.innerHTML="Vs"
                                                resultDiable.innerHTML= cptCpu
                                                }
                                                
                        else {  cptCpu++
                                ange1.style.visibility = "hidden";
                                ange2.style.visibility = "hidden";
                                ange3.style.visibility = "visible"; 
                                resultAnge.innerHTML= cptUser
                                result3.innerHTML="Vs"
                                resultDiable.innerHTML= cptCpu
                                }
                }               
                else if (auPif == 1 && diable2.style.visibility === "hidden"){
                        papierCpu.style.boxShadow = "10px 2px 10px red";
                        ciseauxCpu.style.boxShadow = "none";
                        pierreCpu.style.boxShadow = "none";
                        diable1.style.visibility = "hidden";
                        diable2.style.visibility = "visible";
                        diable3.style.visibility = "hidden";
                        if (choix == 0) {cptCpu++
                                        ange1.style.visibility = "visible";
                                        ange2.style.visibility = "hidden";
                                        ange3.style.visibility = "hidden";
                                        resultAnge.innerHTML= cptUser
                                        result3.innerHTML="Vs"
                                        resultDiable.innerHTML= cptCpu
                                        }
                        else if (choix == 1) {  ange1.style.visibility = "hidden";
                                                ange2.style.visibility = "visible";
                                                ange3.style.visibility = "hidden";
                                                resultAnge.innerHTML= cptUser
                                                result3.innerHTML="Vs"
                                                resultDiable.innerHTML= cptCpu
                                                }
                        else {  ange1.style.visibility = "hidden";
                                ange2.style.visibility = "hidden";
                                ange3.style.visibility = "visible";
                                cptUser++
                                resultAnge.innerHTML= cptUser
                                result3.innerHTML="Vs"
                                resultDiable.innerHTML= cptCpu
                                }   
                        
                }else{  ciseauxCpu.style.boxShadow = "10px 2px 10px red";
                        pierreCpu.style.boxShadow = "none";
                        papierCpu.style.boxShadow = "none";
                        diable1.style.visibility = "hidden";
                        diable2.style.visibility = "hidden";
                        diable3.style.visibility = "visible";
                        if (choix == 0) {ange1.style.visibility = "visible";
                                        ange2.style.visibility = "hidden";
                                        ange3.style.visibility = "hidden";
                                        cptUser++
                                        resultAnge.innerHTML= cptUser
                                        result3.innerHTML="Vs"
                                        resultDiable.innerHTML= cptCpu}
                        else if (choix == 1) {  ange1.style.visibility = "hidden";
                                                ange2.style.visibility = "visible";
                                                ange3.style.visibility = "hidden";
                                                cptCpu++
                                                resultAnge.innerHTML= cptUser
                                                result3.innerHTML="Vs"
                                                resultDiable.innerHTML= cptCpu
                                                }
                                                
                        else {  resultAnge.innerHTML= cptUser
                                result3.innerHTML="Vs"
                                resultDiable.innerHTML= cptCpu
                                ange1.style.visibility = "hidden";
                                ange2.style.visibility = "hidden";
                                ange3.style.visibility = "visible";}
                }


                if (cptCpu == 5 && cptUser<5) {result3.innerHTML="Perdu";
                                                cptCpu=0;  cptUser=0;}
               else if (cptCpu < 5 && cptUser== 5) {result3.innerHTML="Gagné";
                                                    cptCpu=0;  cptUser=0;}
                



}






