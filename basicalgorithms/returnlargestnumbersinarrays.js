// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    // You can do this!
    
    var largestNumArray = [];
    for (var i = 0; i < arr.length; i++){
        var largestNum = arr[i][0]; 
        for (var j =0; j < arr.length; j++){
            if (largestNum < arr[i][j]){
                largestNum = arr[i][j];
                console.log(largestNum);
            }
        }
        
        largestNumArray.push(largestNum);
    }
    console.log(largestNumArray);
    console.log(arr[0][0]);
  } 
 
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);