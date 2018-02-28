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
  map: null,

  enter() {
    console.log('enter play screen');

    const map = [];
    for (let x = 0; x < 80; x += 1) {
      map.push([]);
      for (let y = 0; y < 24; y += 1) {
        map[x].push(Game.Tile.nullTile);
      }
    }

    const generator = new ROT.Map.Cellular(80, 24);
    generator.randomize(0.5);

    const totalIterations = 3;
    for (let i = 0; i < totalIterations - 1; i += 1) {
      generator.create();
    }

    generator.create((x, y, v) => {
      if (v === 1) {
        map[x][y] = Game.Tile.floorTile;
      } else {
        map[x][y] = Game.Tile.wallTile;
      }
    });

    this.map = new Game.Map(map);
  },

  exit() {
    console.log('exit play screen');
  },

  render(display) {
    for (let x = 0; x < this.map.getWidth(); x += 1) {
      for (let y = 0; y < this.map.getHeight(); y += 1) {
        const glyph = this.map.getTile(x, y).getGlyph();
        display.draw(x, y, glyph.getChr(), glyph.getForeground(), glyph.getBackground());
      }
    }
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
