function Bowling() {
  this.frameNumber = 1;
  this.startPins = 10;
}

Bowling.prototype.gameFrame = function() {
  if (this.ballOne() === 0){
    this.message = "Strike, frame is over";
  } else {
    this.message ="Frame continues";
  }
  return this.message;
};

Bowling.prototype.ballOne = function() {
  var pinsDown = this.pinsKnocked(this.startPins);
  if (pinsDown === 10){
  var pinsLeft = 0;
  } else{
    pinsLeft = this.startPins - pinsDown;
  };
  return pinsLeft;
};

Bowling.prototype.ballTwo = function() {
  // var pinsDown = this.pinsKnocked(this.startPins);
  // if (pinsDown === 10){
  //   return "Strike";
  // };
  // this.ballTwo();
};

Bowling.prototype.frameScore = function() {
  if (this.message === "Strike, frame is over") {
    return 10;
  };
};

Bowling.prototype.pinsKnocked = function(pins) {
  range = pins + 1;
  return Math.floor(Math.random() * range);
};
