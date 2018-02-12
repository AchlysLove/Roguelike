/**
 * Created by Shihao Shen on 2018/2/8
 */

Game.Glyph = function Glyph(char, foreground, background) {
  this.char = char;

  this.foreground = foreground;
  this.background = background;

  this.getChar = () => {
    return this.char;
  };


  this.getForeground = () => {
    return this.foreground;
  };

  this.getBackground = () => {
    return this.background;
  };
};