/**
 * Created by Shihao Shen on 2018/2/27
 */

Game.Map = function Map(tiles) {
  this.tiles = tiles;
  this.width = tiles.length;
  this.height = tiles[0].length;

  this.getWidth = () => {
    return this.width;
  };

  this.getHeight = () => {
    return this.height;
  };

  this.getTile = (x, y) => {
    if (x < 0 || x > this.width || y < 0 || y > this.height) {
      return Game.Tile.nullTile;
    }

    return this.tiles[x][y];
  };

  this.dig = (x, y) => {
    if (this.getTile(x, y).isDiggable) {
      this.tiles[x][y] = Game.Tile.floorTile;
    }
  };

  this.getRandomFloorPosition = () => {
    let x = 0;
    let y = 0;

    do {
      x = Math.floor(Math.random() * this.width);
      y = Math.floor(Math.random() * this.height);
    } while (this.getTile(x, y) !== Game.Tile.floorTile);

    return { x, y };
  };
};
