var logoutBtn = document.getElementById("logoutBtn");
var loginBtn  = document.getElementById("loginBtn");
var signupBtn = document.getElementById("signupBtn");
var scoreDisplay;
var loginUsername;var connected;

if (localStorage.getItem("MM_connected") == undefined || localStorage.getItem("MM_connected") == "false" ||localStorage.getItem("MM_connected") == false ){
    connected = false;
    localStorage.setItem('MM_connected',false);
    localStorage.setItem('loginUsername',"nonInscrits");
    loginUsername = localStorage.getItem('loginUsername');   
            
            var userData = {
                    email: "",
                    password: "",
                    score: 0
                };

            // Convertir l'objet en chaîne JSON
            var userDataJSON = JSON.stringify(userData);

            // Enregistrer l'objet dans le localStorage avec une clé spécifique
            localStorage.setItem('userData', userDataJSON);    

}else {
    connected = localStorage.getItem('MM_connected');loginUsername=localStorage.getItem('loginUsername');

   scoresBtn.style.display="block";
    logoutBtn.style.display="block";
    loginBtn.style.display="none";
    signupBtn.style.display="none";

}

bienvenue();

azer.style.display = "none";

// Obtenez le bouton pour ouvrir le modal
var rulesBtn = document.getElementById("rules-button");

// Obtenez le modal
var modal = document.getElementById("rules1");

// Obtenez le bouton de fermeture du modal
var closeBtn = document.getElementsByClassName("close")[0];

// Lorsque l'utilisateur clique sur le bouton, ouvrez le modal
rulesBtn.onclick = function() {
    modal.style.display = "block";
}

// Lorsque l'utilisateur clique sur le bouton de fermeture, fermez le modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Lorsque l'utilisateur clique en dehors du modal, fermez-le
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function displayPlayersAdmin() {
    var players = getAllPlayers(); // Récupérer tous les joueurs enregistrés

    // Trier les joueurs par pseudo croissant
    players.sort(function(a, b) {

        // Comparer les pseudos en ignorant la casse
        var usernameA = a.username.toLowerCase();
        var usernameB = b.username.toLowerCase();
        if (usernameA < usernameB) return -1;
        if (usernameA > usernameB) return 1;
        return 0;
    });

    var modalBody = document.querySelector("#panelAdminForm .modal-body"); // Sélectionner le corps du modal
    var tableHTML = `<table id='players-table' class='table'>
                        <thead>
                            <tr>
                                <th scope='col'>PSEUDO</th>
                                <th scope='col'>SCORE</th>
                                <th scope='col'>MAIL</th>
                                <th scope='col'>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>`; // Entête du tableau

    // Parcourir tous les joueurs et leurs scores
    players.forEach(function(player) {

        scoreDisplay = player.score !== undefined && player.score !== null && (player.score !== 7200 || player.score !== 7200) ? player.score : "N'a pas encore joué";
        console.log('scoreDisplay',scoreDisplay);

        // Ajouter chaque joueur, son score, son email, son mot de passe et les boutons d'action au contenu du tableau
        tableHTML += `<tr>
                        <td class='aqua'>${player.username}</td>
                        <td class='aqua'>${player.score}</td>
                        <td class='aqua'>${player.email}</td>
                        <td class='aqua xxx'>
                            <button onclick='deletePlayer("${player.username}")' class='btn btn-danger'>Supprimer</button>
                            <button onclick='editPlayerAdmin("${player.username}", ${player.score}, "${player.email}")' class='btn btn-primary'>Modifier</button>
                        </td>
                    </tr>`;
    });

    tableHTML += `</tbody></table>`; // Fermeture du tableau
    modalBody.innerHTML = tableHTML; // Afficher le tableau dans le corps du modal
}

scoresBtn.addEventListener("click", function() {
    crownForm.style.display = "block";
    displayPlayers();
})

// Ajout d'un gestionnaire d'événements pour l'événement "submit" du formulaire
signupForm.addEventListener('submit', function(event) {
    // Empêcher le comportement par défaut du formulaire qui est de recharger la page
    event.preventDefault();

    // Récupération des valeurs saisies dans les champs du formulaire
    var username = document.getElementById('usernameSignup').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Vérification si les champs sont vides
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Vérification de la validité de l'adresse email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Veuillez saisir une adresse email valide.');
        return;
    }

    // Vérification si le mot de passe et sa confirmation correspondent
    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
    }

    // Si les champs sont remplis et valides, vous pouvez passer à l'étape suivante, par exemple, vérifier l'authentification
    
    storeCredentials(username, email, password, score);

    checkCredentials(username, password);
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    // authenticate(username, email, password);
});


