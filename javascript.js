// souhaiter la bienvenue dans le jeu
console.log("Welcome to the ROCK-PAPER-SCISSORS game!");

// on définit deux variables qui vont calculer les points du joueur et les points de l'ordinateur
let pointsPlayer = 0;
let pointsComputer = 0;

game();

//--------------------------------------FUNCTIONS-------------------------------------------\\


function getPlayerChoice()  {   // return le choix du joueur (NE GERE PS ENCORE LES ERREURS)
    let choice = prompt("Paper | Rock | scissor");
    let answer = choice.toLowerCase();
    console.log(`You picked ${answer}`);
    return answer;
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

function game() {
    
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

function calculPoints(playerPoints, computerPoints) {   // fonction qui calcule l'ensemble des points et annonce le résultat final des 5 manches

    if (playerPoints > computerPoints)  {
        console.log("You won! Congratulations!");
    }
    else if (playerPoints == computerPoints)    {
        console.log("It's en even!");
    }
    else    {
        console.log("You lost! Ahah looser!");
    }
}