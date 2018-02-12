/**
 * Created by Shihao Shen on 2018/2/6
 */

const Game = {
  display: null,
  currentScreen: null,
  screenWidth: 80,
  screenHeight: 24,

  init() {
    const instance = this;

    instance.display = new ROT.Display({ width: this.screenWidth, height: this.screenHeight });

    const bindEventToScreen = (event) => {
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

  getScreenWidth() {
    return this.screenWidth;
  },

  getScreenHeight() {
    return this.screenHeight;
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

window.onload = () => {
  // Check if rot.js can work on this browser
  if (!ROT.isSupported()) {
    alert('The rot.js library isn\'t supported by your browser.');
  } else {
    Game.init();

    document.body.appendChild(Game.getDisplay().getContainer());

    Game.switchScreen(Game.Screen.startScreen);
  }
};

