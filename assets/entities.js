/**
 * Created by Shihao Shen on 2018/3/14
 */

Game.Mixins = {};

Game.Mixins.Moveable = {
  name: 'Moveable',
  tryMove(x, y, map) {
    const tile = map.getTile(x, y);
    if (tile.isWalkable()) {
      this.x = x;
      this.y = y;
      return true;
    } else if (tile.isDiggable()) {
      map.dig(x, y);
      return true;
    }
    return false;
  },
};

Game.PlayerTemplate = {
  character: '@',
  foreground: 'white',
  background: 'black',
  mixins: [Game.Mixins.Moveable],
};

