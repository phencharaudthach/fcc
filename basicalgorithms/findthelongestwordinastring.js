// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// function findLongestWordLength(str) {
//     return str.length;

//   }
  
//   

var findLongestWordLength = "The quick brown fox jumped over the lazy dog";
var newString = findLongestWordLength.split(" ");
var wordLength = 0; 
var longestWord;

for (var i = 0; i < newString.length; i++){
       if (newString[i].length > wordLength ){
           wordLength = newString[i].length;
           longestWord = newString[i];
       }
}
  
console.log("The longest word is", longestWord, "the length of it is", wordLength);
