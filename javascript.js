// souhaiter la bienvenue dans le jeu
alert("Welcome to the ROCK-PAPER-SCISSORS game!");

// on initialise la boucle while
let keepGoing = true;
// while(keepGoing)    {

// on demande au joueur quel choix il veut faire
const choicePlayer = setPlayerChoice(); 

//     - le joueur choisit une réponse entre les 3 options proposées, faire attention aux erreurs et réponses incorrectes
//     - la réponse est stockée dans une variable const
const answerPlayer = getPlayerChoice(choicePlayer);

//     - l'ordinateur choisit une réponse, qui sera aléatoire donc, entre les 3 options proposées
//             FAIRE UNE FONCTION QUI RETURN LE CHOIX DE L'ORDINATEUR (afficher une string pour confirmer le choix de l'ordinateur (ex : "l'ordinateur a choisi 'pierre'"))
//     - le choix est stocké dans une variable

//     - Le programme compare les résultats avec des conditions (perdant / gagnant / égalité) et affiche le message correspondant
//             FAIRE UNE FONCTION QUI COMPARE LES RESULTATS
//             FAIRE UNE FONCTION QUI AFFICHE LE RESULTAT

//     - proposer au joueur une nouvelle partie
//     si oui => relancer la boucle
//     sinon => stopper la boucle
//             FAIRE UNE FONCTION QUI RETURN UN BOOLEAN(keepGOING) SI OUI OU NON LA BOUCLE SE RELANCE
//     }

// fermer le programme avec un message (ex : vous décidez d'arrêter là, merci d'avoir joué à bientôt)

// }

//FAIRE UNE FONCTION QUI RETURN LE CHOIX DU JOUEUR (afficher une string pour confirmer le choix du joueur (ex : "vous avez choisi 'pierre'"))

function getPlayerChoice(choice)    {
    console.log(`You picked ${choice}`);
    return choice;
}

function setPlayerChoice()    {
    let keepGoing = true;
    while(keepGoing){
        let choicePlayer = prompt("Make your choice by typing the associated number! Rocks(1), Papers(2) or Scissors(3)?");
        if (choicePlayer == "1" || choicePlayer == "2" || choicePlayer == "3")  {
            keepGoing = false;
            return choicePlayer;
        }
        else    {
            alert("Please pick a number between 1 and 3");
        }
        console.log(choicePlayer);
    }
}