document.getElementById('closeBtn').addEventListener('click', function() {
    // Fermer le formulaire en masquant son conteneur
    document.getElementById('signupForm').style.display = 'none';
});

var loginBtn = document.getElementById("loginBtn");



loginBtn.addEventListener("click", function() {
    loginForm.style.display = "block";
})

function changer3(){
    if (eye){
        document.getElementById("loginPassword").setAttribute("type","text");
        document.getElementById("eye3").src="../image/eye2.png";  
        eye=false;
    }else{
        document.getElementById("loginPassword").setAttribute("type","password");
        document.getElementById("eye3").src="../image/eye1.png";
        eye=true;
    }

}

var loginForm = document.getElementById("loginForm");

// Ajout d'un gestionnaire d'événements pour l'événement "submit" du formulaire de connexion
loginForm.addEventListener('submit', function(event) {
    // Empêcher le comportement par défaut du formulaire qui est de recharger la page
    event.preventDefault();

    // Récupération des valeurs saisies dans les champs du formulaire de connexion
    loginUsername = document.getElementById('username').value; 
    // Récupérer la valeur du champ de nom d'utilisateur
    var loginPassword = document.getElementById('loginPassword').value; // Récupérer la valeur du champ de mot de passe
    localStorage.setItem('loginUsername',loginUsername);
    localStorage.setItem('loginPassword',loginPassword);
    localStorage.setItem('MM_connected',connected);
if(document.getElementById('username').value=="Admin" && document.getElementById('loginPassword').value=="root"){
        
        loginForm.style.display="none";
        azer.style.display = "block";
        logoutBtn.style.display="none";
    localStorage.setItem('loginUsername',"nonInscrits");
        displayPlayersAdmin();
}else{
    scoresBtn.style.display="block";
    loginForm.style.display="none";
    azer.style.display = "none";
    logoutBtn.style.display="block";
    if (localStorage.getItem('MM_'+ document.getElementById('username').value)){
    bienvenue();
    }else{
        localStorage.setItem('loginUsername','nonInscrits');
        loginUsername=localStorage.getItem('loginUsername');
        bienvenue();
    }

         // Utiliser le nom d'utilisateur pour récupérer les informations de l'utilisateur depuis le localStorage
        var userDataJSON = localStorage.getItem("MM_" + loginUsername);

        // Vérifier si les informations de l'utilisateur existent dans le localStorage
        if (userDataJSON) {
            // Si elles existent, les convertir en objet JavaScript
            var userData = JSON.parse(userDataJSON);

            // Récupérer l'email et le score de l'utilisateur
            var userEmail = userData.email;
            var userScore = userData.score;

            // Utilisez userEmail et userScore comme nécessaire dans votre application
            var userData = {
                // username: loginUsername,
                email: userEmail,
                password: loginPassword,
                score: userScore
            };
        } else {
            // Si les informations de l'utilisateur n'existent pas dans le localStorage, affichez un message d'erreur
            connected=true;
            localStorage.setItem('MM_connected',connected);
        }
        loginUsername=document.getElementById('username').value;
        loginPassword=document.getElementById('loginPassword').value;
        login(loginUsername, loginPassword);

}
  
});

// Fonction pour vérifier l'authentification en utilisant les informations saisies dans le formulaire de connexion
// Fonction pour gérer la tentative de connexion de l'utilisateur


//------------------------------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', initUserForm );
// Définition de userData en dehors de la fonction handleSubmit
var userData = null;

eye=true;
var score=7200;
var AncienPseudo = "";
var username="";
var timerElement = document.getElementById('timer');
var seconds = 0;
var timer;
// Tableau pour stocker les tirages du joueur
var playerGuesses = [];

// Variable globale pour suivre l'état de sélection des couleurs
var colorSelectionEnabled = true;
var correctColorAndPosition;
var ligneActive=0;


// Sélection du tableau principal du jeu
var gameTable = document.getElementById("game-table");

// Définir le nombre total de coups disponibles
var totalCoups = 10; // Par exemple, 10 coups au total


// Déclaration et initialisation de la variable gamePaused au niveau global
var gamePaused = false;

// Initialiser le compteur de cellules remplies
var filledCells = 0;

// Sélection de la div contenant le tableau de jeu
var gameBoard = document.getElementById("game-board");

// Création de l'élément de tableau
var table = document.createElement("table");
table.id = "game-table"; // Ajout d'un ID au tableau pour référencement futur

// Sélection du bouton de soumission
var submitBtn = document.getElementById("submitBtn");

// Appel de la fonction pour générer le tirage secret au début du jeu
var secretCode = generateSecretCode();

//-------------------------------------------------------------------------------------------------------------

