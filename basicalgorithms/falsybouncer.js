function bouncer(arr){

let allFalsyValues = [];
for (var i = 0; i < arr.length; i++){
    if (arr[i] !== false && arr[i] !== null && arr[i] !== "" && arr[i] !== 0 && arr[i] != NaN && arr[i] !== undefined ){
        allFalsyValues.push(arr[i]);
    }
}
return allFalsyValues

}

console.log(bouncer([7, "ate", false, 9, null, 0, NaN, "", undefined]));