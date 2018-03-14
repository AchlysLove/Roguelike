/**
 * Created by Shihao Shen on 2018/2/27
 */

Game.Glyph = function Glyph(properties) {
  const localProperties = properties || {};

  this.chr = localProperties.character || ' ';
  this.foreground = localProperties.foreground || 'white';
  this.background = localProperties.background || 'black';

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

