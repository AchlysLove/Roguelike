/**
 * Created by Shihao Shen on 2018/2/27
 */

Game.Glyph = function Glyph(chr, foreground, background) {
  this.chr = chr;
  this.foreground = foreground;
  this.background = background;

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

