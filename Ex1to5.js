//Fibonacci

function fib(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

// how many times the function should run
console.log("Fibonacci: " + fib(7));

// //test example from internet
// function factorial(n) {
//   if (n == 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(3));

//////////////------ EXERCISES --------- //////////////////
//  Exercise 1 Improved
function sumToTen(n) {
  if (n == 0) {
    return n;
  } else {
    return n + sumToTen(n - 1);
  }
}

console.log("Ex1. The Sum: " + sumToTen(7));

//  Exercise 2.
// find minimun element in array with recursion // no loop
let arr = [34, 5, 23, 78, 98, 8, 100, 340, 23, 2, 48, 545, 32];
let size = arr.length - 1;

function findSmallest(arr, size) {
  if (size === 1) {
    return arr[0];
  } else if (arr[0] > arr[size]) {
    arr[0] = arr[size];
    return findSmallest(arr, size - 1);
  } else if (arr[0] < arr[size]) {
    return findSmallest(arr, size - 1);
  } else {
  }
}

console.log("Ex2: " + findSmallest(arr, size));

// Exercise 3.
// recursive function that returns the sum of all elements in an array
let newArr = [34, 546, 23, 12, 4, 68, 7, 54];
let newSize = newArr.length - 1;

function sumOfArray(arr, size) {
  if (size === 0) {
    return arr[0];
  } else {
    let val = arr[size];
    arr[0] = arr[0] + val;
    return sumOfArray(arr, size - 1);
  }
}

console.log("Ex3: " + sumOfArray(newArr, newSize));

//Exercise 4: check whether an array is a palindrome
let notPalinDroom = ["h", "a", "l", "l", "o"];
let palinDroom = ["m", "e", "e", "t", "s", "y", "s", "t", "e", "e", "m"];
let palinDromeSize = palinDroom.length;
let notPalinDromeSize = notPalinDroom.length;
let onno = ["o", "n", "n", "o"];

console.log(palinDroom[palinDroom.length - 1]);

function palinDrome(arr, size) {
  if (arr[arr.length - size - 1] === arr[size]) {
    if (size == 1 || size == 0) {
      return true;
    }
    return palinDrome(arr, size - 1);
  } else {
    return false;
  }
}

console.log("Ex4. :" + palinDrome(palinDroom, palinDromeSize));

//  Exercise 5
// recursive function that searches for a target in a sorted array using binary search

function searchTarget(arr, arrSize, target) {
  //check if the target is bigger or smaller then the middle
  // or is the middle
  //console.log(Math.ceil(arrSize / 2));

  let middle = arr[Math.floor(arrSize / 2)];
  //console.log(middle);

  if (
    target === middle ||
    target === arr[0] ||
    target === arr[arr.length - 1]
  ) {
    console.log(" from exercise 5 : found!!");
  } else if (target < middle) {
    console.log("smaller");
    arr = arr.slice(0, middle);
    console.log(arr);
    searchTarget(arr, arr.length, target);
  } else if (target > middle) {
    arr = arr.slice(middle, arr.length);
    console.log(arr);
    searchTarget(arr, arr.length, target);
  }
}

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(testArr.length);

searchTarget(testArr, testArr.length, 3);
