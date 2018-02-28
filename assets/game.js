/**
 * Created by Shihao Shen on 2018/2/26
 */

const Game = {
  display: null,
  currentScreen: null,
  screenWidth: 80,
  screenHeight: 24,

  init() {
    const instance = this;

    this.display = new ROT.Display({ width: this.screenWidth, height: this.screenHeight });

    const bindEventToScreen = (event) => {
      window.addEventListener(event, (e) => {
        if (instance.currentScreen !== null) {
          instance.currentScreen.handleInput(event, e);
          instance.display.clear();
          instance.currentScreen.render(instance.display);
        }
      });
    };

    bindEventToScreen('keydown');
    // bindEventToScreen('keyup');
    // bindEventToScreen('keypress');
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

    this.display.clear();
    this.currentScreen = screen;
    if (!(this.currentScreen === null)) {
      this.currentScreen.enter();
      this.currentScreen.render(this.display);
    }
  },
};

window.onload = () => {
  if (!ROT.isSupported()) {
    alert("The rot.js library isn't supported by your browser.");
  } else {
    Game.init();
    document.body.appendChild(Game.getDisplay().getContainer());
    Game.switchScreen(Game.Screen.startScreen);
  }
};

