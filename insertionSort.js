/*
Insertion Sort Algorithm:

- This function sorts an array using the insertion sort technique.


- We assume that the array from 0 to i-1 is already sorted.
- Then we take the element at index i (It is named current) and insert it into the the correct position inside the sorted array (from 0 to i-1).


*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // Loop 1: Loop from 2nd element to end
    let current = arr[i]; // Store current element
    let j = i - 1; // Start comparing from previous element

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // move right
      j--; // move left
    }

    arr[j + 1] = current; // Place current at its correct position
  }
  return arr;
}

// Example

console.log(insertionSort([5, 9, 7, 6, 9, 1, 2]));
