//create guessing game where user gets infinite tries to guess the word.

//create global array to hold the letters of the word
var myword = ['b','r', 'a','i','n'];

//create global array to hold the current guesses _ _ _
var guesses = ['_','_','_','_','_'];
//keep track if letter guessed is true
var letterCorrect = false;

function guessLetter(letter) {
	var blankCount = 0;
	//iterate through the word letters to see if guessed letter is in there
	console.log(letter);
	for (var i = 0; i < myword.length; i++){
		if (myword[i] == letter){
			//if letter is a match set letter in guess array
			guesses[i] = letter;
			//set letter correct to true
			letterCorrect = true
		}
	}
	if (letterCorrect){
		console.log('congrats on guessing a letter!');
		console.log(guesses);
	} else {
		console.log("Sorry, try again!");
	}
	//loop through guesses array to see how many blanks there are
	for (var blanks = 0; blanks < guesses.length; blanks++){
		if (guesses[blanks] == '_'){
			blankCount++;
		}
	}
	if (blankCount === 0){
			console.log("Good job you've guessed the word!");
		} else {
		console.log("you need to guess " + blankCount + " more letters");
	}
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