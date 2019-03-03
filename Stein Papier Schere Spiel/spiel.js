let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('userscore');
const computerScore_span = document.getElementById('computerscore');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
let Smiley_img = document.querySelector('#Smiley > img');
let computerChoice_img = document.querySelector('.c img');

// convertToWord wird für das Spielergebnis in der Textausgabe verwendet.

function convertToWord(letter) {
	if (letter === "r") return "Stein";
	if (letter === "p") return "Papier";
		return "Schere";
}

// getcomputerChoice bestimmt eine zufällige Zahl (0, 1 oder 2) und wählt damit r, p oder s aus dem Array choices!

function getcomputerChoice() {
	let choices = ['r', 'p', 's'];
	let computerChoice_text = document.querySelector('.c > div');
	const randomNumber = (Math.floor(Math.random() * 3));
	if (choices[randomNumber] === 'r')
		{computerChoice_img.src = 'Images/Rock.svg';
		 computerChoice_text.textContent = "Stein";
		}
	else if (choices[randomNumber] === 'p')
		{computerChoice_img.src = 'Images/Paper.svg';
		 computerChoice_text.textContent = "Papier";
		}
	else if (choices[randomNumber] === 's') 
		{computerChoice_img.src = 'Images/Scissors.svg';
		 computerChoice_text.textContent = "Schere";
		}
	return choices[randomNumber]; 
}

// win, lose und draw sind jeweils Funktionen. Verändert wird jeweils der Zählerstand im scoreboard und es werden versch. Smileys eingeblended.
// bei win wird der border des geklickten Elements grün, bei lose rot und bei draw grau gefärbt!
function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.textContent = userScore;
	computerScore_span.textContent = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)} gewinnt gegen ${convertToWord(computerChoice)}. Du hast gewonnen!`;
	Smiley_img.src = 'Images/happy.svg';
	const userChoice_div = document.getElementById(userChoice);
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
	computerScore++;
	userScore_span.textContent = userScore;
	computerScore_span.textContent = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)} verliert gegen ${convertToWord(computerChoice)}. Du hast verloren!`;
	Smiley_img.src = 'Images/sad.svg';
	const userChoice_div = document.getElementById(userChoice);
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
	result_p.innerHTML = "Unentschieden!!!";
	Smiley_img.src = 'Images/confused.svg';
	const userChoice_div = document.getElementById(userChoice);
	userChoice_div.classList.add('grey-glow');
	setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
}

function game(userChoice) {				// die Funktion game ermittelt ob gewonnen, verloren und unentschieden wird!
	const computerChoice = getcomputerChoice();
	switch (userChoice + computerChoice) {
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


function main() {						// Via Mausklick wird der Funktion game ein Argument r p oder s übergeben!
	rock_div.addEventListener('click', () => game('r'));
	paper_div.addEventListener('click', () => game('p'));
	scissors_div.addEventListener('click', () => game('s'));
}

main();
















