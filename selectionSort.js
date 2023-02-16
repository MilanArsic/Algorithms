function selectionSort(array) {
    const arr = array.slice();

    for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j]<arr[minIndex]) {
        minIndex = j;
        }
      }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
return arr; 
}

const arr = [1,8,2,9,3245,15523,243,325,75643,68,15523,49,2,505,1,2354,98];

console.log(arr);
console.log(selectionSort(arr));