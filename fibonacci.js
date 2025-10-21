function fibs(num) {
    if (num == 1) {
        return [0];
    }
    else if (num == 2) {
        return [0,1];
    }

    let fibArr = [0,1];
    for (let i=3; i<=num; i++) {
        let numToPush = fibArr[i-3] + fibArr[i-2];
        fibArr.push(numToPush)
    }
    return fibArr;
}


function fibsRec(num) {
    if (num === 0) {
        return [];
    }
    if (num === 1) {
        return [0];
    }
    if (num === 2) {
        return [0,1];
    }

    let prevArr = fibsRec(num-1);

    let fib1 = prevArr[prevArr.length-1];
    let fib2 = prevArr[prevArr.length-2];

    prevArr.push(fib1+fib2);

    return prevArr;
}


console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(4));
console.log(fibs(5));
console.log(fibs(6));

console.log('------------------------------');

console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(4));
console.log(fibsRec(5));
console.log(fibsRec(10));
