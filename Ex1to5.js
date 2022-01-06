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

//////////////------ EXERCISES --------- //////////////////
//  Exercise 1 Improved
function sumToTen(n) {
  return n == 0 ? n : n + sumToTen(n - 1);
}
console.log("Ex1. The Sum: " + sumToTen(8));

//  Exercise 2.
// find minimum element in array with recursion // no loop
// like in the compare function ...
// subtract a from b and if the result is negative then a is smaller

let arr = [34, 5, 23, 78, 98, 8, 100, 340, 23, 2, 48, 545, 36];
let size = arr.length - 1;

function findSmallest(arr, size) {
  // compare a - b
  if (size === 0) {
    return;
  } 
}

console.log("Ex2: " + findSmallest(arr, size));

// Exercise 3.
// recursive function that returns the sum of all elements in an array
let newArr = [34, 546, 23, 12, 4, 68, 7, 54];
let newSize = newArr.length - 1;

function sumOfArray(arr, size) {
  return size === 0 ? arr[size] : (arr[size] += sumOfArray(arr, size - 1));
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

// Exercise 5
// Binary search formula : arr.length = (n/2)/2 = n/(2^k)

//  2^k means that ?? -> k will be the necessary numbers o iterations
//  at one point this will happen n/(2^k)=1;

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let testArrSize = testArr.length;

function binSearch(arr, arrSize, target) {
  let mid = arr[Math.floor(arrSize / 2)];
  console.log(mid);
  if (target === mid) {
    return arr[mid];
  } else if (target < mid) {
    //call again , but with half beginning of array
    return binSearch(arr.slice(0, mid), arrSize / 2, target);
  } else {
    return binSearch(arr.slice(mid, arrSize), arrSize / 2, target);
  }
}

binSearch(testArr, testArrSize, 9);

