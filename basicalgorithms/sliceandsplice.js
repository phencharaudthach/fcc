function frankenSplice(arr1, arr2, n) {
    var secondArray = arr2.slice();

    for (var i = 0; i < arr1.length; i++){
        secondArray.splice(n, 0, arr1[i]);
        console.log(arr1[i]);
        n++;
    }
    return secondArray;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
  
  // output should return [4,1,2,3,5,6]