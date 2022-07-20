// souhaiter la bienvenue dans le jeu
alert("Welcome to the ROCK-PAPER-SCISSORS game!");

// on initialise la boucle while
let keepGoing = true;
// while(keepGoing)    {

// le joueur choisit une réponse entre les 3 options proposées et la réponse est stockée dans une variable const
const answerPlayer = setPlayerChoice();

// l'ordinateur choisit une réponse, qui sera aléatoire donc, entre les 3 options proposées
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


function setChoice(choice)    { // return la string adéquate en fonction du chiffre choisit
    
    if (choice == "1")  {   
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
    else    {   // si la valeur est différente de 1, 2 ou 3 alors on affiche un message d'erreur
        alert("Please pick a number between 1 and 3");
        return choice;
    }
    
}

function setPlayerChoice()    { // vérifie le choix du joueur et return le choix en question

    // on initialise une boucle qui va vérifier la valeur entrée par le joueur
    let keepGoing = true;
    while(keepGoing){

        let value = prompt("Make your choice by typing the associated number! Rocks(1), Papers(2) or Scissors(3)?");
        let choice = setChoice(value);
        if (value == "1" || value == "2" || value == "3")   {   // si la valeur est bonne on termine la boucle
            keepGoing = false;
            alert(`You picked ${choice}`);
            return choice;
        }
    }
}

function getComputerChoice()    {   // return le choix de l'ordinateur
    let random = Math.floor(Math.random() * 3) + 1; // permet de donner un chiffre aléatoire (entre 1 et 3 inclus)
    let value = setChoice(random);  // on utilise la fonction setChoice pour tranformer notre chiffre aléatoire en string (ex : "Papers")
    alert(`The computer picked ${value}`);
    return value;
}