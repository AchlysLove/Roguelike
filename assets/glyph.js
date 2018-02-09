/**
 * Created by Shihao Shen on 2018/2/8
 */

Game.Glyph = function(char, foreground, background) {
  this.char = char;

  this.foreground = foreground;
  this.background = background;

  this.getChar = function() {
    return this.char;
  };


  this.getForeground = function() {
    return this.foreground;
  };

  this.getBackground = function() {
    return this.background;
  };
};