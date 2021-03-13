let signs = ["Village Head", "Fox", "Hunter"];
let myScore = 0;
let cpuScore = 0;
let playerWeapon = "";

//get random value
function randomValue() {
    return Math.floor(Math.random() * signs.length);
}

//random computer choice
function computerPlay() {
    return signs[randomValue()];
}

//select weapon for player
function selectHead() {
    playerWeapon = "Village Head";
    document.getElementById("roleSelection").innerHTML = "You are the Village Head";
}
function selectFox() {
    playerWeapon = "Fox";
    document.getElementById("roleSelection").innerHTML = "You are the Fox";
}
function selectHunter() {
    playerWeapon = "Hunter";
    document.getElementById("roleSelection").innerHTML = "You are the Hunter";
}

//reset scores when reached 5
function reset() {
    if (myScore > cpuScore) {
        alert("You're pretty lucky. You win!");
        myScore = 0;
        cpuScore = 0;
    } else {
        alert("You're pretty dumb. You lost!");
        myScore = 0;
        cpuScore = 0;
    }
}

//the game itself
function game(playerSelection, computerSelection) {
    playerSelection = playerWeapon;
    computerSelection = computerPlay();
    console.log("You: " + playerSelection, "CPU: " + computerSelection);
    if (playerSelection == "Village Head" && computerSelection == "Hunter"||
        playerSelection == "Fox" && computerSelection == "Village Head" ||
        playerSelection == "Hunter" && computerSelection == "Fox")  {
        myScore++;
        console.log("You win this round!");
        } else if (
        playerSelection == "Fox" && computerSelection == "Hunter" ||
        playerSelection == "Hunter" && computerSelection == "Village Head" ||
        playerSelection == "Village Head" && computerSelection == "Fox") {
        cpuScore++;
        console.log("You lose this round!");
        } else { 
        console.log("It's a draw!");
        }

    document.getElementById("showChoice").innerHTML = "You met the " + computerSelection;
    document.getElementById("showResults").innerHTML = "Your Score is now: "+ myScore + " --- CPU Score is now: " + cpuScore + ".";
    console.log(myScore, cpuScore);
    
    if (myScore == 5 || cpuScore == 5) {
        reset();
        return; 
    }
}