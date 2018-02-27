/**
 * Created by Shihao Shen on 2018/2/27
 */

Game.Tile = (glyph) => {
  this.glyph = glyph;

  this.getGlyph = () => {
    return this.glyph;
  };
};

Game.Tile.nullTile = new Game.Tile(new Game.Glyph());
Game.Tile.floorTile = new Game.Tile(new Game.Glyph('.'));
Game.Tile.wallTile = new Game.Tile(new Game.Glyph('#', 'goldenrod'));
