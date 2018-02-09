/**
 * Created by Shihao Shen on 2018/2/8
 */

Game.Map = function(tiles) {
  this.tiles = tiles;

  this.width = tiles.length;
  this.height = tile[0].length;

  this.getWidth = function() {
    return this.width;
  };

  this.getHeight = function() {
    return this.height;
  };

  this.getTile = function(x, y) {
    if (x < 0 || x > this.width || y < 0 || y > this.height) {
      return Game.Tile.nullTile;
    } else {
      return this.tiles[x][y] || Game.Tile.nullTile;
    }
  };
};