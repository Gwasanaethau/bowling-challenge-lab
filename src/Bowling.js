function Bowling() {
}

Bowling.prototype.gameFrame = function() {
  this.frameNumber = 1;
  return this.frameNumber;
};

Bowling.prototype.pinsKnocked = function() {
  return Math.floor(Math.random() * 11);
};
