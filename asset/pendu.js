let motSecret = '';
let motDevine = '';
let tentativesRestantes = 0;

// Fonction pour extraire le texte du PDF et initialiser le jeu du pendu
async function extractTextFromPDF(pdfPath) {
    try {
        const pdf = await pdfjsLib.getDocument(pdfPath).promise;
        const uniqueWordsSet = new Set();

        // Parcourir toutes les pages du PDF
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            let prevWord = '';

            content.items.forEach(item => {
                const words = item.str.trim().split(/\s+/);
                words.forEach(word => {
                    
                    if (!word.includes("www") && !word.includes("/") && !word.includes("\\")) {
                        
                        if (word.endsWith(",")) {
                            word = word.slice(0, -1);
                        }
                        
                        if (word.endsWith(".")) {
                            word = word.slice(0, -1);
                        }
                        
                        if (word.endsWith(")")) {
                            word = word.slice(0, -1);
                        }
                        // Supprimer "[" et "]"
                        word = word.replace(/[\[\]]/g, '');

                       
                        if (!word.startsWith("(")) {
                           
                            if (!word.includes("http")) {

                                if (!/[A-Z]/.test(word)) {
                                    
                                    if (!/\d/.test(word) && !/^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(word) &&
                                        !/^p\./i.test(word) && !/\([^)]*\)/.test(word) &&
                                        word.length >= 5) {
                                        uniqueWordsSet.add(word.toLowerCase()); // Ajouter le mot (en minuscules) au set
                                    }
                                }
                            }
                        }
                    }
                });
            });
        }

       
        const uniqueWordsArray = Array.from(uniqueWordsSet).sort();

        // Afficher les mots par ordre alphanumérique dans la console
        console.log(uniqueWordsArray);

        // Afficher le nombre total de mots
        console.log(`Nombre total de mots : ${uniqueWordsArray.length}`);

        
        init(uniqueWordsArray);
    } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'extraction du texte du PDF:', error);
    }
}

// Fonction pour choisir un mot aléatoire dans la liste
function choisirMot(uniqueWordsArray) {
    return uniqueWordsArray[Math.floor(Math.random() * uniqueWordsArray.length)];
}

// Fonction pour initialiser le jeu
// Fonction pour initialiser le jeu
function init(uniqueWordsArray) {
    motSecret = choisirMot(uniqueWordsArray);
    motDevine = motSecret.split('').map(letter => '_').join(' '); 
    tentativesRestantes = 7;

    // Afficher le mot deviné et le nombre de tentatives restantes
    document.getElementById('mot-devine').textContent = motDevine;
    document.getElementById('tentatives-restantes').textContent = `Tentatives restantes : ${tentativesRestantes}`;

    // Ajouter les lettres autorisées dans la partie droite
    const lettresAutoriseesContainer = document.querySelector('.lettres-autorisees-container');
    // Codes ASCII pour les lettres minuscules
    for (let i = 97; i <= 122; i++) {
        const lettre = String.fromCharCode(i);
        ajouterLettre(lettresAutoriseesContainer, lettre);
    }
    // Lettres accentuées en français
    const lettresAccentuees = ['â', 'ç', 'é', 'è', 'ê', 'ë', 'î', 'ï', '-', '\'', 'ô', 'û', 'ù', 'ü', 'ÿ', 'æ', 'œ'];
    lettresAccentuees.forEach(lettre => {
        ajouterLettre(lettresAutoriseesContainer, lettre);
    });
}


// Fonction pour ajouter une lettre à la liste des lettres autorisées
function ajouterLettre(container, lettre) {
    const lettreElement = document.createElement('div');
    lettreElement.textContent = lettre;
    lettreElement.classList.add('lettre');
    lettreElement.addEventListener('click', function() {
        if (!lettreElement.classList.contains('lettre-selectionnee')) {
            verifierLettre(lettre);
            lettreElement.classList.add('lettre-selectionnee');
        }
    });
    container.appendChild(lettreElement);
}

