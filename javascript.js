// souhaiter la bienvenue dans le jeu
alert("Welcome to the ROCK-PAPER-SCISSORS game!");

// on définit deux variables qui vont calculer les points du joueur et les points de l'ordinateur
let pointsPlayer = 0;
let pointsComputer = 0;

game();

//--------------------------------------FUNCTIONS--------------------------------------------------------------------------------------

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

function playRound(playerChoice, computerChoice)  {    // fonction qui compare les résultats et annonce le gagnant

    // si le joueur choisit papier
    if (playerChoice == "Papers")   {
        if(computerChoice == "Rocks")  {
            alert("Wujuuuuu! You won!");
            pointsPlayer++;
        }
        else if (computerChoice == playerChoice) {
            alert("That's an even!");
        } 
        else    {
            alert("You lost :(");
            pointsComputer++;
        }
    }
    // si le joueur choisit ciseaux
    if (playerChoice == "Scissors")   {
        if(computerChoice == "Papers")  {
            alert("Wujuuuuu! You won!");
            pointsPlayer++;
        }
        else if (computerChoice == playerChoice) {
            alert("That's an even!");
        } 
        else    {
            alert("You lost :(");
            pointsComputer++;
        }
    }
    // si le joueur choisit pierre
    if (playerChoice == "Rocks")   {
        if(computerChoice == "Scissors")  {
            alert("Wujuuuuu! You won!");
            pointsPlayer++;
        }
        else if (computerChoice == playerChoice) {
            alert("That's an even!");
        } 
        else    {
            alert("You lost :(");
            pointsComputer++;
        }
    }

}

function game() {
    
    let counter = 0;

    for (counter; counter < 5; counter++)   {

        // le joueur choisit une réponse entre les 3 options proposées et la réponse est stockée dans une variable const
        const choicePlayer = setPlayerChoice();

        // l'ordinateur choisit une réponse, qui sera aléatoire donc, entre les 3 options proposées
        const choiceComputer = getComputerChoice();

        // on compare les résultats et affiche le message correspondant
        playRound(choicePlayer, choiceComputer);
    }

    calculPoints(pointsPlayer, pointsComputer);

}

function calculPoints(playerPoints, computerPoints) {

    if (playerPoints > computerPoints)  {
        alert("You won! Congratulations!");
    }
    else    {
        alert("You lost! Ahah looser!");
    }
}