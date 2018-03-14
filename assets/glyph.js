/**
 * Created by Shihao Shen on 2018/2/27
 */

Game.Glyph = function Glyph(properties) {
  this.chr = properties.character || ' ';
  this.foreground = properties.foreground || 'white';
  this.background = properties.background || 'black';

  this.getChr = () => {
    return this.chr;
  };

  this.getForeground = () => {
    return this.foreground;
  };

  this.getBackground = () => {
    return this.background;
  };
};

