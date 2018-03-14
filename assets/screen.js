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
  player: null,

  enter() {
    console.log('enter play screen');

    const map = [];
    const mapWidth = 500;
    const mapHeight = 500;

    for (let x = 0; x < mapWidth; x += 1) {
      map.push([]);
      for (let y = 0; y < mapHeight; y += 1) {
        map[x].push(Game.Tile.nullTile);
      }
    }

    const generator = new ROT.Map.Cellular(mapWidth, mapHeight);
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
    this.player = new Game.Entity(Game.PlayerTemplate);

    const position = this.map.getRandomFloorPosition();
    this.player.setX(position.x);
    this.player.setY(position.y);
  },

  exit() {
    console.log('exit play screen');
  },

  render(display) {
    const screenWidth = Game.getScreenWidth();
    const screenHeight = Game.getScreenHeight();

    let topLeftX = Math.max(0, this.player.getX() - (screenWidth / 2));
    topLeftX = Math.min(topLeftX, this.map.getWidth() - screenWidth);

    let topLeftY = Math.max(0, this.player.getY() - (screenHeight / 2));
    topLeftY = Math.min(topLeftY, this.map.getHeight() - screenHeight);

    for (let x = topLeftX; x < topLeftX + screenWidth; x += 1) {
      for (let y = topLeftY; y < topLeftY + screenHeight; y += 1) {
        const glyph = this.map.getTile(x, y);
        display.draw(
          x - topLeftX,
          y - topLeftY, glyph.getChr(),
          glyph.getForeground(),
          glyph.getBackground(),
        );
      }
    }

    display.draw(this.player.getX() - topLeftX,
      this.player.getY() - topLeftY,
      this.player.getChr(),
      this.player.getForeground(),
      this.player.getBackground(),
    );
  },

  handleInput(inputType, inputData) {
    if (inputType === 'keydown') {
      if (inputData.keyCode === ROT.VK_UP) {
        this.move(0, -1);
      } else if (inputData.keyCode === ROT.VK_DOWN) {
        this.move(0, 1);
      } else if (inputData.keyCode === ROT.VK_LEFT) {
        this.move(-1, 0);
      } else if (inputData.keyCode === ROT.VK_RIGHT) {
        this.move(1, 0);
      }
    }
  },

  move(dX, dY) {
    const newX = this.player.getX() + dX;
    const newY = this.player.getY() + dY;

    this.player.tryMove(newX, newY, this.map);
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
