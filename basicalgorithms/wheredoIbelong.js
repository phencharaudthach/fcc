function getIndexToIns(arr, num){
    let sortArr = arr.concat(num).sort(function(a,b){return a-b});
    let numIndex = sortArr.indexOf(num);
    // for (var i = 0; i < sortArr.length; i++){
    //     if (sortArr[i] >= num){
    //         sortArr[i]
    //     }
    return numIndex;

}

console.log(getIndexToIns([2, 5, 10], 15));