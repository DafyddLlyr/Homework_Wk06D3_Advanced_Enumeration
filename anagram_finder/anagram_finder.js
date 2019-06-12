const AnagramFinder = function (word) {
  this.word = word;
  this.formattedWord = word.toLowerCase().split('')
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let correctLength = otherWords.filter(word => word.length === this.word.length)
  return correctLength.filter(word =>
    (this.formattedWord.every(letter => word.toLowerCase().includes(letter)))
    && (word !== this.word)
    && (word !== "") )
}

module.exports = AnagramFinder;
