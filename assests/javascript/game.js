var doughnutType = ["jelly", "maple bar", "sugar", "old fashioned", "glazed"];

var randomWord = "";
var lettersOfDoughnut = [];
var blanks = 0;
var blanksAndCorrect= [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 8;

function guessingGame(){
randomWord = doughnutType[Math.floor(Math.random() * doughnutType.length)];

lettersOfDoughnut= randomWord.split("");

blanks= lettersOfDoughnut.length;

for (var i=0; i< blanks; i++){
    blanksAndCorrect.push("_");
}

document.getElementById("currentword").innerHTML = " " + blanksAndCorrect.join("  ");

console.log(randomWord);
console.log(lettersOfDoughnut)
console.log(blanks)
console.log(blanksAndCorrect)

}

var jelly = document.getElementById ("jelly");
var maple = document.getElementById ("maple bar");
var sugar = document.getElementById ("sugar");
var old = document.getElementById ("old fashioned");
var glazed = document.getElementById ("glazed")

function img() {

    if (randomWord === doughnutType[0]){
        jelly;
        return document.getElementById("image").src = "./assests/images/jelly.jpg";
    }

    else if (randomWord === doughnutType[1]){
        maple;
        return document.getElementById("image").src = "./assests/images/maple.jpg";
    }
    else if (randomWord === doughnutType[2]){
        sugar;
        return document.getElementById("image").src = "./assests/images/sugar.jpg";
    }
    else if (randomWord === doughnutType[3]){
        old;
        return document.getElementById("image").src = "./assests/images/oldfashioned.jpg";
    }
    else if (randomWord === doughnutType[4]){
        glazed;
        return document.getElementById("image").src = "./assests/images/glazed.jpg";
    }
}

function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}
function reset() {
    guessesRemaining = 8;
    wrongGuess = [];
    blanksAndCorrect = [];
    guessingGame()
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses remaining:" + guessesRemaining)
    if (lettersOfDoughnut.toString() === blanksAndCorrect.toString()) {
        wins++;
        reset();
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset();
        document.getElementById("losstracker").innerHTML = " " + losses;
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


guessingGame()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);

    document.getElementById("currentguesses").innerHTML = "  " + wrongGuess.join(" ");
}