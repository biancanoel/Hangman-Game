var words = ["backpack", "bicycle", "christmas", "easter", "fiesta", "goals", "graffitti", "jetset", "yurt"];
var currentWord;
var lastGuess; 
var guessedLetters=[];
var wrongGuesses =[];
var guessesRemaining=10;
var wins=0; //prob shouldnt reset wins to 0 so if you play multiple words your score saves




/////////When start button is clicked, start a new game
document.getElementById("newGame").addEventListener("click", function() {

    document.getElementById("current-word").textContent = ("");

    //reset win count, guesses, remaining, guessed letters, and current word
    document.getElementById('win-count').textContent = '0';
    document.getElementById('guesses-remaining').textContent = '10';
    document.getElementById('letters-guessed').textContent = 'none so far';
    

    //generate current from words array
    var currentWord = words[Math.floor(Math.random()*9)];
    console.log('The word for this round is ' + currentWord);

    //split word into array CHANGE TO OBJECT
    var currentWordArray = currentWord.split("");
    console.log(currentWordArray);


    //replace word with blank spaces
    for (i=0; i < currentWordArray.length; i++) {
        document.getElementById("current-word").textContent += (" _ ");
    };

    

    //when user click enter button (after entering a letter guess)
    document.getElementById("readGuess").addEventListener("click", function() {
        //read the input from user and display to console
        var lastGuess = document.getElementById("enter-guess").value;
        console.log('the last guess was ' + lastGuess); 

        //if repeat guess
        if (guessedLetters.indexOf(lastGuess)>=0) {
            alert("you have already guessed this letter!")}


        //if correct guess    
        else if (currentWordArray.indexOf(lastGuess) >=0 ) {
            guessedLetters.push(lastGuess)    
            console.log("your guess " + lastGuess +" was correct") 

            for (i=0; i < currentWordArray.length; i++) {
                if (lastGuess===currentWordArray[i]) {
                    console.log(currentWordArray.indexOf([i]))
                }
            }

            }
          
        //if incorrect guess
        else {
            guessedLetters.push(lastGuess);
            wrongGuesses.push(lastGuess);
            console.log(guessedLetters);
            document.getElementById("letters-guessed").textContent = wrongGuesses;
        }    
        


 
            
            //check if game was won. 
            
            function checkWin () {
                var gameWon = true;
                for (i=0; i<=currentWordArray.length-1; i++) {
               if (guessedLetters.indexOf(currentWordArray[i])>=0) {
                
                   //show correct pic and title

                   //add 1 point to wins
                   
               } else {
                   gameWon = false;
               }
              }
              console.log(gameWon);
              // add 1 point it word is guessed
              if (gameWon=== true) {
                document.getElementById("win-count").textContent = ++ wins
              }
              
            };

            checkWin()

            
            
                //player wins game

                //add 1 to wins

                //display corresponding image and text 
            
            
            /*
        } else  {
            //console log showing guess NOT correct
            console.log("your guess " + lastGuess +" was NOT correct") 
            //decrease remaining guesses by 1 
            document.getElementById("guesses-remaining").textContent = -- guessesRemaining

            //check if game was lost
            if ( guessesRemaining === 0 ) {
                //display you lose picture 
            }                                                                                       
        }
        */

    }) //end of function called when button is clicked
        
    
    











});