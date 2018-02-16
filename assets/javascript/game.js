var words = ["backpack", "snuggles", "christmas", "bunny", "fiesta", "goals", "graffitti", "jetset", "yurt"];
var currentWord;
var currentWordArray= [];
 
var guessedLetters=[];
var wrongGuesses =[];
var guessesRemaining=10;
var wins=0; 



//document.getElementById('win-count').textContent = '0';

var newWord = function () {
        //reset guesses, remaining, guessed letters, and current word, guesses remaining

        document.getElementById("current-word").textContent = [" "];
        document.getElementById('guesses-remaining').textContent = '10';
        document.getElementById('letters-guessed').textContent = 'none so far';
        document.getElementById('mia-img').src = "./assets/images/default.jpg";
        document.getElementById('img-title'.textContent= "Macadamia 'Mia' Torres");
        guessedLetters.length=0;
        currentWordArray.length=0;
        wrongGuesses.length=0;
        guessesRemaining=10;
        correctGuesses= [];
        
}






document.getElementById("newGame").addEventListener("click", function() {

   newWord();

    //generate current from words array
    var currentWord = words[Math.floor(Math.random()*9)];
    console.log('The word for this round is ' + currentWord);

    //split word into array CHANGE TO OBJECT
    var currentWordArray = currentWord.split("");
    


    //replace word with blank spaces
    for (i=0; i < currentWordArray.length; i++) {
        document.getElementById("current-word").textContent += (" _ ");
    };

    

    //when user click enter button (after entering a letter guess)
    document.onkeyup =  function(event) {


        //if repeat guess
        if (guessedLetters.indexOf(event.key)>=0) {
            alert("you have already guessed this letter!");
            console.log("you have already guessed this letter!")}


        //if correct guess    
        else if (currentWordArray.indexOf(event.key) >=0 ) {
            guessedLetters.push(event.key)    
            correctGuesses.push(event.key);
            console.log("your guess " + event.key +" was correct");
            
            var wordToShow = "";
            for (var i=0; i<currentWordArray.length; i++) {
                if (correctGuesses.indexOf(currentWordArray[i] !== -1) ) {
                    for ( var j=0; j< correctGuesses.length; j++) {
                        if (correctGuesses[j]== currentWordArray[i]) {
                            wordToShow += currentWordArray[i];
                            console.log(correctGuesses);
                        } else {}
                    } 
                }  
                

                
            }
            document.getElementById("current-word").textContent = wordToShow;

            }
          
        //if incorrect guess
        else {
            guessedLetters.push(event.key);
            wrongGuesses.push(event.key);                      
            console.log(event.key + " was a wrong guess");
            document.getElementById("letters-guessed").textContent = wrongGuesses;
            document.getElementById("guesses-remaining").textContent = --guessesRemaining;
            wordToShow += " _ ";
            console.log("test");
        }    
        
            //check if game was won. 
            
            function checkWin () {
                var gameWon = true;
                for (i=0; i<=currentWordArray.length-1; i++) {
               if (guessedLetters.indexOf(currentWordArray[i])>=0) {

               } else {
                   gameWon = false;
               }
              };

              console.log("has the word been guessed? "+  gameWon);
              if (gameWon=== true) {
                document.getElementById("win-count").textContent = ++wins;
                document.getElementById('mia-img').src = "./assets/images/"+currentWord+".jpg"
                document.getElementById("img-title").textContent=currentWord.toUpperCase();
                
              }
            };

            checkWin()

            function checkLose () {
                if (guessesRemaining===0) {
                    document.getElementById('mia-img').src = "https://i.ytimg.com/vi/QZsCYAanNYg/maxresdefault.jpg";

                   
                }
            };

            checkLose();
            

    } //end of function called when button is clicked
        
    
    











});