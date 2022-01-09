/*
 *
 * 1. write a recursive function that multiplies all numbers in the array
 * 2. write a recursive function that multiplies all numbers in the array, if any number in the array is negative, multiply it as a positive number
 * 3. write a recursive function that finds the largest number in the array
 * 4. write a recursive function that finds the first number between two given numbers a and b: findBetween(array, a, b)
 * 5. write a function that returns the n-th number on the 'funky series'. The 'funky series' is defined as follows:
 *   1st number F_1: 3
 *   2nd number F_2: 5
 *   any other number: 11 + ((F_(n-1)^2) / F_(n-2))
 *   (F_(n-1) squared divided by F_(n-2) -- then add 11 to the result
 *
 *   where F_(n-1) is the previous number on the 'Funky series', and F_(n-2) is the number before that
 */

// 1. write a recursive function that multiplies all numbers in the array
let arr = [2, 4, 7, 8, 9, 10];
let arrSize = arr.length;

function multiplyThemAll(arr, size) {
  let all = arr[size - 1];
  if (size === 1) {
    return all;
  }
  return all * multiplyThemAll(arr, size - 1);
}

console.log(multiplyThemAll(arr, arrSize));

// 2. write a recursive function that multiplies all numbers in the array,
// if any number in the array is negative, multiply it as a positive number
let arr2 = [8, 4, -6, 7];
let arr2Size = arr2.length;

function multiplyThem(arr, size) {
  let num = arr[size - 1];

  if (num < 0) {
    num *= -1;
  }

  if (size === 1) {
    return num;
  }

  return num * multiplyThem(arr, size - 1);
}

console.log(multiplyThem(arr2, arr2Size));

// 3. write a recursive function that finds the largest number in the array
let largeArr = [23, 546, 337, 6, 879, 54, 34, 343, 646];
let largeArrSize = largeArr.length;

function largestNum(arr, size) {
  let current = arr[size - 1];
  console.log(current);
  if (size === 1) {
    return current;
  } else {
    let maxOfRest = largestNum(arr, size - 1);
    console.log(maxOfRest);
    if (current > maxOfRest) {
      console.log(current);
      return current;
    } else if (maxOfRest > current) {
      console.log(maxOfRest);
      return maxOfRest;
    }
  }
}

console.log(largestNum(largeArr, largeArrSize));

//4. write a recursive function that finds the first number 
// between two given numbers a and b: findBetween(array, a, b) 
let testArr = [1,4,5,78,96,43,12,35,657,87,34]

function findBetween(arr, a, b){
  //base case
  if(a == b){
    let placeA = arr.indexOf(a)
    return arr[placeA +1]
  } 
  //recursive call
   return findBetween(arr, a, b-1)
}

console.log(findBetween(testArr, 5, 12))
