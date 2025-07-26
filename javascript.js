



function getComputerChoice() {
    // this function will output a random choice that can be rock, paper or scissors

    // My brainstorming (:
    // the Math.random() function can be utilized here. It return a number between 0 and 1
    // could multiply by 100 and add 1, then create a conditional. Rock is between 0 and 33, Paper is between 34-66 and scissors is between 67-100

    let comp_choice = ""
    let randNum = Math.floor((Math.random()*100))+1
    console.log(randNum)

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

// Stopping point: keep getting only rock
console.log(getComputerChoice())