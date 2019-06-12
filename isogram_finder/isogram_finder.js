const IsogramFinder = function (word) {
  this.word = word.split('');
}

IsogramFinder.prototype.isIsogram = function () {
  let objectMaker = function (allLetters, letter) {
    (letter in allLetters) ? allLetters[letter] += 1 : allLetters[letter] = 1;
    return allLetters;
  }
  let wordObject = this.word.reduce(objectMaker, {})
  return Object.values(wordObject).every(frequency => frequency === 1);
}

module.exports = IsogramFinder;
