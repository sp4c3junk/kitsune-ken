let signs = ["Village Head", "Fox", "Hunter"];
let myScore = 0;
let cpuScore = 0;
let playerWeapon = "";
let computerRole = "";

//get random value
function randomValue() {
    return Math.floor(Math.random() * signs.length);
}

//random computer choice
function computerPlay() {
    return signs[randomValue()];
}

//select weapon for the player
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

//reset scores and forms when scores reach 5
function resetScore() {
    if (myScore == 5) {
        alert("You move graciously. You are the winner!");
        myScore = 0;
        cpuScore = 0;
    } else if (cpuScore == 5) {
        alert("You're pretty clumsy. You lose the match!");
        myScore = 0;
        cpuScore = 0;
    } else {
        return;
    }
    document.getElementById("showResults").innerHTML = "Your Score: 0 || CPU Score: 0";
    document.getElementById("showChoice").innerHTML = "Who's hiding behind the paper doors?";
    document.getElementById("showWinner").innerHTML = "---";
    document.getElementById("cpuS").src="https://hosting.photobucket.com/images/ac133/owlgoes/qm(1).png";
}

// show computer choices
function showComputer() {
    if (computerRole === "Fox") {
        document.getElementById("cpuS").src="https://hosting.photobucket.com/images/ac133/owlgoes/foxcpu(1).jpg";
    } else if (computerRole === "Hunter") {
        document.getElementById("cpuS").src="https://hosting.photobucket.com/images/ac133/owlgoes/hunter(1).jpg";
    } else {
        document.getElementById("cpuS").src="https://hosting.photobucket.com/images/ac133/owlgoes/village_headcpu(1).jpg";
    }
    document.getElementById("showChoice").innerHTML = "You met the " + computerRole;
}

//the game itself
function game(playerSelection, computerSelection) {
    playerSelection = playerWeapon;
    computerSelection = computerPlay();
    computerRole = computerSelection;

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

    document.getElementById("showResults").innerHTML = "Your Score: "+ myScore + " || CPU Score: " + cpuScore;

    showComputer();
    resetScore();
}