// Buiness logic

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (word.toLowerCase() === element.toLowerCase()) {
      wordCount++;
    }
  });
  return wordCount;
}