function initUserForm() {
    // Sélectionner les champs des formulaires de connexion et d'inscription
    var loginUsernameField = document.getElementById('username');
    var loginPasswordField = document.getElementById('loginPassword');
    var signupUsernameField = document.getElementById('usernameSignup');
    var emailField = document.getElementById('email');
    var passwordField = document.getElementById('password');
    var confirmPasswordField = document.getElementById('confirmPassword');

    // Réinitialiser les valeurs des champs
    loginUsernameField.value = '';
    loginPasswordField.value = '';
    signupUsernameField.value = '';
    emailField.value = '';
    passwordField.value = '';
    confirmPasswordField.value = '';
};

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function updateTimer() {
    seconds++;

    var formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    timerElement.textContent = formattedSeconds;
}
// Fonction pour générer un tirage secret
function generateSecretCode() {
    var colors = ['aqua', 'blue', 'green', 'yellow', 'orange', 'purple'];
    var secretCode = [];

    // Générer aléatoirement les couleurs et les stocker dans le tableau secretCode
    for (var i = 0; i < 4; i++) {
        var randomIndex = Math.floor(Math.random() * colors.length);
        secretCode.push(colors[randomIndex]);
    }

    return secretCode;
}

// Fonction pour récupérer les couleurs depuis la dernière ligne pleine de couleur du jeu
function getLastFilledRowColors() {
    var rows = document.querySelectorAll("#game-board tr");
    for (var i = rows.length - 2; i >= 0; i--) {
        var cells = rows[i].querySelectorAll("td");
        var isRowFilled = true;
        var rowColors = [];

        for (var j = 4; j < 8; j++) {
            if (!cells[j].style.backgroundColor) {
                isRowFilled = false;
                break;
            } else {
                rowColors.push(cells[j].style.backgroundColor);
            }
        }

        if (isRowFilled) {
            return rowColors;
        }
    }

    return null;
}

// Fonction pour éditer un joueur dans la modal panelAdminForm
function editPlayerAdmin(username, score, email,password) {
    // Mettre à jour les champs de la nouvelle fenêtre modale avec les informations du joueur
    document.querySelector("#edit-username").value = username;
    AncienPseudo=username;
    document.querySelector("#edit-score").value = parseInt(score);
    document.querySelector("#edit-email").value = email;
    // document.querySelector("#edit-password").value=password
    // Afficher la nouvelle fenêtre modale
    // Pour masquer le modal
document.getElementById('editPlayerModal').style.display = "block";

}

// Fonction pour obtenir l'indice de la prochaine ligne vide
function getNextEmptyRow(startRow) {
    var rows = document.querySelectorAll("#game-board tr");

    // Parcourir les lignes du tableau à partir de la première ligne
    for (var rowIndex = startRow; rowIndex < rows.length; rowIndex++) {
        var cells = rows[rowIndex].querySelectorAll("td");

        // Vérifier si toutes les cellules de la ligne sont pleines
        var isRowFilled = true;
        for (var i = 4; i < 8; i++) {
            if (!cells[i].style.backgroundColor) {
                isRowFilled = false;
                break;
            }
        }

        // Si la ligne est pleine, passer à la ligne suivante
        if (isRowFilled) {
            continue;
        }

        // Retourner l'indice de la première ligne vide
        return rowIndex;
    }

    // Retourner null si aucune ligne vide n'est trouvée
    return null;
}

// Fonction pour comparer le tirage du joueur avec le tirage secret
function compareGuessWithSecret(guess) {
    correctColorAndPosition = 0;
    var correctColorOnly = 0;

    // Créer des copies des tirages pour éviter de modifier les originaux
    var secretCodeCopy = [...secretCode];
    var guessCopy = [...guess];

    // Vérifier d'abord les couleurs correctes à la bonne position
    for (var i = 0; i < guess.length; i++) {
        if (guess[i] === secretCode[i]) {
            correctColorAndPosition++;

            // Si une couleur est correcte à la bonne position, la retirer des copies
            secretCodeCopy[i] = null;
            guessCopy[i] = null;
        }
    }

    // Ensuite, vérifier les couleurs correctes mais mal placées
    for (var i = 0; i < guessCopy.length; i++) {
        if (guessCopy[i] !== null) {
            var secretIndex = secretCodeCopy.indexOf(guessCopy[i]);
            if (secretIndex !== -1) {
                correctColorOnly++;
                // Si une couleur est correcte mais mal placée, la retirer des copies
                secretCodeCopy[secretIndex] = null;
                guessCopy[i] = null;
            }
        }
    }

    // Retourner le résultat de la comparaison
    return {
        correctColorAndPosition: correctColorAndPosition,
        correctColorOnly: correctColorOnly
    };
}

