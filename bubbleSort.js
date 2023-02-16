function bubbleSort(array) {
    const arr = array.slice();
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++){
            if (arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
const arr = [1,5,4,2,356,158,41,38,53422,623,1234,45,2,588,1,2534,909];

console.log (arr);
console.log (bubbleSort(arr));
