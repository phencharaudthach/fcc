function chunkyArrayInGroups(arr, size){
    let newArray = [];
    
    for (var i = 0; i < arr.length; i+= size){
        newArray.push(arr.slice(i, i + size));
        console.log(i)
    }
    // return arr;
    console.log(newArray)
}

chunkyArrayInGroups(["a","b","c","d"], 2);
// output [["a","b"],["c","d"]]