/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello,stuff!");

//Global Variables
var patterns = [
  [2, 4, 6, 4, 4, 2, 1, 2],
  [3, 3, 3, 1, 2, 5, 1, 3],
  [3, 5, 5, 6, 2, 4, 1, 4],
  [2, 2, 4, 3, 2, 1, 2, 4],
  [3, 2, 1, 6, 4, 2, 1, 4],
  [6, 3, 1, 4, 5, 6, 6, 2],
];
var curr_pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var fast = false;

//Global constants
const clueHoldTime = 300; //1000;
const cluePauseTime = 233; //333;
const nextClueWaitTime = 300; //1000;

//fast constant
const clueHoldTimef = [1000, 300]//300;
const cluePauseTimef = [333, 233]//233;
const nextClueWaitTimef = [1000, 300]//300;

function fastOrnot(btn){
  if(btn == 0){
    fast = true;
  }else if(btn == 1){
    fast = false;
  }
}

function startGame() {
  //initalizes game variables when a new game is started
  progress = 0;
  gamePlaying = true;

  //pick random pattern to use
  let rand_pattern = Math.floor(Math.random() * 5);
  console.log("random number is:" + rand_pattern);

  // takes the random pattern chossen and stores into curr_pattern
  curr_pattern = patterns[rand_pattern].slice();

  // when the game is started, the start button is hidden and the stop btn is removed
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("endBtn").classList.remove("hidden");

  //playSingleClue(1);

  playCluesequence();
}

function stopGame() {
  gamePlaying = false;

  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("endBtn").classList.add("hidden");
}
// adds class lit to buttons and removes lit to button
function lightButton(btn) {
  document.getElementById("btn" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("btn" + btn).classList.remove("lit");
}
// plays a single clue
function playSingleClue(btn) {
  if (gamePlaying) {
    // if the game is playing
    // light up button and play tone for a const time
    
    let a;
    
    if(fast == false){
    a = 0;
    
    }else if(fast == true){
    a = 1
    
    }
    
    
      lightButton(btn);
      playTone(btn, clueHoldTimef[a]);
      setTimeout(clearButton, clueHoldTimef[a], btn);
    
  }
}
// plays a sequence of clues
function playCluesequence() {
  guessCounter = 0; //resets, guesses

  context.resume();
  let a;
  
  if(fast == false){
    a = 0;
  }else if(fast == true){
    a = 1
  }
  
  let delay = nextClueWaitTimef[a]; // set delay to inital wait time
  for (let i = 0; i <= progress; i++) {
    // as I is less than or equal to the progress that the user..
    console.log(
      "play single clue: " + curr_pattern /*pattern*/[i] + "in " + delay + "ms"
    ); // debuging console output

    setTimeout(playSingleClue, delay, curr_pattern /*pattern*/[i]); // sets the time out

    // adds clueHoldTime and cluePauseTime to delay
    delay += clueHoldTimef[a];
    delay += cluePauseTimef[a];
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("congrats!! you won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // if the current button press is equal to the current guesscounter indice
  if (btn == curr_pattern /*pattern*/[guessCounter]) {
    if (guessCounter == progress) {
      // if guessCounter is equal progress, then current round is done

      if (progress == curr_pattern /*pattern*/.length - 1)
        // if progress is equal ot pattern length then the user winsgame
        winGame();
      else {
        // if not finished, increment progress by one and playCluesequence with one higher progress to play
        progress++;
        playCluesequence();
      }
    } else guessCounter++; // if guessCounter is not equal to progress, then increment guessCounter
  } else {
    // if users btn does not match current pattern indices, then user loses game
    loseGame();
  }
}



// Sound Synthesis Functions
// these values represent the frequencies that will be played, human hearing is between 20 Hz and 20kHz so between that.
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500,
  6: 600.3,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
