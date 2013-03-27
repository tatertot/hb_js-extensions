//create guessing game where user gets infinite tries to guess the word.

//create global array to hold the letters of the word
var myword = ['b','a','a'];

//create global array to hold the current guesses _ _ _
var guesses = ['_','_','_'];
//keep track if letter guessed is true

var reward = 0;
var prize = 0;
function guessLetter(letter) {
	var blankCount = 0;
	var letterCorrect = false;
	//iterate through the word letters to see if guessed letter is in there
	reward = setReward();
	console.log("Reward for the right guess is $" + reward)
	console.log(letter);
	for (var i = 0; i < myword.length; i++){
		if (myword[i] == letter){
			//if letter is a match set letter in guess array
			guesses[i] = letter;
			//set letter correct to true
			letterCorrect = true;
			prize += reward;
		}
	}
	if (letterCorrect){

		console.log('congrats on guessing a letter!');
		console.log('your total reward is: $' + prize);
		console.log(guesses);
	} else {
		prize -= reward;
		console.log("Sorry, try again!");
		console.log("you lost $" + reward + ":( Your prize money is now $" + prize);
	}
	//loop through guesses array to see how many blanks there are
	for (var blanks = 0; blanks < guesses.length; blanks++){
		if (guesses[blanks] == '_'){
			blankCount++;
		}
	}
	if (blankCount === 0){
			console.log("Good job you've guessed the word! Your total prize is: $" + prize);
		} else {
		console.log("you need to guess " + blankCount + " more letters");
	}
}

function setReward(){
	reward = (Math.floor(Math.random()*11)+1)*10;
	return reward;
}
/* SOLUTION

var wordLetters     = ['G', 'O', 'A', 'T'];
var guessedLetters  = ['_', '_', '_', '_'];

function guessLetter(letter) {
    var goodGuess = false;
    var moreToGuess = false;
    for (var i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] == letter) {
            guessedLetters[i] = letter;
            goodGuess = true;
        }
        if (guessedLetters[i] == '_') {
            moreToGuess = true;
        }
    }
    if (goodGuess) {
        console.log('Yay, you found a letter!');
        console.log(guessedLetters.join(''));
        if (!moreToGuess) {
            console.log('YOU WON!');
        } 
    } else {
        console.log('Oh noes, thats not right!');
    }
}

*/