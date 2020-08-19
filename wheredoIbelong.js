function getIndexToIns(arr, num){
    let sortArr = arr.push(num);
    // for (var i = 0; i < sortArr.length; i++){
    //     if (sortArr[i] >= num){
    //         sortArr[i]
    //     }
    return sortArr;

}

console.log(getIndexToIns([40, 60], 50));