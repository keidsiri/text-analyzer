// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// Text Analyzer Update
  // Write a function that returns the three most used words

function mostWord(string) {
  let words = string.split(" ");
  let freqArr = {};
  word.forEach(function(word) {
    if (!freqArr[word]) {
      freqArr[word] = 0;
    } else {
      freqArr[word] += 1
    }
  });
  return freqArr;
}

//offensive word

function ommitOffensiveWords(text){
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  wordArray.forEach(function(element, index){
    if(element.toLowerCase() === "zoinks" || element.toLowerCase() === "muppeteer" || element.toLowerCase() === "biffaroni" || element.toLowerCase() === "loopdaloop"){
      wordArray[index] = "****";
    }
  });
  return wordArray.join(" ");
}

  //Write a UI function that only bolds the part of the word that matches

  function partialBold (word, text) {
    if (noInputtedWord(word, text)) {
      return "";
    }
    const wordArray = word.split("");
    const textArray = text.split("");
    let newArray = new Array();

    textArray.forEach(function(element, index) {
      if (text.includes(word)) {

      } else {
        return //orginal passage
      }
    });



  }

// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    const offensiveWords = ommitOffensiveWords(passage)
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
    $("#offensive").html(offensiveWords)
    
  
    // UI update:
    // $("#most-common").html(mostWord(passage));

  });
});


// day 3. p.27
// UI Logic

// function noInputtedWord() {
//   for (let i=0; i < arguments.length; i++) {
//     if (arguments[i].trim().length === 0) {
//       return true;
//     }
//   }
//   return false;
// }

// Business Logic

// function wordCounter(text) {
//   if (noInputtedWord(text)) {
//     return 0;
//   }
//   let wordCount = 0;
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(element) {
//     if (!Number(element)) {
//       wordCount++;
//     }
//   });
//   return wordCount;
// }