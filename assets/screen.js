/**
 * Created by Shihao Shen on 2018/2/7
 */

Game.Screen = {};

Game.Screen.templateScreen = {
  enter() {

  },

  exit() {

  },

  render(display) {

  },

  handleInput(inputType, inputData) {

  },
};

Game.Screen.startScreen = {
  enter() {

  },

  exit() {

  },

  render(display) {
    display.drawText(1, 1, '%c{yellow}Javascript Roguelike');
    display.drawText(1, 2, 'Press [Enter] to start!');
  },

  handleInput(inputType, inputData) {
    if (inputType === 'keydown') {
      if (inputData.keyCode === ROT.VK_RETURN) {
        Game.switchScreen(Game.Screen.playScreen);
      }
    }
  },
};

Game.Screen.playScreen = {
  enter() {

  },

  exit() {

  },

  render(display) {
    display.drawText(3, 5, '%c{red}%b{white}This game is so much fun!');
    display.drawText(4, 6, 'Press [Enter] to win, or [Esc] to lose!');
  },

  handleInput(inputType, inputData) {
    if (inputType === 'keydown') {
      if (inputData.keyCode === ROT.VK_RETURN) {
        Game.switchScreen(Game.Screen.winScreen);
      } else if (inputData.keyCode === ROT.VK_ESCAPE) {
        // Game.switchScreen(Game.Screen.loseScreen);
      }
    }
  },
};

Game.Screen.winScreen = {
  enter() {

  },

  exit() {

  },

  render(display) {
    for (let i = 0; i < 22; i++) {
      // Generate random background colors
      let r = Math.round(Math.random() * 255);
      let g = Math.round(Math.random() * 255);
      let b = Math.round(Math.random() * 255);
      let background = ROT.Color.toRGB([r, g, b]);
      display.drawText(2, i + 1, '%b{' + background + '}You win!');
    }
  },

  handleInput(inputType, inputData) {

  },
};