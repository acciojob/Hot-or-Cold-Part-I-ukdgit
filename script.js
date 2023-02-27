//your code here

let answer = Math.floor(Math.random() * 100 + 1);
console.log("The secret number is: " + answer);
let numberOfGuesses = 0;
let guesses = [];
let distance = null;
let previousDistance = null;
const input = document.getElementsByTagName('input')[0]

function check_num() {
  let guess = parseInt(input.value);
  if (guess !== null && !isNaN(guess) && guess < 101 && guess > 0) {
    numberOfGuesses += 1;
    if (guesses.indexOf(guess) > -1) {
      document.getElementById('respond').innerText = 
        "ERROR: You guessed that number already. Please try a new number."
    } else {
      guesses.push(guess);
      distance = Math.abs(answer - guess);
      previousDistance = Math.abs(answer - guesses[guesses.length - 2]);
      document.getElementById('respond').innerText = "";
      if (guess === answer) {
        document.getElementsByTagName('body')[0].style.backgroundColor = "green";
        document.getElementById('respond').innerText = 
          "Congrats! You got it in " +
            numberOfGuesses +
            " guesses! The secret number was " +
            answer +
            "!"
      } else {
        if (isNaN(previousDistance)) {
          if (guess > answer) {
            document.getElementById('respond').innerText = "Guess lower! Last guess: " + guess;
          } else if (guess < answer) {
            document.getElementById('respond').innerText = "Guess higher! Last guess: " + guess;
          }
        } else if (distance > previousDistance) {
          document.getElementsByTagName('body')[0].style.backgroundColor = "#3399FF";
          if (guess > answer) {
            document.getElementById('respond').innerText = 
              "You're getting colder, guess LOWER! Last guess: " + guess
          } else if (guess < answer) {
            document.getElementById('respond').innerText = 
              "You're getting colder, guess HIGHER! Last guess: " + guess
          }
        } else if (distance < previousDistance) {
          document.getElementsByTagName('body')[0].style.backgroundColor = "#CC0000";
          if (guess > answer) {
            document.getElementById('respond').innerText = 
              "You're getting hotter, guess LOWER! Last guess: " + guess
          } else if (guess < answer) {
            document.getElementById('respond').innerText = 
              "You're getting hotter, guess HIGHER! Last guess: " + guess
          }
        } else if (distance === previousDistance) {
          if (guess > answer) {
            document.getElementById('respond').innerText = 
              "You're on fire, guess LOWER! Last guess: " + guess
          } else if (guess < answer) {
            document.getElementById('respond').innerText = 
              "You're on fire, guess HIGHER! Last guess: " + guess
          }
        }
      }
    }
  } else {
    document.getElementById('guess').innerText = "ERROR: Your guess must be a number between 1 and 100";
  }
}
