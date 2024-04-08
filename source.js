function getComputerChoice ()
{
    let com = Math.floor(Math.random() * 3);
    if (com === 0){
        return "Rock";
    }
    else if (com === 1) {
        return "Paper";
    } 
    else {
        return "Scissors";
    }
}
function getUserChoice (){

    var playerSelection = prompt ("write your choice Rock, paper, Scissors");
    if (playerSelection === "ROCK"|| playerSelection === "rock"|| playerSelection === "Rock"){
        return "Rock";
    }
    else if (playerSelection === "PAPER"||playerSelection === "Paper"||playerSelection === "paper"){
        return "Paper";
    }
    else if (playerSelection === "SCISSORS"||playerSelection ==="Scissors"||playerSelection ==="scissors"){
        return "Scissors";
    }
}
function singleRound (c,u){
    if (c === "Scissors"){
        if (u === "Rock" ){
            return "Win";
         }
        else if (u === "Paper" ){
            return "Lose Scissors beat paper";
        }
    }
    else if (c === "Paper"){
        if (u === "Scissors" ){
            return "Win";
         }
        else if (u === "Rock" ){
            return "Lose paper beat rock";
        }
    }
    else if (c === "Rock"){
        if (u === "Paper" ){
            return "Win";
         }
        else if (u === "Scissors" ){
            return "Lose rock beat Scissors";
        }
    }
    else if (c === u ){
        return " Tie good game";
    }
}
console.log (singleRound(getComputerChoice(),getUserChoice()));