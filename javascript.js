



function getComputerChoice() {
    // this function will output a random choice that can be rock, paper or scissors

    // My brainstorming (:
    // the Math.random() function can be utilized here. It return a number between 0 and 1
    // could multiply by 100 and add 1, then create a conditional. Rock is between 0 and 33, Paper is between 34-66 and scissors is between 67-100

    let comp_choice = ""
    let randNum = Math.floor((Math.random()*100))+1
    // console.log(randNum)

    if (randNum >=0 & randNum <= 33) {
        comp_choice = "rock"
    }

    else if (randNum >= 34 & randNum <= 66) {
        comp_choice = "paper"
    }

    else {
        comp_choice = "scissors"
    }

    return comp_choice


}

function getHumanChoice () {
    // User input to get human choice. Use prompt()
    human_choice = prompt("Rock, Paper, or Scissors?: ")
    return human_choice
}



function playGame () {
    // Initialize score variables
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {
    // Make humanChoice case insensitive

    if (humanChoice.toLowerCase() === computerChoice) {
        console.log("You tied!")
    }

    else if (humanChoice.toLowerCase() === 'rock' & computerChoice === 'paper') {
        console.log("Paper beats rock, computer scores a point!")
        computerScore++
    }

    else if (humanChoice.toLowerCase() === 'paper' & computerChoice === 'rock') {
        console.log("Paper beats rock, human scores a point!")
        humanScore++
    }

    else if (humanChoice.toLowerCase() === 'paper' & computerChoice === 'scissors') {
        console.log("Scissors beats paper, computer scores a point!")
        computerScore++
    }

    else if (humanChoice.toLowerCase() === 'scissors' & computerChoice === 'paper') {
        console.log("Scissors beats paper, human scores a point!")
        humanScore++
    }

    else if (humanChoice.toLowerCase() === 'scissors' & computerChoice === 'rock') {
        console.log("Rock beats scissors, computer scores a point!")
        computerScore++
    }

    else if (humanChoice.toLowerCase() === 'rock' & computerChoice === 'scissors') {
        console.log("Rock beats scissors, human scores a point!")
        humanScore++
    }

}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
