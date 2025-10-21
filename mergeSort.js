
function mergeSort(arr) {

    if (arr.length == 0 || arr.length == 1) {
        return arr;
    }
    let leftArr = mergeSort(arr.slice(0, Math.round(arr.length/2)));
    let rightArr = mergeSort(arr.slice(Math.round(arr.length/2)));
    let result = merge(leftArr, rightArr);
    return result;
}

function merge(leftArr, rightArr) {
    let tempArr = [];
    let leftPointer = 0;
    let rightPointer = 0;
    while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
        if (leftArr[leftPointer] <= rightArr[rightPointer]) {
            tempArr.push(leftArr[leftPointer++]);
        }
        else {
            tempArr.push(rightArr[rightPointer++]);
        }
    }
    while (leftPointer < leftArr.length) {
        tempArr.push(leftArr[leftPointer++])
    }
    while (rightPointer < rightArr.length) {
        tempArr.push(rightArr[rightPointer++])
    }
    // console.log(tempArr);
    return tempArr;

}

// console.log(mergeSort([105, 79, 100, 110]));
// console.log(mergeSort([105]));
// console.log(mergeSort([]));
// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// console.log(mergeSort([1,2,3,4,5,6,7]));

