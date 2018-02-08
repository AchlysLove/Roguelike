/**
 * Created by Shihao Shen on 2018/2/6
 */

window.onload = function() {
  // Check if rot.js can work on this browser
  if (!ROT.isSupported()) {
    alert('The rot.js library isn\'t supported by your browser.');
  } else {
    Game.init();

    document.body.appendChild(Game.getDisplay().getContainer());

    Game.switchScreen(Game.Screen.startScreen);
  }
};

let Game = {
  display: null,
  currentScreen: null,

  init() {
    this.display = new ROT.Display({width: 80, height: 20});

    let instance = this;
    let bindEventToScreen = function(event) {
      window.addEventListener(event, (e) => {
        if (instance.currentScreen !== null) {
          instance.currentScreen.handleInput(event, e);
        }
      });
    };

    bindEventToScreen('keydown');
    bindEventToScreen('keyup');
    bindEventToScreen('keypress');
  },

  getDisplay() {
    return this.display;
  },

  switchScreen(screen) {
    if (this.currentScreen !== null) {
      this.currentScreen.exit();
    }

    this.getDisplay().clear();
    this.currentScreen = screen;

    if (this.currentScreen !== null) {
      this.currentScreen.enter();
      this.currentScreen.render(this.display);
    }
  },
};



