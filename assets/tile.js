/**
 * Created by Shihao Shen on 2018/2/27
 */

Game.Tile = function Tile(properties) {
  Game.Glyph.call(this, properties);

  this.isWalkable = properties.isWalkable;
  this.isDiggable = properties.isDiggable;

  this.isWalkable = () => {
    return this.isWalkable;
  };

  this.isDiggable = () => {
    return this.isDiggable;
  };
};

Game.Tile.extend(Game.Glyph);

Game.Tile.nullTile = new Game.Tile({});
Game.Tile.floorTile = new Game.Tile({
  character: '.',
  isWalkable: true,
});
Game.Tile.wallTile = new Game.Tile({
  character: '#',
  foreground: 'goldenrod',
  isDiggable: true,
});
