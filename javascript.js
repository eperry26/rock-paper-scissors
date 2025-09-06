



function getComputerChoice() {
    // this function will output a random choice that can be rock, paper or scissors

    // My brainstorming (:
    // the Math.random() function can be utilized here. It returns a number between 0 and 1
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





function playGame () {
    // Initialize score variables
    let humanScore = 0
    let computerScore = 0

    let round = 1

    const resultsDiv = document.querySelector("#results");


    function playRound(humanChoice, computerChoice) {
        // Make humanChoice case insensitive

        if (humanChoice.toLowerCase() === computerChoice) {
            // console.log("You tied!");
            resultsDiv.textContent = "You tied!";
        }

        else if (humanChoice.toLowerCase() === 'rock' & computerChoice === 'paper') {
            // console.log("Paper beats rock, computer scores a point!");
            resultsDiv.textContent = "Paper beats rock, computer scores a point!";
            computerScore++;
        }

        else if (humanChoice.toLowerCase() === 'paper' & computerChoice === 'rock') {
            // console.log("Paper beats rock, human scores a point!");
            resultsDiv.textContent = "Paper beats rock, human scores a point!";
            humanScore++;
        }

        else if (humanChoice.toLowerCase() === 'paper' & computerChoice === 'scissors') {
            // console.log("Scissors beats paper, computer scores a point!");
            resultsDiv.textContent = "Scissors beats paper, computer scores a point!";
            computerScore++;
        }

        else if (humanChoice.toLowerCase() === 'scissors' & computerChoice === 'paper') {
            // console.log("Scissors beats paper, human scores a point!");
            resultsDiv.textContent = "Scissors beats paper, human scores a point!";
            humanScore++;
        }

        else if (humanChoice.toLowerCase() === 'scissors' & computerChoice === 'rock') {
            // console.log("Rock beats scissors, computer scores a point!");
            resultsDiv.textContent = "Rock beats scissors, computer scores a point!";
            computerScore++;
        }

        else if (humanChoice.toLowerCase() === 'rock' & computerChoice === 'scissors') {
            // console.log("Rock beats scissors, human scores a point!");
            resultsDiv.textContent = "Rock beats scissors, human scores a point!";
            humanScore++;
        }

} 

    

    //display score of round
    const score = document.createElement("p");
    score.textContent = "Human: "+String(humanScore)+" Computer: "+String(computerScore);
    resultsDiv.appendChild(score);

    const roundNum = document.createElement("h2");
    roundNum.textContent = "Round "+String(round);
    resultsDiv.appendChild(roundNum);


    let choices = document.querySelector("#choices");
    choices.addEventListener('click', (event) => {
        let target = event.target;

            switch(target.id) {
                case 'rock':
                    playRound('rock', getComputerChoice());
                    score.textContent = "Human: "+String(humanScore)+" Computer: "+String(computerScore);
                    resultsDiv.appendChild(score);
                    
                    round++
                    roundNum.textContent = "Round "+String(round);
                    resultsDiv.appendChild(roundNum);

                    break;
                case 'paper':
                    playRound('paper',getComputerChoice());
                    score.textContent = "Human: "+String(humanScore)+" Computer: "+String(computerScore);
                    resultsDiv.appendChild(score);

                    round++
                    roundNum.textContent = "Round "+String(round);
                    resultsDiv.appendChild(roundNum);


                    break;
                case 'scissors':
                    playRound('scissors',getComputerChoice());
                    score.textContent = "Human: "+String(humanScore)+" Computer: "+String(computerScore);
                    resultsDiv.appendChild(score);

                    round++
                    roundNum.textContent = "Round "+String(round);
                    resultsDiv.appendChild(roundNum);


                    break;
            }
        // Playing 5 rounds per game
        // include option to play another game
        if (round > 5) {
            // Tell the user if they won or not
            const finalResult = document.createElement('h1');
            if (humanScore > computerScore) {
                finalResult.textContent = "Congrats, you beat the computer!";
                resultsDiv.appendChild(finalResult);
                // remove the round number element since game over. 
                roundNum.remove();
                // remove the button elements so that user doesn't play more than 5 rounds in a game
                choices.remove();

            }

            else if (humanScore < computerScore) {
                finalResult.textContent = "Looks like the computer beat you. Try again!";
                resultsDiv.appendChild(finalResult);
                // remove the round number element since game is over
                roundNum.remove();
                // remove the button elements so that user doesn't play more than 5 rounds in a game
                choices.remove();
            }

            else {
                finalResult.textContent = "You tied with the computer!";
                resultsDiv.appendChild(finalResult);
                // remove the round number element since game is over
                roundNum.remove();
                // remove the button elements so that user doesn't play more than 5 rounds in a game
                choices.remove();
            }
        }
            

        })
}

// Call function to play game
playGame()

