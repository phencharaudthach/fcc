function mutation(arr){
    let firstString = arr[0].toLowerCase();
    let secondString = arr[1].toLowerCase();

    for (var letters = 0; letters < secondString.length; letters++){
        if (firstString.indexOf(secondString[letters]) < 0) return false;
    }
    return true;
}

console.log(mutation(['hello', 'hey']));