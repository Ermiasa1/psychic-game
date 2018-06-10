

	var compChoices = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	var guessSoFar = [];
	var guessLeft = 9;
	var wins = 0;
	var losses = 0;
	

document.onkeyup = function(){

			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			

			var computerGuess = compChoices[Math.floor(Math.random()*compChoices.length)];
						
				if (compChoices.indexOf(userGuess)>=0){
				if (userGuess==computerGuess) { wins++; 
					guessLeft = 9;
					guessSoFar = [];										
			}   
			if (userGuess!= computerGuess) { 
		     	   guessLeft--;
				   guessSoFar.push(event.key);
			}  
			    if (guessLeft==0) { losses++; 
			    	guessLeft = 9;
					guessSoFar = [];
		    } 
			} else { alert("please choose from the alphabet");

			}
			
			var html = "<p>Guess what letter I am thinking of</p>" +
                       "<p>wins: " + wins + "</p>" +
                       "<p>losses: " + losses + "</p>" +
                       "<p>Your Guesses So Far: " + guessSoFar + "</P>" +
                       "<p>Guesses Left: " + guessLeft + "</p>";
                      

           document.querySelector("#game").innerHTML= html;

		}