function handleColorClick(event) {
    // Si la sélection de couleurs est désactivée, le jeu est en pause ou le joueur a deviné toutes les couleurs et positions correctes, ne rien faire
    if (!colorSelectionEnabled || gamePaused || correctColorAndPosition === 4) {
        
        return;
    }

    var selectedColor = event.target.style.backgroundColor; // Récupérer la couleur du cercle cliqué
    var nextEmptyRowIndex = getNextEmptyRow(0); // Recherche de la prochaine ligne vide à partir de la première ligne

    if (nextEmptyRowIndex === null) {
        // Aucune ligne vide n'a été trouvée, donc ne rien faire
        return;
    }

    // Ligne vide trouvée, remplir la première cellule vide avec la couleur sélectionnée
    var cells = document.querySelectorAll("#game-board tr")[nextEmptyRowIndex].querySelectorAll("td");

    for (var i = 4; i < 8; i++) {
        var cell = cells[i];
        if (!cell.style.backgroundColor) {
            cell.style.backgroundColor = selectedColor;
            filledCells++; // Incrémenter le compteur de cellules remplies

            // Ajouter un gestionnaire d'événements de clic à la cellule
            cell.addEventListener("click", handleCellClick);

            break;
        }
    }

    // Vérifier si toutes les cellules de la ligne sont désormais remplies
    if (filledCells === 4) {
        // Désactiver la sélection de couleurs une fois que les quatre couleurs ont été sélectionnées
        colorSelectionEnabled = false;
    }
}

// Fonction pour gérer le clic sur les cellules actives
function handleCellClick(event) {
    var selectedCell = event.target;

    // Vérifier si la cellule cliquée a déjà une couleur
    if (selectedCell.style.backgroundColor) {
        // Récupérer l'indice de la ligne de la cellule cliquée
        var rowIndex = selectedCell.parentNode.rowIndex;

        // Récupérer l'indice de la prochaine ligne vide
        var nextEmptyRowIndex = getNextEmptyRow(0) - 1;
        // Vérifier si la cellule cliquée est dans la ligne active moins un
        if (rowIndex === ligneActive) {
            // Si la cellule a une couleur et qu'elle est dans la ligne active moins un, effacer la couleur
            selectedCell.style.backgroundColor = "";
            filledCells--;

            // Activer à nouveau la sélection de couleurs si toutes les cellules ne sont pas remplies
            if (filledCells < 4) {
                colorSelectionEnabled = true;
            }
        }
    }
}

function getPlayerByUsername(username) {
    // Récupérer les données du joueur en utilisant la clé "MM_" + username dans localStorage
    var playerData = localStorage.getItem("MM_" + username);
    // Vérifier si les données existent
    if (playerData !== null) {
        if(AncienPseudo==username){
            return true
        }else{
            return false
        }

    }else{
        return true
    }
}

