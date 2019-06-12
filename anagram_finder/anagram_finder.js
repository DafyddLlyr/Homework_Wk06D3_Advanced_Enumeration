const AnagramFinder = function (word) {
  this.word = word;
  this.formattedWord = word.toLowerCase().split('')
}

AnagramFinder.prototype.correctLength = function (word) {
  return (word.length === this.word.length);
}

AnagramFinder.prototype.checkAllLetters = function (word) {
  return (this.formattedWord.every (
    letter => word.toLowerCase().includes(letter)
  )
)
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter(word =>
    (this.correctLength(word)) &&
    (this.checkAllLetters(word)) &&
    (word !== this.word) &&
    (word !== "")
  )
}

module.exports = AnagramFinder;
