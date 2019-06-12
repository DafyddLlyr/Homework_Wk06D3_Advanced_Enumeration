const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () {
  let phraseArray = this.phrase.toLowerCase().split('')
  let cleanPhraseArray = phraseArray.filter(letter => letter !== /[^abc]/);
  return this.alphabet.every(letter => cleanPhraseArray.includes(letter))
}

module.exports = PangramFinder;
