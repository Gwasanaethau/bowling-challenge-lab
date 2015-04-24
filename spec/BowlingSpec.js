describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('game frame', function() {
    it('has 1 frame', function() {
      expect(bowling.gameFrame()).toBe(1);
    });
  });

  describe('number of balls', function() {
    describe('ball 1', function() {
      it('number of pins knocked down is less than 11', function() {
        expect(bowling.pinsKnocked()).toBeLessThan(11);
      });
    });
  });
});