function handleSubmit(nextRow) {

// Vérifier si userData est null avant de l'utiliser
if (userData !== null) {
    // Récupérer les couleurs du tirage du joueur depuis la première ligne du tableau de jeu
    var guess = [];
    var cells = nextRow.querySelectorAll("td");
    for (var i = 4; i < 8; i++) { // Commencer à la 5ème cellule et s'arrêter à la 8ème
        var color = cells[i].style.backgroundColor;
        if (!color) {
            return; // Sortir de la fonction si une couleur manque
        }
        guess.push(color);
    }

    // Ajouter le tirage du joueur au tableau des tirages
    playerGuesses.push(guess);

    // Comparer le tirage du joueur avec le tirage secret
    var result = compareGuessWithSecret(guess);

    // Affichage des pions écrus pour les couleurs bien placées
    for (var k = 0; k < result.correctColorAndPosition; k++) {
        var cellIndex = 3 - k; // Calculer l'indice de cellule en commençant par la fin de la ligne
        var cell = nextRow.cells[cellIndex]; // Sélectionner la cellule correspondante
        var disc = document.createElement("div");
        disc.classList.add("color-disc", "correct-color-position"); // Ajouter la classe correct-color-position
        disc.style.width = "20px";
        disc.style.height = "20px";
        disc.style.borderRadius = "50%";
        disc.style.margin = "auto";
        cell.appendChild(disc); // Ajouter le pion à la cellule
    }

    // Affichage des pions rouges pour les couleurs mal placées
    for (var k = 0; k < result.correctColorOnly; k++) {
        var cellIndex = 8 + k; // Calculer l'indice de cellule à partir de la 8ème cellule
        var cell = nextRow.cells[cellIndex]; // Sélectionner la cellule correspondante
        var disc = document.createElement("div");
        disc.classList.add("color-disc");
        disc.style.width = "20px";
        disc.style.height = "20px";
        disc.style.borderRadius = "50%";
        disc.style.margin = "auto";
        disc.style.backgroundColor = "red"; // Couleur rouge
        disc.style.border = "2px solid black"; // Bordure noire
        cell.appendChild(disc); // Ajouter le pion à la cellule
    }
    ligneActive++;
    // Masquer les tableaux de pions
    var discTables = document.querySelectorAll(".color-disc-table");
    discTables.forEach(function(table) {
        table.classList.add("invisible");
    });

    // Réactiver la sélection de couleurs une fois que le tirage du joueur est traité
    colorSelectionEnabled = true;

    // Appel de la fonction pour récupérer les couleurs depuis la dernière ligne pleine de couleur du jeu
    var lastFilledRowColors = getLastFilledRowColors();

    // Si la soumission est effectuée avec succès et qu'il reste des lignes disponibles, passer à la ligne suivante
    gamePaused = false;
    filledCells = 0;

    // Initialisation de userData avec des valeurs fictives
    var userData = {
        username: "utilisateur123",
        email: "utilisateur123@example.com",
        password: "motdepasse123",
        score: 0 // Vous pouvez initialiser le score à 0 ou à une autre valeur par défaut
    };

    // Enregistrement de userData dans le localStorage lors de l'inscription ou de la connexion de l'utilisateur
    localStorage.setItem("userData", JSON.stringify(userData));

    // Récupération de userData depuis le localStorage lorsque vous en avez besoin
    var storedUserData = JSON.parse(localStorage.getItem("userData"));

    
    // Vérifier si le joueur a gagné
    if (result.correctColorAndPosition === 4) {
    // Afficher le tirage mystère
    displaySecretCode(secretCode, result);

    // Lancer la vidéo si le joueur a gagné

   stopTimer();

    var newGameBtn = document.getElementById("newGameBtn");
    newGameBtn.disabled = false;

                // Calcul du temps écoulé depuis le début du jeu jusqu'à la soumission du tirage
                // Récupération de la chaîne JSON du localStorage
                username=document.getElementById('username').value;
                var userDataString = localStorage.getItem("MM_" + username);

                // Analyse de la chaîne JSON en tant qu'objet JavaScript
                var userData = JSON.parse(userDataString);


                // Accès aux différentes propriétés de l'objet userData

                        if ( (userData !== null && seconds < userData.score) ){
                            userData.score = seconds;
                            var updatedUserDataString = JSON.stringify(userData);
                            // Enregistrement de la chaîne JSON mise à jour dans le localStorage
                            localStorage.setItem("MM_" + username, updatedUserDataString);
                        }

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
                        }else // Si le joueur a soumis 10 tentatives et n'a pas réussi à deviner les 4 couleurs correctes, afficher un message de fin de jeu
                            if (playerGuesses.length === totalCoups && result.correctColorAndPosition !== 4) {
                                colorSelectionEnabled = false; // Désactiver la sélection de couleurs
                                
                                // Afficher le tirage mystère si le joueur a perdu
                                displaySecretCode(secretCode, result);
                                // Après avoir vérifié que le joueur a perdu
                            var perduImage = document.getElementById("perduImage");
                            perduImage.style.display = "block";
                            perduImage.classList.add("fade-out");

                            // Attendre 5 secondes avant de masquer l'image
                            setTimeout(function() {
                                perduImage.style.display = "none";
                            }, 10000); 
                            var newGameBtn = document.getElementById("newGameBtn");
                            newGameBtn.disabled = false;

                            }
   
}else{

}
 }

function deletePlayer(username) {
    
    // Confirmation de la suppression du joueur
    var confirmation = confirm("Voulez-vous continuer ?");
    
    // Si l'utilisateur confirme la suppression
    if (confirmation) {
        // Supprimer le joueur du stockage local
        localStorage.removeItem("MM_" + username);

        // Rafraîchir le contenu du panelAdminForm
        displayPlayersAdmin();
    } else {
        // Si l'utilisateur annule la suppression, ne rien faire
        alert("Modification annulée.");
    }
}

// Fonction pour afficher le tirage mystère
function displaySecretCode(secretCode, result = null) {
    var secretCodeRow = document.getElementById('secret-code-table').querySelector('tr');

    // Réinitialiser le contenu du tableau secret-code-table
    secretCodeRow.innerHTML = '';

    // Afficher le code secret uniquement si le joueur gagne ou perd
    if (result && (result.correctColorAndPosition === 4 || playerGuesses.length === totalCoups)) {
        // Boucle pour créer les cellules de la ligne du tirage mystère
        for (var i = 0; i < 4; i++) {
            var cell = document.createElement("td");
            cell.style.backgroundColor = secretCode[i]; // Utiliser la couleur du tirage secret
            secretCodeRow.appendChild(cell);
        }
        stopTimer();
    } else {
        // Afficher le contenu précédent (le tirage secret initial)
        hideSecretCode(); // Assurez-vous que le tirage secret est caché au début de chaque nouvelle partie
    }
}

