/**
 * Created by Shihao Shen on 2018/2/26
 */

const Game = {
  display: null,
  currentScreen: null,

  init() {
    const instance = this;

    this.display = new ROT.Display({ width: 80, height: 24 });

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

