// souhaiter la bienvenue dans le jeu
alert("Welcome to the ROCK-PAPER-SCISSORS game!");

// on initialise la boucle while
let keepGoing = true;
// while(keepGoing)    {

// on demande au joueur quel choix il veut faire
const playerChoice = setPlayerChoice(); 

// le joueur choisit une réponse entre les 3 options proposées et la réponse est stockée dans une variable const
const answerPlayer = getPlayerChoice(playerChoice);

//     - l'ordinateur choisit une réponse, qui sera aléatoire donc, entre les 3 options proposées
const answerComputer = getComputerChoice();
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
    alert(`You picked ${choice}`);
    return choice;
}

function setPlayerChoice()    {
    // on initialise une boucle qui va vérifier la valeur entrée par le joueur
    let keepGoing = true;
    while(keepGoing){

        let value = prompt("Make your choice by typing the associated number! Rocks(1), Papers(2) or Scissors(3)?");
        let choice = setChoice(value);
        if (value == "1" || value == "2" || value == "3")   {
            keepGoing = false;
            return choice;
        }
    }
}

function setChoice(choice)    {
    
    if (choice == "1")  {   // quand le joueur a choisi, on change la valeur de keepGoing pour terminer la boucle et on return le choix correspondant
        choice = "Rocks";
        return choice;
    }
    else if(choice == "2")    {
        choice = "Papers";
        return choice;
    }
    else if(choice == "3")    {
        choice = "Scissors";
        return choice;
    }
    else    {   // si la valeur est différente de 1, 2 ou 3 alors on affiche un message d'erreur et on recommence la boucle
        alert("Please pick a number between 1 and 3");
        return choice;
    }
    
}

function getComputerChoice()    {   // return le choix de l'ordinateur
    let random = Math.floor(Math.random() * 3) + 1;
    let value = setChoice(random);
    alert(`The computer picked ${value}`);
    return value;
}