var userScore = 0; // the users current score
var computerScore = 0; // the computers current score

const userScore_span = document.getElementById('user-score'); // getting the userscore span element
const computerScore_span = document.getElementById('comp-score'); // getting the computers span element

const scoreBoard_div = document.querySelector('.scoreboard'); // getting the scoreboard div

const result_p = document.querySelector('.result > p') // getting the reulst div
const rock_div = document.getElementById('r'); // getting the rock div
const paper_div = document.getElementById('p'); //getting the paper div
const scissor_div = document.getElementById('s'); //geting the scissor div

const resetScore_div = document.getElementById('resetScore');

function resetScore() {
    userScore = 0;
    userScore_span.innerHTML = userScore;

    computerScore = 0;
    computerScore_span.innerHTML = computerScore;
}

function getComputerChoice() { // picks a randome choice for the computer
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function convertToWords(letter) { //converts lettters to words
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) { // runs if the user wins
    userScore++;
    userScore_span.innerHTML = userScore;
    const userChoice_div = document.getElementById(userChoice)
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWords(userChoice)}${smallUserWord} beats ${convertToWords(computerChoice)}${smallCompWord}. YOU WIN! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}



function lose(userChoice, computerChoice) { // runs if the user looses
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(userChoice)
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWords(userChoice)}${smallUserWord} loses to ${convertToWords(computerChoice)}${smallCompWord}. YOU LOST... 💩 `;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) { // runs if it's a draw
    const userChoice_div = document.getElementById(userChoice)
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWords(userChoice)}${smallUserWord} eqauls ${convertToWords(computerChoice)}${smallCompWord}. IT'S A DRAW... 🙃 `;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}




function game(userChoice){ //calculates the different scenarios
    const computerChoice =  getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() { //main function
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissor_div.addEventListener('click', () => game('s'));
    resetScore_div.addEventListener('click', () => resetScore());
}

main();