/**
 * Created by Shihao Shen on 2018/2/6
 */

window.onload = function() {
  // Check if rot.js can work on this browser
  if (!ROT.isSupported()) {
    alert('The rot.js library isn\'t supported by your browser.');
  } else {
    let game = new Game();
    game.init();

    document.body.appendChild(game.getDisplay().getContainer());
  }
};

let Game = function() {
  this.display = null;
  
  this.init = function() {
    this.display = new ROT.Display({width: 80, height: 24});
  };
  
  this.getDisplay = function() {
    return this.display;
  };
};