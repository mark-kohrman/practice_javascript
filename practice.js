// // Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();


// // Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function (string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// // Write a method that accepts an array of numbers and returns the sum.
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// // Start with the hash: city_populations = {chi: 2700000}
// // Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// var cityPopulations = { chi: 2700000 };
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// Write a method that prints out every number from 1 to 100. 
// var i = 1;
// while (i < 101) {
//   console.log(i);
//   i += 1;
// }

// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
// var i = 1;
// while (i <= 100) {
//   console.log(i);
//   i += 2;
//   // }

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// function howManyFiftyFives(array) {
//   var i = 0;
//   var count = 0
//   while (i < array.length) {
//     if (array[i] === 55) {
//       (count += 1)
//     }
//     i += 1;
//   }
//   console.log(count)
// }
// howManyFiftyFives([2, 3, 55, 99, 2, 1, 55, 55, 55])


// // Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// // For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// var letters = ["a", "b", "c", "d", "e"];
// var awesome = "awesomesauce";
// var new_array = [];

// letters.forEach(function (letter) {
//   new_array.push(letter, awesome)
// })
// console.log(new_array)


// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}
// var itemAmounts = { chair: 5, table: 2 }
// itemAmounts.chair = 3;
// console.log(itemAmounts)



// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}
// var itemAmounts = { chair: 5, table: 2 }
// itemAmounts["desk"] = 7;
// console.log(itemAmounts)

// // Write a method that accepts a number and returns its factorial.
// // For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// var factorial = 5;
// var index = factorial;
// while (index > 1) {
//   (index -= 1) {
//     (factorial = factorial * index)
//   }

// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// Write a function that accepts an array of strings and returns a new array containing every other string from the original array.For example, if the input is["a", "b", "c", "d", "e", "f"], the output should be["a", "c", "e"].
// function selectEvenItems(strings) {
//   var result = [];
//   var index = 0;

//   strings.forEach(function (string) {
//     if (index % 2 === 0) {
//       result.push(string);
//     }
//     index++;
//   });
//   return result;
// }
// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// function factorial(number) {
//   var result = 1;
//   var currentNumber = number;
//   for (var i = 0; i < number; i++) {
//     result = result * currentNumber;
//     currentNumber = currentNumber - 1;
//   }
//   return result;
// }
// console.log(factorial(5));

// function sum(numbers) {
//   var currentSum = 0;
//   var i = 0;
//   while (i < numbers.length) {
//     currentSum = currentSum + numbers[i];
//     i++;
//   }
//   return currentSum;
// }

// console.log(sum([4, 9, 3, 2]));


// function minimum_string(strings) {
//   var currentMinimum = strings[0];
//   strings.forEach(function (string) {
//     if (string.length < currentMinimum.length) {
//       currentMinimum = string;
//     }
//   })
//   return currentMinimum
// }
// console.log(minimum_string(["hello", "goodbye", "hi", "sup"]));

// function aWords(strings) {
//   var aWordCount = 0;
//   strings.forEach(function (string) {
//     if (string[0] === "a") {
//       aWordCount++;
//     }
//   })
//   return aWordCount;
// }
// console.log(aWords(["apple", "igloo", "antartica", "evil", "alon musk"]));

// function commaJoiner(strings) {
//   var commaString = " ";
//   strings.forEach(function (string) {
//     commaString += string + ",";
//   })
//   return commaString;
// }

// console.log(commaJoiner(["what", "is", "up", "bro"]));

function product(numbers) {
  var product = 1;
  var i = 0;
  while (i < numbers.length) {
    product *= numbers[i];
    i += 1;
  }
  return product;
}
console.log(product([4, 5, 2, 9, 3])); 