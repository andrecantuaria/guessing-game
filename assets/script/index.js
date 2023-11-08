'use strict';

// Utility functions

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
    
function select(selector, parent = document) {
    return parent.querySelector(selector);
}
    
function selectById(selector, parent = document) {
    return parent.getElementById(selector);
}
    
function print(...args) {
    console.log(args.join(', '));
}
   
// Main Code

const numberOfGuesses = selectById('number-of-guesses');
const guessedNumber = selectById('guessed-number');
const outputMessage = selectById('output-message');

let secretNumber = Math.floor(Math.random() * 101);  

function validation() {
    const userGuess = parseInt(guessedNumber.value);
    const backgroundElement = document.getElementById('fireworks');

    if (userGuess === secretNumber) {
        return 'Congrats! You guessed the secret number!';
    } else if (userGuess > secretNumber && userGuess <= secretNumber + 5) {
        return 'OMG, Your number is higher, but so close!';
    } else if (userGuess > secretNumber) {
        return 'Your number is higher!';
    } else if (userGuess < secretNumber && userGuess >= secretNumber - 5) {
        return 'OMG! Your number is smaller, but so close!';
    } else if (userGuess < secretNumber) {
        return 'Your number is smaller!';

        
    }
  }

  onEvent('keydown', document, (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evita o envio do formulário
      const result = validation(); 
      outputMessage.textContent = result; 
    }
  });


  let numberOfAttempts = 0;
  const limitOfAttempts = 5;
  
  function restrictAttempts() {
    if (numberOfAttempts < limitOfAttempts) {
      numberOfAttempts++;
      return 'Attempts left: ' + (limitOfAttempts - numberOfAttempts)
    } else if (numberOfAttempts >= limitOfAttempts) {
      return 'Game over! Sorry, you exceeded the limits of attempts.';
    }
  }
  
  onEvent('keydown', document, (event) => {
      if (event.key === 'Enter') {
        const result = restrictAttempts();
        numberOfGuesses.textContent = result;
      }
    });

console.log (secretNumber);