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

let secretNumber = 60;  

// basic validation function
function validation() {
    const userGuess = parseInt(guessedNumber.value);
    const backgroundElement = document.getElementById('fireworks');

    if (userGuess === secretNumber) {
        return 'Congrats! You guessed the secret number!';
    } else if (userGuess > secretNumber && userGuess <= secretNumber + 5) {
        return 'OMG, Your number is higher, but so close!';
    } else if (userGuess > secretNumber) {
        return 'Your number is higher! Try another one!';
    } else if (userGuess < secretNumber && userGuess >= secretNumber - 5) {
        return 'OMG! Your number is smaller, but so close!';
    } else if (userGuess < secretNumber) {
        return 'Your number is smaller. Try another one.';

        
    }
  }

  onEvent('keydown', guessedNumber, (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evita o envio do formulário padrão
      const result = validation(); // Obtenha o resultado da função
      outputMessage.textContent = result; // Defina o conteúdo da saída com base no resultado
    }
  });