// Fonction pour vérifier si une lettre est présente dans le mot secret
function verifierLettre(lettre) {
    if (motDevine.replace(/\s/g, '') === motSecret || tentativesRestantes === 0) {
        return; 
    }
    // Vérifier si le joueur a épuisé toutes ses tentatives
    if (tentativesRestantes === 0) {
        afficherMotSecretAvecLettresManquantesEnRouge();
        return; 
    }

   
    let lettreElement = document.querySelector(`.lettre[data-lettre="${lettre}"]`);
    if (lettreElement) {
        lettreElement.style.backgroundColor = 'aqua';
    }

    // Vérifier si la lettre a déjà été essayée
    if (motDevine.includes(lettre)) {
        return; 
    }

    // Vérifier si la lettre est présente dans le mot secret
    let lettreTrouvee = false;
    for (let i = 0; i < motSecret.length; i++) {
        if (motSecret[i] === lettre) {
            lettreTrouvee = true;
            motDevine = motDevine.substring(0, i * 2) + lettre + motDevine.substring(i * 2 + 1);
        }
    }

    // Si la lettre n'a pas été trouvée, décrémenter le nombre de tentatives restantes
    if (!lettreTrouvee) {
        tentativesRestantes--;
        document.getElementById('tentatives-restantes').textContent = `Tentatives restantes : ${tentativesRestantes}`;
    }

    // Mettre à jour le mot deviné en remplaçant les lettres non trouvées par des underscores
    let motAffiche = '';
    for (let i = 0; i < motSecret.length; i++) {
        if (motDevine[i * 2] !== '_') {
            motAffiche += `<span>${motDevine[i * 2]}</span> `;
        } else {
            if (lettreTrouvee) {
                motAffiche += '_ ';
            } else {
                // Si la lettre n'a pas été trouvée et que les tentatives sont épuisées, afficher la lettre en rouge
                if (tentativesRestantes === 0) {
                    motAffiche += `<span class="lettre-non-trouvee">${motSecret[i]}</span> `;
                } else {
                    motAffiche += '_ ';
                }
            }
        }
    }

    // Mettre à jour l'affichage du mot deviné
    document.getElementById('mot-devine').innerHTML = motAffiche.trim();

    // Vérifier si le joueur a trouvé tous les caractères du mot secret
    if (motAffiche.replace(/\s/g, '') === motSecret) {
        gererVictoire();
    } else if (tentativesRestantes === 0) {
        afficherMotSecretAvecLettresManquantesEnRouge();
    }

    verifierMotTrouve();
}

// Fonction pour afficher le mot secret avec les lettres manquantes en orange
function afficherMotSecretAvecLettresManquantesEnRouge() {
    // Afficher l'image en arrière-plan
    const backgroundImage = document.getElementById('background-image');
    backgroundImage.style.display = 'block';
    let motAffiche = '';
    for (let i = 0; i < motSecret.length; i++) {
        if (motDevine[i * 2] !== '_') {
            // La lettre a été trouvée, donc l'afficher normalement
            motAffiche += `<span>${motDevine[i * 2]}</span> `;
        } else {
            // La lettre n'a pas été trouvée, donc l'afficher en orange
            motAffiche += `<span class="lettre-non-trouvee">${motSecret[i]}</span> `;
        }
    }
    // Mettre à jour l'affichage du mot deviné
    document.getElementById('mot-devine').innerHTML = motAffiche.trim();
}

// Fonction pour vérifier si le joueur a trouvé le mot
function verifierMotTrouve() {
    if (motDevine.replace(/\s/g, '') === motSecret) {
        // Appeler la fonction pour gérer la victoire
        gererVictoire();
    }
}

// Fonction pour gérer la victoire du joueur
function gererVictoire() {
    document.getElementById('mot-devine').textContent = motSecret;
    setTimeout(function() {
        const video = document.getElementById('videoPlayer');
        video.style.display = 'block'; 
        video.play();

        setTimeout(function() {
            // Fondu
            const fonduDuration = 2;
            const fadeOutInterval = 50; 
            const fadeOutSteps = fonduDuration * 1000 / fadeOutInterval;
            let currentStep = 0;

            const fadeOutIntervalId = setInterval(function() {
                currentStep++;
                const opacity = 1 - (currentStep / fadeOutSteps);
                video.style.opacity = opacity;
                if (currentStep >= fadeOutSteps) {
                    clearInterval(fadeOutIntervalId);
                    video.style.display = 'none';
                }
            }, fadeOutInterval);
        }, 5000); 
    }, 500);
}


// Appeler la fonction extractTextFromPDF pour extraire le texte du PDF et initialiser le jeu du pendu
extractTextFromPDF('../pdf/test.pdf');
