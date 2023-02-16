function insertionSort(array) {
    const arr = array.slice();

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }
            else {
            break;
            }
        }
    }
    return arr;
}
const arr = [1,9,2,9,3445,13423,48,39,56543,68,12563,46,2,59,1,2534,99];

console.log(arr);
console.log(insertionSort(arr));