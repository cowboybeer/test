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

//  Recursion Exercises
//  Exercise 1.
let sum = 0;
function sumToTen(n) {
  if (n === 0) {
    return 0;
  } else if (n >= 0) {
    sum += n;
    //  console.log(sum);
    sumToTen(n - 1);
  }
  return sum;
}

console.log("Ex1. The Sum: " + sumToTen(8));

//  Exercise 2.
// find minimun element in array with recursion // no loop
let arr = [34, 5, 23, 78, 98, 8, 100, 340, 23, 2, 48, 545, 32];
let size = arr.length - 1;
let smallest = arr[0];

function findMinEl(arr, size) {
  // compare each number in the array to the next
  if (size > 0) {
    if (arr[size] > arr[size - 1]) {
      if (arr[size - 1] < smallest) {
        smallest = arr[size - 1];
      }
    }
    size--;
    //recall the function with the new size
    findMinEl(arr, size);
  }
  // keep the smallest one
  return smallest;
}

console.log("Ex2. The Smallest:" + findMinEl(arr, size));

// Exercise 3.
// recursive function that returns the sum of all elements in an array
let newArr = [34, 546, 23, 12, 4, 768, 7, 54];
let newSize = newArr.length - 1;
let newSum = 0;

function sumOfAll(arr, size) {
  if (size >= 0) {
    newSum += arr[size];
    //console.log(newSum);
    size--;
    sumOfAll(arr, size);
  }
  return newSum;
}

console.log("Ex3. the sum of all: " + sumOfAll(newArr, newSize));

//Exercise 4: check whether an array is a palindrome
let notPalinDroom = ["h", "a", "l", "l", "o"];
let palinDroom = ["m", "e", "e", "t", "s", "y", "s", "t", "e", "e", "m"];
let palinDromeSize = palinDroom.length - 1;
let notPalinDromeSize = notPalinDroom.length - 1;
let test = 0;

// return true or false.
function isPalindrome(arr, size) {
  // check if the first and last letter are the same
  if (arr[test] === arr[size]) {
    size--;
    test++;
    if (test - size !== 0) {
      isPalindrome(arr, size);
    }
    return true;
  } else if (arr[test] !== arr[size]) {
    return false;
  }
}

console.log(
  "Ex4. this is a palindrome: " + isPalindrome(palinDroom, palinDromeSize)
);
console.log(
  "Ex4. this is NOT a palindrome -> " +
    isPalindrome(notPalinDroom, notPalinDromeSize)
);

//  Exercise 5
// recursive function that searches for a target in a sorted array using binary search

let targetArr = [
  23, 3, 565, 53, 1, 12, 356, 688, 967, 231, 435, 768, 978, 354, 75, 23, 4253,
  343, 2565, 768, 453,
];
let targetArrSize = targetArr.length;

//sort number array // stack overflow:
targetArr.sort(function (a, b) {
  return a - b;
});

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
