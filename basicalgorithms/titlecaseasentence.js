function titleCase(str) {
    var words = str.toLowerCase().split(' ');
    // return newString;
    var updatedSentence = [];

  for (var i = 0; i < words.length; i++){
       updatedSentence.push(words[i].replace(words[i][0], words[i][0].toUpperCase()));
    // console.log(newString[i][0].toUpperCase());
  }
  return updatedSentence.join(" ")
}
  console.log(titleCase("I'm a little tea pot"));