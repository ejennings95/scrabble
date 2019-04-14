describe("LetterScore", function() {
  var letterScore;

  beforeEach(function() {
    letterScore = new LetterScore();
  });

  it("A equates to 1, no bonus", function() {
    letterScore.checkLetterScore("A");
    expect(letterScore.showLetterScore()).toEqual(1);
  });

  it("A equates to 1, bonus of 2", function() {
    letterScore.checkLetterScore("A", 2);
    expect(letterScore.showLetterScore()).toEqual(2);
  });

  it("K equates to 5, bonus of 3", function() {
    letterScore.checkLetterScore("K", 3);
    expect(letterScore.showLetterScore()).toEqual(15);
  });

});
