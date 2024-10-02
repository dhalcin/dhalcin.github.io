
function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;

        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;

}



function mergeSort(arr) {
    if (arr.length === 1) return arr;

    const middle = Math.floor(arr.length / 2);
    // * Splitting the original array into 2 "equal" arrays, left and right
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

const lt = [3, 2, 1, 13, 8, 5, 0, 1];
const sortArray = mergeSort(lt);
console.log(sortArray);
