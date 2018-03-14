/**
 * Created by Shihao Shen on 2018/3/13
 */

Game.Entity = function Entity(properties) {
  Game.Glyph.call(this, properties);

  this.name = properties.name || '';
  this.x = properties.x || 0;
  this.y = properties.y || 0;
  this.attachedMixins = {};
  this.mixins = properties.mixins || [];

  for (let i = 0; i < this.mixins.length; i += 1) {
    Object.keys(this.mixins[i]).forEach((key) => {
      if (key !== 'init' && key !== 'name') {
        this[key] = this.mixins[i][key];
      }
    });
    this.attachedMixins[this.mixins[i].name] = true;
    if (this.mixins[i].init) {
      this.mixins[i].init.call(this, properties);
    }
  }

  this.setName = (name) => {
    this.name = name;
  };

  this.setX = (x) => {
    this.x = x;
  };

  this.setY = (y) => {
    this.y = y;
  };

  this.getName = () => {
    return this.name;
  };

  this.getX = () => {
    return this.x;
  };

  this.getY = () => {
    return this.y;
  };

  this.hasMixin = (obj) => {
    if (typeof obj === 'object') {
      return this.attachedMixins[obj.name];
    }

    return this.attachedMixins[obj];
  };
};

