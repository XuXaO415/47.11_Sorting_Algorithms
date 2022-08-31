function merge(arr1, arr2) {
    let results = []; // create empty array to hold results
    let i = 0; // set i to 0
    let j = 0; // set j to 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) { // if arr1[i] is less than arr2[j]
            results.push(arr1[i]); // add arr1[i] to results
            i++; // increment i
        } else {
            results.push(arr2[j]); // add arr2[j] to results
            j++; // increment j
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]); // add arr1[i] to results
        i++; // increment i
    }
    while (j < arr2.length) { // if arr1[i] is less than arr2[j]
        results.push(arr2[j]); // add arr2[j] to results
        j++; // increment j
    }

    return results;
}

function mergeSort(arr) {
    if (arr.length === 0) return []; // if arr is empty, return empty array
    if (arr.length === 1) return arr; // if arr is length 1, return arr
    const mid = Math.floor(arr.length / 2); // get midpoint of arr
    const left = mergeSort(arr.slice(0, mid)); // get left half of arr
    const right = mergeSort(arr.slice(mid)); // get right half of arr
    return merge(left, right); // merge left and right halves
}

module.exports = {
    merge,
    mergeSort
};