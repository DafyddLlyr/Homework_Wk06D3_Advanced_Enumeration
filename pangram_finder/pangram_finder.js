const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () {
  let phraseArray = this.phrase.toLowerCase().split('')
  return this.alphabet.every(letter => phraseArray.includes(letter))
}

module.exports = PangramFinder;
