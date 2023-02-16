//clean code:

function quickSort(array) {
    if (array.length <= 1) {
    return array;
    }

    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (const el of array.slice (0, array.length - 1)){
        el < pivot ? leftArr.push(el) : rightArr.push(el);
    }
        
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [1,9,2,7,3245,1523,44,39,55643,69,128,49,2,59,1,2344,96];

console.log(arr);
console.log(quickSort(arr));


    
/*
function quickSort(array) {
    if (array.length == 1) {
    return array;
    }

    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < array.length - 1; i++){
        if (array[i] < pivot) {
        leftArr.push(array[i]);
        }
        else {
        rightArr.push(array[i]);
        }
    }
        
    if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ..quickSort(rightArr)];
    }
    else if (leftArr.length > 0) {
        return [...quickSort(leftArr), pivot];
    }
    else {
        return [pivot, ...quickSort(rightArr)];
    }
}
const arr = [1,9,2,7,3245,1523,44,39,55643,69,128,49,2,59,1,2344,96];

console.log(arr);
console.log(quickSort(arr));

*/