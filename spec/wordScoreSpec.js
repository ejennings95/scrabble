describe("WordScore", function() {
  var wordScore;
  var letterScore;

  beforeEach(function() {
    wordScore = new WordScore();
    letterScore = jasmine.createSpyObj('letterScore', ['checkLetterScore']);
  });

  it("E, L, L, I, O, T, no bonus total score equates to 6", function() {
    wordScore.inputArrayOfLetterScore("E");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputArrayOfLetterScore("L");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputArrayOfLetterScore("L");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputArrayOfLetterScore("I");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputArrayOfLetterScore("O");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputArrayOfLetterScore("T");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputWordPoints();
    expect(wordScore.showWordPoints()).toEqual(6);
  });

  it("Words equates to 9, word bonus of 2", function() {
    wordScore.inputArrayOfLetterScore("W");
    (letterScore.checkLetterScore).and.returnValue(4);
    wordScore.inputArrayOfLetterScore("O");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputArrayOfLetterScore("R");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputArrayOfLetterScore("D");
    (letterScore.checkLetterScore).and.returnValue(2);
    wordScore.inputArrayOfLetterScore("S");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputWordTimesBonus(2);
    expect(wordScore.showTotalPoints()).toEqual(18);
  });

  it("Words equates to 14, word bonus of 3", function() {
    wordScore.inputArrayOfLetterScore("S");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputArrayOfLetterScore("C");
    (letterScore.checkLetterScore).and.returnValue(3);
    wordScore.inputArrayOfLetterScore("R");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputArrayOfLetterScore("A");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputArrayOfLetterScore("B");
    (letterScore.checkLetterScore).and.returnValue(3);
    wordScore.inputArrayOfLetterScore("B");
    (letterScore.checkLetterScore).and.returnValue(3);
    wordScore.inputArrayOfLetterScore("L");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputArrayOfLetterScore("E");
    (letterScore.checkLetterScore).and.returnValue(1);
    wordScore.inputWordTimesBonus(2);
    wordScore.inputWordTimesBonus(3);
    expect(wordScore.showTotalPoints()).toEqual(70);
  });

});
