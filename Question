// TESTING SINGLE LOOP
let Arr = [];
for (let i = 0; i < 3; i++) {
  Arr.push([i]);
}
console.log(Arr);

//try a double for loop
let testArr = [];
for (let i = 0; i < 4; i++) {
  testArr.push([]);
  for (let j = 0; j < 4; j++) {
    testArr[i].push(j);
  }
}

console.log(testArr);
/****
// now the same "Double loop" with recursion. ???
let newTestArr = [];

function fillTestArr(n, x) {
  //base case
  if (n == 4) {
    return newTestArr;
  }
  if (x == 4) {
    // x = 0;

    return fillTestArr(n + 1, (x = 0));
  }

  //this line needs to execute four times instead of 16 times
  newTestArr.push([]);
  newTestArr[n].push(x);

  return fillTestArr(n, x + 1);
}

console.log(fillTestArr(0, 0));
