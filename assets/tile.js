/**
 * Created by Shihao Shen on 2018/2/8
 */

Game.Tile = function(glyph) {
  this.glyph = glyph;

  this.getGlyph = function() {
    return this.glyph;
  }
};

Game.Tile.nullTile = new Game.Tile(new Game.Glyph(null, null, null));
Game.Tile.floorTile = new Game.Tile(new Game.Glyph('.', null, null));
Game.Tile.wallTile = new Game.Tile(new Game.Glyph('#', 'goldenrod', null));



