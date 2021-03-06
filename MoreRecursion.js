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

/*
 * 5. write a function that returns the n-th number on the 'funky series'. The 'funky series' is defined as follows:
 *   1st number F_1: 3
 *   2nd number F_2: 5
 *   any other number: 11 + ((F_(n-1)^2) / F_(n-2))
 * 
 *   (F_(n-1) squared divided by F_(n-2) -- then add 11 to the result
 *
 *   where F_(n-1) is the previous number on the 'Funky series', and F_(n-2) is the number before that
 */

function funkySeries(n){
  //base case
  if(n == 2){
    return [3,5]
  }
  else {
    const numArr = funkySeries(n-1)
    numArr.push((((Math.pow(n-1,2)) / (n-2)) + 11 ))
    return numArr;
  }
}

console.log(funkySeries(6))


//Funky Series for number 5: //Logical Breakdown // I Think
/// n-1
console.log((5-1))
// n-1 squared by 2
console.log(Math.pow(5-1,2))
// 16

// n-2    ////// = 3
console.log((5-2))

// ((n-1)^2) / (n-2)
// 16 / 3  ////// = 5.33
console.log(16/3)

// + 11   /////////// 16.33
console.log((16/3) + 11)


//*** TESTING STUFF ***////

//try a double for loop
let testArr = [];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    testArr.push([i, j]);
  }
}

console.log(testArr);


// now the same "Double Loop" with recursion
let newTestArr = [];

function fillTestArr(n, x) {
  //base case
  if (n === 3) {
    return newTestArr;
  }
  if (x === 2) {
    newTestArr.push([n, x]);
    x = 0;
    return fillTestArr(n + 1, x);
  }

  newTestArr.push([n, x]);
  return fillTestArr(n, x + 1);
}

console.log(fillTestArr(0, 0));