// Fonction pour cacher le tirage secret
// Fonction pour cacher le tirage secret et réinitialiser ses cellules à la couleur noire
function hideSecretCode() {
    var secretCodeRow = document.getElementById('secret-code-table').querySelector('tr');
    secretCodeRow.innerHTML = ''; // Réinitialiser le contenu de la ligne du tirage secret

    // Boucle pour créer les cellules du tirage secret initial et les cacher
    for (var i = 0; i < 4; i++) {
        var cell = document.createElement("td");
        cell.style.backgroundColor = "marron"; // Mettre la couleur de fond à noir
        secretCodeRow.appendChild(cell);
    }
}

var f=0;
// Fonction pour récupérer tous les joueurs enregistrés dans le localStorage
function getAllPlayers() {
    var players = [];
    // Parcourir toutes les clés du localStorage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        // Ignorer les clés "MM_connected" et "MM_nonInscrits"
        if (key === "MM_connected" || key === "MM_nonInscrits") {
            continue; // Passer à la clé suivante
        }
        // Vérifier si la clé commence par "MM_" pour sélectionner les joueurs
        if (key.startsWith("MM_")) {
            var username = key.substring(3); // Retirer le préfixe "MM_" pour obtenir le nom du joueur
            var userData = JSON.parse(localStorage.getItem(key)); // Récupérer les données du joueur
            players.push({ username: username, score: userData.score, email: userData.email, password: userData.password }); // Ajouter le joueur à la liste des joueurs
        }
    }
    
    // Trier les joueurs par ordre alphabétique des noms d'utilisateur
    players.sort(function(a, b) {
        // Utiliser localeCompare pour comparer les chaînes de caractères de manière sensible à la casse et à la localisation
        return a.username.localeCompare(b.username);
    });
    
    return players;
}
function getAllPlayersScores() {
    var players = [];
    // Parcourir toutes les clés du localStorage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        // Ignorer les clés "MM_connected" et "MM_nonInscrits"
        if (key === "MM_connected" || key === "MM_nonInscrits") {
            continue; // Passer à la clé suivante
        }
        // Vérifier si la clé commence par "MM_" pour sélectionner les joueurs
        if (key.startsWith("MM_")) {
            var username = key.substring(3); // Retirer le préfixe "MM_" pour obtenir le nom du joueur
            var userData = JSON.parse(localStorage.getItem(key)); // Récupérer les données du joueur
            players.push({ username: username, score: userData.score, email: userData.email, password: userData.password }); // Ajouter le joueur à la liste des joueurs
        }
    }
    
    // Trier les joueurs par score croissant
    players.sort(function(a, b) {
        // Comparer les scores
        return a.score - b.score;
    });
    
    return players;
}



// Fonction pour afficher les joueurs et leurs scores dans le tableau du modal
function displayPlayers() {
    var players = getAllPlayersScores(); // Récupérer tous les joueurs enregistrés

    // Trier les joueurs par score croissant
    players.sort(function(a, b) {
        return a.score - b.score;
    });

    var modalBody = document.querySelector("#crownForm .modal-body"); // Sélectionner le corps du modal
    var tableHTML = "<table id='players-table' class='table'><thead><tr><th scope='col'>Pseudo</th><th scope='col'>Score</th></tr></thead><tbody>"; // Entête du tableau
  
    // Parcourir tous les joueurs et leurs scores
    players.forEach(function(player) {
        // Vérifier si le score du joueur est défini et différent de 3600
        var scoreDisplay = player.score !== undefined && player.score !== null && player.score !== 7200 ? player.score : "N'a pas encore gagné";
        
        // Ajouter chaque joueur et son score (ou "n'a pas encore joué" si le score est 3600) au contenu du tableau
        tableHTML += "<tr><td class='aqua'>" + player.username + "</td><td class='aqua'>" + scoreDisplay + "</td></tr>";
    });

    
    
    tableHTML += "</tbody></table>"; // Fermeture du tableau
    modalBody.innerHTML = tableHTML; // Afficher le tableau dans le corps du modal
}

// Fonction pour afficher les joueurs et leurs scores dans le tableau du modal












function savePlayer(player) {
    // Récupérer tous les joueurs
    var players = getAllPlayers();

    // Rechercher le joueur dans la liste
    var index = players.findIndex(p => p.username === player.username);

    // Si le joueur existe déjà, le mettre à jour ou le remplacer
    if (index !== -1) {
        players[index] = player;
    } else {
        // Sinon, ajouter le joueur à la liste
        players.push(player);
    }

    // Sauvegarder le joueur mis à jour ou ajouté dans le localStorage
    localStorage.setItem("MM_" + player.username, JSON.stringify(player));
}

