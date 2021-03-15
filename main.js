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
        alert("You move graciously. You are the winner!");
        myScore = 0;
        cpuScore = 0;
    } else {
        alert("You're pretty clumsy. You lose the match!");
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
        document.getElementById("showWinner").innerHTML = "You win this round!";
        } else if (
        playerSelection == "Fox" && computerSelection == "Hunter" ||
        playerSelection == "Hunter" && computerSelection == "Village Head" ||
        playerSelection == "Village Head" && computerSelection == "Fox") {
        cpuScore++;
        document.getElementById("showWinner").innerHTML = "You lose this round...";
        } else { 
        document.getElementById("showWinner").innerHTML = "It's a draw.";
    }

    document.getElementById("showChoice").innerHTML = "You met the " + computerSelection;
    document.getElementById("showResults").innerHTML = "Your Score: "+ myScore + " || CPU Score: " + cpuScore;
    console.log(myScore, cpuScore);
    
    if (computerSelection === "Fox") {
        document.getElementById("cpuS").src="images/foxcpu.jpg";
    } else if (computerSelection === "Hunter") {
        document.getElementById("cpuS").src="images/huntercpu.jpg";
    } else {
        document.getElementById("cpuS").src="images/village_headcpu.jpg";
    }
 
    if (myScore == 5 || cpuScore == 5) {
        reset();
        return; 
    }
}