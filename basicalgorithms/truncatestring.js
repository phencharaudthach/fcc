function truncateString(str, num) {
  //   var strArray = str.split('');
  var newStr = '';
  for (var i = 0; i < num; i++) {
    newStr += str[i];
  }
  //   return str;
  console.log(newStr + '...');
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