function submitEditPlayerForm() {
    // Récupérer les valeurs des champs du formulaire
    var editUsername = document.getElementById('edit-username').value;
    var editScore = parseInt(document.getElementById('edit-score').value);
    var editEmail = document.getElementById('edit-email').value;
    // var editPassword = document.getElementById('edit-password').value;

    // Vérifier si le joueur existe déjà
    if (getPlayerByUsername(editUsername)) {
        // Récupérer les données du joueur actuel à l'aide de l'ancien pseudo
        var currentPlayerData = JSON.parse(localStorage.getItem("MM_" + AncienPseudo));

        // Vérifier si les données du joueur actuel existent
        if (currentPlayerData) {
            // Supprimer l'ancien enregistrement avec l'ancien pseudo
            localStorage.removeItem("MM_" + AncienPseudo);

            // Mettre à jour les données du joueur avec le nouveau pseudo
            currentPlayerData.username = editUsername;
            currentPlayerData.score = editScore;
            currentPlayerData.email = editEmail;
            // currentPlayerData.password = editPassword;

            // Enregistrer les données du joueur mises à jour avec le nouveau pseudo
            localStorage.setItem("MM_" + editUsername, JSON.stringify(currentPlayerData));

            // Fermer la modal
            var myModal = new bootstrap.Modal(document.getElementById('editPlayerModal'));
            myModal.hide();
            editPlayerModal.style.display="none";

            // Rafraîchir l'affichage des joueurs
            displayPlayersAdmin();
        } else {
            // Afficher un message d'erreur si les données du joueur actuel n'existent pas
            alert("Les données du joueur actuel n'existent pas.");
        }
    } else {
        if(AncienPseudo !== editUsername && editUsername==null){
            // Mettre à jour les données du joueur avec le nouveau pseudo
            currentPlayerData.username = editUsername;
            currentPlayerData.score = editScore;
            currentPlayerData.email = editEmail;
            currentPlayerData.password = editPassword;

            // Enregistrer les données du joueur mises à jour avec le nouveau pseudo
            localStorage.setItem("MM_" + editUsername, JSON.stringify(currentPlayerData));

        }
        // Si le joueur n'existe pas, afficher un message d'erreur
       
    }
}

//-------------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------------

// Ajout d'un écouteur d'événements pour l'événement de fermeture du formulaire de connexion
loginForm.addEventListener('hidden.bs.modal', function () {
    // Appeler la fonction pour vider les champs du formulaire de connexion
    initUserForm();
});

// Sélection des boutons
var signupBtn = document.getElementById("signupBtn");
var logoutBtn = document.getElementById("logoutBtn");

// Ajout d'écouteurs d'événements pour les boutons
signupBtn.addEventListener("click", function() {
    signupForm.style.display = "block";
    document.getElementById("usernameSignup").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("confirmPassword").value="";
});

shut.addEventListener("click", function() {
    crownForm.style.display = "none";
});
var fin = document.getElementById('fin');
// Ajout d'écouteurs d'événements pour le le bouton close du Modal panel admin
fin.addEventListener("click", function() {
    azer.style.display = "none";
});

loginBtn.addEventListener("click", function() {
    loginForm.style.display = "block";    


    document.getElementById('username').value="";
    document.getElementById('loginPassword').value="";
});

logoutBtn.addEventListener("click", function() {
    // Logique pour déconnecter l'utilisateur et masquer le bouton de déconnexion
    
    document.getElementById('bienvenue').textContent=" ";
        scoresBtn.style.display="none";
        logoutBtn.style.display = "none";
        loginBtn.style.display = "block";
        signupBtn.style.display = "block";
        connected=false;loginUsername="nonInscrits";
        localStorage.setItem('loginUsername',loginUsername);
        localStorage.setItem('MM_connected',connected);
    loginUsername=localStorage.getItem('loginUsername');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    // Fermer le formulaire en masquant son conteneur
    document.getElementById('signupForm').style.display = 'none';
});

// Ajout d'un gestionnaire d'événements pour l'événement "submit" du formulaire
signupForm.addEventListener('submit', function(event) {
    // Empêcher le comportement par défaut du formulaire qui est de recharger la page
    event.preventDefault();

    // Récupération des valeurs saisies dans les champs du formulaire
    var username = document.getElementById('usernameSignup').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Vérification si les champs sont vides
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Vérification de la validité de l'adresse email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Veuillez saisir une adresse email valide.');
        return;
    }

    // Vérification si le mot de passe et sa confirmation correspondent
    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        
        return;
    }

    // Si les champs sont remplis et valides, vous pouvez passer à l'étape suivante, par exemple, vérifier l'authentification
    
    storeCredentials(username, email, password, score);

    checkCredentials(username, password);
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    // authenticate(username, email, password);
});

