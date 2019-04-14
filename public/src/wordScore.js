function WordScore() {
  this._wordPoints = 0;
  this._wordTimesBonus = [];
  this._points = 0;
}

WordScore.prototype.showWordPoints = function () {
  return this._wordPoints;
};

WordScore.prototype.inputWordPoints = function (letterScore) {
  var count = 0
  while (count < letterScore.length) {
    this._wordPoints += (letterScore[count])
    count ++
  }
};

WordScore.prototype.showWordTimesBonus = function () {
  return this._wordTimesBonus;
};

WordScore.prototype.inputWordTimesBonus = function (tileBonus) {
  this._wordTimesBonus.push(tileBonus);
};

WordScore.prototype.showPoints = function (letterScore) {
  this.inputWordPoints(letterScore);
  this.bonusCheck();
  return this._points;
};

WordScore.prototype.bonusCheck = function () {
  var bonuses = this.showWordTimesBonus();
  if (bonuses.length === 0) {
    this._points = this._wordPoints
  } else {
    var count = 0
    while (count < bonuses.length) {
      this._points += (this.showWordPoints() * bonuses[count])
      count ++
    }
  }
};
