/**
 * Created by Shihao Shen on 2018/2/26
 */

Game.Screen = {};

Game.Screen.template = {
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
    console.log('enter start screen');
  },

  exit() {
    console.log('exit start screen');
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
    console.log('enter play screen');
  },

  exit() {
    console.log('exit play screen');
  },

  render(display) {
    display.drawText(3, 5, '%c{red}%b{white}This game is so much fun!');
    display.drawText(4, 6, 'Press [Enter] to win, or [Esc] to lose!');
  },

  handleInput(inputType, inputData) {
    if (inputType === 'keydown') {
      const id = inputData;
      if (id.keyCode === ROT.VK_RETURN) {
        Game.switchScreen(Game.Screen.winScreen);
      } else if (id.keyCode === ROT.VK_ESCAPE) {
        Game.switchScreen(Game.Screen.loseScreen);
      }
    }
  },
};

Game.Screen.winScreen = {
  enter() {
    console.log('enter win screen');
  },

  exit() {
    console.log('exit win screen');
  },

  render(display) {
    for (let i = 0; i < 22; i += 1) {
      // Generate random background colors
      const r = Math.round(Math.random() * 255);
      const g = Math.round(Math.random() * 255);
      const b = Math.round(Math.random() * 255);
      const background = ROT.Color.toRGB([r, g, b]);
      display.drawText(2, i + 1, '%b{' + background + '}You win!');
    }
  },

  handleInput(inputType, inputData) {

  },
};

Game.Screen.loseScreen = {
  enter() {
    console.log('enter lose screen');
  },

  exit() {
    console.log('exit lose screen');
  },

  render(display) {
    for (let i = 0; i < 22; i += 1) {
      display.drawText(2, i + 1, '%b{red}You lose! :(');
    }
  },

  handleInput(inputType, inputData) {

  },
};