// Fonction pour stocker les informations d'authentification dans le localStorage
function storeCredentials(username, email, password, score) {
    if (username=="Admin" && password=="root"){
        localStorage.setItem('loginUsername',"nonInscrits");
        connected=flase;
    }else{
    var user = {
        email: email,
        password: password,
        score: score
    };
    localStorage.setItem("MM_" + username, JSON.stringify(user)); // Utilisation du nom d'utilisateur comme clé
}
}


// Fonction pour vérifier l'authentification en comparant les informations saisies avec celles stockées dans le localStorage
function checkCredentials(username, password) {
    // Vérifier d'abord si la clé existe dans le localStorage
    if (!localStorage.getItem("MM_" + username)) {
        // Si la clé n'existe pas, l'utilisateur n'est pas enregistré
        return false;
    }
    
    // Récupération des informations de l'utilisateur stockées localement
    var storedUser = JSON.parse(localStorage.getItem("MM_" + username)); // Utilisation du nom d'utilisateur comme clé

    // Vérifier si les informations de l'utilisateur sont récupérées correctement

    // Vérification si les informations de l'utilisateur existent et si le mot de passe correspond
    if (storedUser !== null && password === storedUser.password) { // Vérifiez si storedUser n'est pas nul avant de comparer le mot de passe
        return true; // Authentification réussie
    } else {
        return false; // Authentification échouée
    }
}


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fonction pour vérifier l'authentification en utilisant les informations saisies dans le formulaire de connexion
// Fonction pour gérer la tentative de connexion de l'utilisateur
function login(username, password) {
    // Vérifier les informations d'identification
    if (checkCredentials(username, password)) {
        // Si les informations sont correctes, afficher un message de bienvenue
        loginForm.style.display = "none";
        // document.getElementById('une').textContent = "Bienvenue " + username;
        
        signupBtn.style.display = "block";
        // logoutBtn.style.display = "block";
        signupBtn.style.display = "none";
        loginBtn.style.display = "none";
        // Récupérer l'élément de l'icône
        var icon = document.querySelector('.king');
        // // Modifier le style pour afficher l'icône
        // icon.style.display = 'inline';
       
        document.getElementById('loginForm').style.display = 'none';
    } else {
        // Si les informations sont incorrectes, afficher un message d'erreur
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
        scoresBtn.style.display="none";
        logoutBtn.style.display="none";
        loginBtn.style.display="block";
        signupBtn.style.display="block";
        
    loginUsername="nonInscrits";
    }
}

// Ajout d'un gestionnaire d'événements pour le bouton de fermeture du formulaire de connexion
closeBtnLogin.addEventListener("click", function() {
    loginForm.style.display = "none";
    logoutBtn.style.display = "none";
        // Vider les champs du formulaire de connexion
});

//-------------------------------------------------------------------------------------------------------------

function changer1(){
    if (eye){
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").src="../image/eye2.png";  
        eye=false;
    }else{
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye").src="../image/eye1.png";
        eye=true;
    }

}
function changer2(){
    if (eye){
        document.getElementById("confirmPassword").setAttribute("type","text");
        document.getElementById("eye2").src="../image/eye2.png";  
        eye=false;
    }else{
        document.getElementById("confirmPassword").setAttribute("type","password");
        document.getElementById("eye2").src="../image/eye1.png";
        eye=true;
    }

}

// Fonction appelée lors du clic sur le bouton "Fermer" du modal du panel admin
function closePanelAdminModal() {
    var panelAdminModal = document.getElementById('azer');
    panelAdminModal.style.display = 'none';
}

document.getElementById('fin').addEventListener('click', closePanelAdminModal);


function bienvenue(){
    if(loginUsername == 'nonInscrits'){}else{
    document.getElementById('bienvenue').textContent="Bienvenue " + loginUsername + " !";
}}

// Ajout d'écouteurs d'événements pour le le bouton close du Modal des records
shut.addEventListener("click", function() {
    crownForm.style.display = "none";
});
// Ajout d'un gestionnaire d'événements pour le bouton de fermeture du formulaire de scores
closeBtnedit.addEventListener("click", function() {
    editPlayerModal.style.display = "none";
        
});

// Ajout d'écouteurs d'événements pour le le bouton close du Modal des records
closeBtninfo.addEventListener("click", function() {
    rules1.style.display = "none";
});
