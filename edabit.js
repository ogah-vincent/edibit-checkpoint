

//Write a function that determines whether three cards constitute a valid set.
 
function isSet(cards) {
     // Check if all properties are either the same or different for each card

  for (let property of ["color", "number", "shade", "shape"]) {
    let values = cards.map(card => card[property]);
    if ((new Set(values)).size === 2) {
      return false;
    }
  }
  return true;
}


//Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr) {
    return arr[0];
  }


  /*
  Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

  Examples
  minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
  
  minMax([2334454, 5]) ➞ [5, 2334454]
  
  minMax([1]) ➞ [1, 1]
  */
  

  function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
    }
    return [min, max];
  }


  /*
  Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

  Examples
  toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
  
  toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
  
  toArray({}) ➞ []
*/

  function toArray(obj) {
    return Object.entries(obj);
  }
  console.log(toArray({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]
  console.log(toArray({ shrimp: 15, tots: 12 })); // [["shrimp", 15], ["tots", 12]]
  console.log(toArray({})); // []

/*
  Create a function that concatenates n input arrays, where n is variable.

Examples
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4] */


function concat(...args) { // or (...arrays) still the same
    return [].concat(...args);
  }
  concat([1, 2, 3], [4, 5], [6, 7]); // [1, 2, 3, 4, 5, 6, 7]
  concat([1], [2], [3], [4], [5], [6], [7]); // [1, 2, 3, 4, 5, 6, 7]
  concat([1, 2], [3, 4]); // [1, 2, 3, 4]
  concat([4, 4, 4, 4, 4]); // [4, 4, 4, 4, 4]
  
/*
  Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

  Examples
  arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
  
  arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
  
  arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
*/

  function arrayOfMultiples(num, length) {
    let result = [];
    for (let i = 1; i <= length; i++) {
      result.push(num * i);
    }
    return result;
  }

  console.log(arrayOfMultiples(7, 5)); // Output: [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)); // Output: [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)); // Output: [17, 34, 51, 68, 85, 102]
