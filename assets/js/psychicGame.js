var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;
var WinnigPercentage=0;
var e = document.getElementById("Select");
var strUser = e.options[e.selectedIndex].value;

e = document.getElementById("Select");
   strUser = e.options[e.selectedIndex].value;
	var strUserInt=parseInt(strUser);//alert(strUserInt);
	if(strUser!=''){	
	this.letterToGuess = this.computerChoices[Math.floor(Math.random() * strUserInt)]; 
}
else {
	this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
}




var RestartGame = function() {	
wins = 0;
losses = 0;
guesses = 9;
guessesLeft = 9;
guessedLetters = [];
letterToGuess = null;
WinnigPercentage=0;	
updateLetterToGuess();
updateGuessesLeft();
updateGuessesSoFar();
updateComputerPick();
updateWinningPercentage();
updateLossesWins();
		
  }
var updateWinningPercentage = function() {
                wins=parseInt(wins);
				loses=parseInt(losses);
				//alert(loses);
				if(loses!=0 ||wins!=0){
				WinnigPercentage=wins/(losses+wins)*100; 
				WinnigPercentage=WinnigPercentage.toFixed(2);
				
				}
  document.getElementById('guessPercentage').innerHTML = "<span class='lable'>Winnig Percentage</Span> <span class='Output'> : " + WinnigPercentage+ "</b>% out of " +(losses+wins)+ " Games</span>";
				
  }
  var updateLossesWins = function() {
 
  document.getElementById('Losses').innerHTML = "<span class='lable'>Losses: </span><span class='Output'>" + losses +"</span>";
    document.getElementById('Wins').innerHTML = "<span class='lable'>Wins: </span><span class='Output'>" + wins+"</span>";
               
};
  
  var updateGuessesLeft = function() {
 
  document.getElementById('guessLeft').innerHTML = "<span class='lable'>Guesses left:</span><span class='Output'> " + guessesLeft +"</span>";
};

var updateLetterToGuess = function() {
	e = document.getElementById("Select");
   strUser = e.options[e.selectedIndex].value;
	var strUserInt=parseInt(strUser);//alert(strUserInt);
	if(strUser!=''){	
	this.letterToGuess = this.computerChoices[Math.floor(Math.random() * strUserInt)]; 
}
else {
	this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)]; 
}
	
  
};

var updateGuessesSoFar = function() {
 
  document.getElementById('guessedLetters').innerHTML = "<span class='lable'>Your Guesses so far:</Span> <span class='Output'>" + guessedLetters.join(', ')+ "</span>";
};
var updateComputerPick = function() {
 

};

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
  updateComputerPick();
  updateWinningPercentage();

}

updateLetterToGuess();
updateGuessesLeft();
updateWinningPercentage();


document.onkeyup = function(event) {

	//alert(strUser);
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();	
	var AlreadyGuessed=guessedLetters.indexOf(userGuess);
	if(AlreadyGuessed=='-1'){
    guessesLeft--;
  
  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++
                document.getElementById('Wins').innerHTML = "<span class='lable'>Wins: </span><span class='Output'>" + wins+"</span>";
                document.getElementById('ComputerPick').innerHTML = "<span class='lable'>You are right! Computer Pick was:</span><span class='Output'> " + letterToGuess + "</span>";
                
				reset();
            }
			else {
				
				document.getElementById('ComputerPick').innerHTML = "<span class='lable'>Computer Pick:</span><span class='Output'> - </span>";
				
			}

        }else if(guessesLeft == 0){ 
            
			 if ( userGuess == letterToGuess){
				 wins++
                document.getElementById('Wins').innerHTML = "<span class='lable'>Wins: </span><span class='Output'>" + wins+"</span>";
                document.getElementById('ComputerPick').innerHTML = "<span class='lable'>You are right! Computer Pick was:</span><span class='Output'> " + letterToGuess + "</span>";
                  
				} 
			else {
				losses++;
			document.getElementById('ComputerPick').innerHTML = "<span class='lable'>Sorry, Computer Pick was:</span><span class='Output'> " + letterToGuess+ "</span>";
				   }
            document.getElementById('Losses').innerHTML = "<span class='lable'>Losses: </span><span class='Output'>" + losses +"</span>";
			 reset();
        }
	}
};