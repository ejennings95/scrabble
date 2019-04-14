function Game(wordScore) {
  this._totalPoints = 0;
  this._arrayOfLetterScores = [];
  this._arrayOfLetters = [];
  this._wordscore = wordScore;
}

Game.prototype.showTotalPoints = function () {
  this.inputTotalPoints();
  return this._totalPoints;
};

Game.prototype.inputTotalPoints = function () {
  this._totalPoints = this._wordscore.showPoints(this.showArrayOfLetterScores());
};

Game.prototype.showArrayOfLetterScores = function () {
  return this._arrayOfLetterScores;
};

Game.prototype.inputArrayOfLetterScore  = function (letter, tileBonus, letterScore = new LetterScore()) {
  this.inputArrayOfLetter(letter);
  this._arrayOfLetterScores.push(letterScore.checkLetterScore(letter, tileBonus));
};

Game.prototype.showArrayOfLetters = function () {
  return this._arrayOfLetters.join("");
};

Game.prototype.inputArrayOfLetter = function (letter) {
  this._arrayOfLetters.push(letter);
};
