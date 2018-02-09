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
  map: null,

  enter() {
    let map = [];
    for (let x = 0; x < 80; x++) {
      map.push([]);
      for (let y = 0; y < 24; y++) {
        map[x].push(Game.Tile.nullTile);
      }
    }

    let generator = new ROT.Map.Cellular(80, 24);
    generator.randomize(0.5);

    let totalIterations = 3;
    for (let i = 0; i < totalIterations - 1; i++) {
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

  },

  render(display) {
    for (let x = 0; x < this.map.getWidth(); x++) {
      for (let y = 0; y < this.map.getHeight(); y++) {
        let glyph = this.map.getTile(x, y).getGlyph();
        display.draw(x, y, glyph.getChar(), glyph.getForeground(), glyph.getBackground());
      }
    }
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