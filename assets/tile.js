/**
 * Created by Shihao Shen on 2018/2/27
 */

Game.Tile = function Tile(properties) {
  const LocalProperties = properties || {};

  Game.Glyph.call(this, properties);

  this.isWalkable = LocalProperties.isWalkable || false;
  this.isDiggable = LocalProperties.isDiggable || false;

  this.getIsWalkable = () => {
    return this.isWalkable;
  };

  this.getIsDiggable = () => {
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

console.log(Game.Tile.floorTile);
