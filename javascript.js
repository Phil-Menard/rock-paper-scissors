// souhaiter la bienvenue dans le jeu
console.log("Welcome to the ROCK-PAPER-SCISSORS game!");

// on définit deux variables qui vont calculer les points du joueur et les points de l'ordinateur
let pointsPlayer = 0;
let pointsComputer = 0;

game();

//--------------------------------------FUNCTIONS-------------------------------------------\\

function game() {   // fonction main 

    // variables pour éviter d'écrire le code en dur dans la boucle for
    let counter = 0;
    let numberRounds = 5;

    for (counter; counter < numberRounds; counter++)   {

        // le joueur choisit une réponse entre les 3 options proposées et la réponse est stockée dans une variable const
        const choicePlayer = getPlayerChoice();
        
        // l'ordinateur choisit une réponse, qui sera aléatoire donc, entre les 3 options proposées
        const choiceComputer = getComputerChoice();

        // on compare les résultats et affiche le message correspondant
        playRound(choicePlayer, choiceComputer);
    }

    calculPoints(pointsPlayer, pointsComputer);

}

function getPlayerChoice()  {   // return le choix du joueur (NE GERE PAS ENCORE LES ERREURS)
    let keepGoing = true;
    while (keepGoing)   {   // vérifie si le joueur entre une option correcte 

        let choice = prompt("Paper | Rock | Scissor");  // le joueur entre une réponse

        if (choice == "" || choice === null)    {   // si le joueur valide une réponse vide ou fait echap/cancel, on lance une erreur pour arrêter le programme
            throw new Error("You quitted the game!");
        }

        let answer = choice.toLowerCase();  // on met la réponse du joueur en minuscule pour la comparer facilement

        if (answer == "rock" || answer == "paper" || answer == "scissor")   {   // si le joueur entre une réponse correcte, on affiche le choix du joueur et on quitte la boucle
            keepGoing = false;
            console.log(`You picked ${answer}`);
            return answer;
        } else {
            console.log("Please enter one of the options without mispelling.");
        }
    }
}

function getComputerChoice()    {   // return le choix de l'ordinateur
    let index = Math.floor(Math.random() * 3); // permet de donner un nombre aléatoire entre 1 et 3
    let options = ["rock", "paper", "scissor"];
    let result = options[index];    // on choisit une option entre les trois grace a l'index aléatoire
    console.log(`The computer picked ${result}`);
    return result;
}

function displayPoints(playerPoints, computerPoints)    {
    console.log(`Player : ${playerPoints} | ${computerPoints} : Computer`);
}

function playRound(playerChoice, computerChoice)  {    // fonction qui compare les résultats et annonce le gagnant

    // si le joueur choisit papier
    if (playerChoice == "paper")   {
        if(computerChoice == "rock")  {
            console.log("Paper beats Rock!");
            pointsPlayer++;
            displayPoints(pointsPlayer, pointsComputer);
        }
        else if (computerChoice == playerChoice) {
            console.log("That's an even!");
            displayPoints(pointsPlayer, pointsComputer);
        } 
        else    {
            console.log("You lost :(");
            pointsComputer++;
            displayPoints(pointsPlayer, pointsComputer);
        }
    }
    // si le joueur choisit ciseaux
    if (playerChoice == "scissor")   {
        if(computerChoice == "paper")  {
            console.log("Scissor beats Paper!");
            pointsPlayer++;
            displayPoints(pointsPlayer, pointsComputer);
        }
        else if (computerChoice == playerChoice) {
            console.log("That's an even!");
            displayPoints(pointsPlayer, pointsComputer);
        } 
        else    {
            console.log("You lost :(");
            pointsComputer++;
            displayPoints(pointsPlayer, pointsComputer);
        }
    }
    // si le joueur choisit pierre
    if (playerChoice == "rock")   {
        if(computerChoice == "scissor")  {
            pointsPlayer++;
            console.log("Rock beats Scissor!");
            displayPoints(pointsPlayer, pointsComputer);
        }
        else if (computerChoice == playerChoice) {
            console.log("That's an even!");
            displayPoints(pointsPlayer, pointsComputer);
        } 
        else    {
            console.log("You lost :(");
            pointsComputer++;
            displayPoints(pointsPlayer, pointsComputer);
        }
    }

}

function calculPoints(playerPoints, computerPoints) {   // fonction qui calcule l'ensemble des points et annonce le résultat final des 5 manches

    if (playerPoints > computerPoints)  {
        console.log("You won! Congratulations!");
    }
    else if (playerPoints == computerPoints)    {
        console.log("End of the game : it's en even!");
    }
    else    {
        console.log("You lost! Ahah looser!");
    }
}