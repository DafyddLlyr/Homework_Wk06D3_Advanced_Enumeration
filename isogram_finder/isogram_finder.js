const IsogramFinder = function (word) {
  this.word = word.split('');
}

IsogramFinder.prototype.isIsogram = function () {
  let wordObject = this.word.reduce(function (allLetters, letter) {
    (letter in allLetters) ? allLetters[letter] += 1 : allLetters[letter] = 1;
    return allLetters;
  }, {})
  return Object.values(wordObject).every(frequency => frequency === 1);
}

module.exports = IsogramFinder;
