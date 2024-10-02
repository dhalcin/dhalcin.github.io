function fibs(num) {
    let numbers = [0, 1];

    for (let i = 2; i < num; i++) {
        let sum = numbers[i - 2] + numbers[i - 1];
        numbers.push(sum);
    }

    return numbers;
}

const fibonacci = fibs(8);
console.log(fibonacci); 

function fibsRec(num, arr = [0, 1]) {

    let len = arr.length;

    if (len === num) return arr; 
    let sum = arr[len - 1] + arr[len - 2];
    arr.push(sum);

    return fibsRec(num, arr);
}

console.log(fibsRec(8));
