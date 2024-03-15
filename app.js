// // 1. Declare an empty array using JS literal notation to store student names in the future.
// let studentNamesLiteral = [];

// // 2. Declare an empty array using JS object notation to store student names in the future.
// let studentNamesObject = new Array();

// // 3. Declare and initialize a strings array.
// let stringsArray = ["apple", "banana", "orange"];

// // 4. Declare and initialize a numbers array.
// let numbersArray = [1, 2, 3, 4, 5];

// // 5. Declare and initialize a boolean array.
// let booleanArray = [true, false, true];

// // 6. Declare and initialize a mixed array.
// let mixedArray = ["apple", 1, true, null];

// // 7. Declare and Initialize an array and store available education qualifications in Pakistan.
// let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Displaying education qualifications
// document.write("Qualifications:<br>");
// for (let i = 0; i < educationQualifications.length; i++) {
//     document.write((i + 1) + ") " + educationQualifications[i] + "<br>");
// }

// // 8. Write a program to store 3 student names in an array. Take another array to store scores of these three students.
// let studentNames = ["John", "Alice", "Bob"];
// let studentScores = [400, 450, 480]; // Assuming total marks for each student is 500

// // Displaying student scores and percentages
// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (studentScores[i] / 500) * 100;
//     document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%<br>");
// }

// // 9. Initialize an array with color names and perform operations
// let colorNames = ["red", "blue", "green"];

// // a.
// let newColorBeginning = prompt("Enter a color to add to the beginning:");
// colorNames.unshift(newColorBeginning);
// document.write("Updated array after adding color to the beginning: " + colorNames.join(", ") + "<br>");

// // b.
// let newColorEnd = prompt("Enter a color to add to the end:");
// colorNames.push(newColorEnd);
// document.write("Updated array after adding color to the end: " + colorNames.join(", ") + "<br>");

// // c.
// colorNames.unshift("yellow", "purple");
// document.write("Updated array after adding two more colors to the beginning: " + colorNames.join(", ") + "<br>");

// // d.
// colorNames.shift();
// document.write("Updated array after deleting the first color: " + colorNames.join(", ") + "<br>");

// // e.
// colorNames.pop();
// document.write("Updated array after deleting the last color: " + colorNames.join(", ") + "<br>");

// // f.
// let indexToAdd = parseInt(prompt("Enter the index to add a color:"));
// let colorToAdd = prompt("Enter the color to add:");
// colorNames.splice(indexToAdd, 0, colorToAdd);
// document.write("Updated array after adding color at index " + indexToAdd + ": " + colorNames.join(", ") + "<br>");

// // g.
// let indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
// let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colorNames.splice(indexToDelete, numberOfColorsToDelete);
// document.write("Updated array after deleting color(s) at index " + indexToDelete + ": " + colorNames.join(", ") + "<br>");

// // 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// let studentScoresArray = [80, 65, 90, 75, 85];
// studentScoresArray.sort(function(a, b) {
//     return a - b;
// });
// document.write("Sorted student scores: " + studentScoresArray.join(", ") + "<br>");

// // 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
// let cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];
// let selectedCities = cities.slice(0, 3);
// document.write("Selected cities: " + selectedCities.join(", ") + "<br>");

// // 12. Write a program to create a single string from the array.
// let arr = ["This", "is", "my", "cat"];
// let singleString = arr.join(" ");
// document.write("Single string: " + singleString);

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
// let fifoArray = [];
// fifoArray.push("value1");
// fifoArray.push("value2");
// fifoArray.push("value3");

// // 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)
// let lifoArray = [];
// lifoArray.unshift("value1");
// lifoArray.unshift("value2");
// lifoArray.unshift("value3");

// // 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for (let i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");

// 1. Declare and initialize an empty multidimensional array. (Array of arrays)
// let emptyMultiArray = [];

// 2. Declare and initialize a multidimensional array representing the following matrix:
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// Write a program to print numeric counting from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.

// Taking input from the user for the table number and length
// let tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
// let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// // Printing the multiplication table
// console.log("Multiplication Table of " + tableNumber + " (Up to " + tableLength + " terms):");
// for (let i = 1; i <= tableLength; i++) {
//     console.log(tableNumber + " * " + i + " = " + (tableNumber * i));
// }

// Array of fruits
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// // Printing items using a for loop
// console.log("Fruits:");
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// 6. Generate the following series in your browser.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// console.log("Counting:");
// for (let i = 1; i <= 15; i++) {
//     console.log(i);
// }

// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// console.log("Reverse counting:");
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// console.log("Even:");
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// console.log("Odd:");
// for (let i = 1; i <= 19; i += 2) {
//     console.log(i);
// }

// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// console.log("Series:");
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i + "k");
// }

// // 7. Program to enable "search by user input" in an array.
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Enter the item you want to search:");
// let found = false;
// for (let i = 0; i < A.length; i++) {
//     if (A[i] === userInput) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     console.log("Yes, '" + userInput + "' is found in the list.");
// } else {
//     console.log("No, '" + userInput + "' is not found in the list.");
// }

// // 8. Program to identify the largest number in the given array.
// let arrayA = [24, 53, 78, 91, 12];
// let largestNumber = arrayA[0];
// for (let i = 1; i < arrayA.length; i++) {
//     if (arrayA[i] > largestNumber) {
//         largestNumber = arrayA[i];
//     }
// }
// console.log("The largest number in the array is: " + largestNumber);

// // 9. Program to identify the smallest number in the given array.
// let smallestNumber = arrayA[0];
// for (let i = 1; i < arrayA.length; i++) {
//     if (arrayA[i] < smallestNumber) {
//         smallestNumber = arrayA[i];
//     }
// }
// console.log("The smallest number in the array is: " + smallestNumber);

// // 10. Program to print multiples of 5 ranging 1 to 100.
// console.log("Multiples of 5 ranging from 1 to 100:");
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// let password = "example";

// if (password !== "") {
//     if (password.length <= 5) {
//         alert("Password must be greater than 5");
//     } else {
//         alert("OK");
//     }
// }

// let a = 1;
// let c = "Max";

// if (a === 1) {
//   if (c === "Max") {
//       alert("OK");
//   }
// }
// if (a === 1 && c === "Max") {
//   alert("OK");
// }

// let num1 = 5;
// let num2 = 5;

// if (num1 === num2 && num1 <= num2) {
//     alert("Both conditions are true");
// }

// let emptyArray = [];

// let arrayWithString = ["Hello"];

// let alphabet = ["h", "i", "j", "k"];
// alert(alphabet[2]); // This will display "j"

// let alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// let lengthOfArray = alphabet.length;
// console.log("Total length of array: " + lengthOfArray);

// let arrayWithOneElement = ["First element"];
// arrayWithOneElement[1] = "Second element";
// alert(arrayWithOneElement[1]); // This will display "Second element"

// let array = ["Hello"];
// array.push("World");
// alert(array[array.length - 1]); // This will display "World"

// let Alphabet = ["h", "i", "j", "k"];
// Alphabet.pop();
// console.log(Alphabet); // This will log ["h", "i", "j"]

// let Alphabet = ["h", "i", "j", "k"];
// Alphabet.push(123); // Adding a number to the end of the array
// console.log(Alphabet); // This will log ["h", "i", "j", "k", 123]

// 1. Remove the first element of an array.
// let sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();

// // 2. Add three number elements to the beginning of an array.
// sizes.unshift(1, 2, 3);

// // 3. Add a new element to the beginning of an array and create an alert with the new first element.
// let array = ["First element"];
// array.unshift("New first element");
// alert(array[0]);

// // 4. Insert "L" into the array between "M" and "XL".
// sizes.splice(2, 0, "L");

// // 5. Copy the first 3 sizes of the array and put them into a new array, regSizes.
// let regSizes = sizes.slice(0, 3);

// // 6. Add 2 elements after "dog" and remove "cat", "ox", and "duck".
// let pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(pets.indexOf("dog") + 1, 0, "elephant", "horse");
// pets.splice(pets.indexOf("cat"), 3);

// // 7. Remove "cat" and "ox".
// pets.splice(pets.indexOf("cat"), 1);
// pets.splice(pets.indexOf("ox"), 1);

// // 8. Reduce the array to "duck" and "frog" using slice.
// pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// pets = pets.slice(3, 5);

// // Chapter 17 - 20 (for Loops)

// // 1. Run a loop 10 times.
// for (let i = 0; i < 10; i++) {}

// // 2. Run a loop 12 times using <=.
// for (let i = 0; i <= 11; i++) {}

// // 3. Missing characters in the code are: ; ++ (
// for (let i = 0; i <= 4; i++) {}

// // 4. Run a loop 100 times using <.
// for (let count = 0; count < 100; count++) {}

// // 5. Run a loop 3 times using > and decrement with each iteration.
// for (let i = 3; i > 0; i--) {}

// // 6. Assign the number of elements in the array to a variable.
// let numberOfElements = pets.length;

// // 7. Set a variable named "flag" with an initial Boolean value.
// let flag = true;

// // 8. Limit the number of loops by the number of elements in the array "pets".
// for (let i = 0; i < pets.length; i++) {}

// // 9. Display the counter on the second iteration.
// for (let i = 0; i < 10; i++) {
//     if (i === 1) {
//         alert(i);
//         break;
//     }
// }

// // 10. Code for checking user name in an array.
// let userNames = ["John", "Alice", "Bob"];
// let userInput = prompt("Enter first name");
// for (let i = 0; i < userNames.length; i++) {
//     if (userInput === userNames[i]) {
//         alert("Enter");
//         break;
//     } else {
//         alert("Please write correct user name");
//         break;
//     }
// }

// // 11. Display an alert if a match isn't found.
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//     if (userInput === list[i]) {
//         alert("Match found");
//         matchFound = true;
//         break;
//     }
// }
// if (!matchFound) {
//     alert("Match not found");
// }

// // 12. Concatenate two arrays.
// let firstArr = ["a", "b", "c", "d", "e", "f"];
// let secondArr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < firstArr.length; i++) {
//     for (let j = 0; j < secondArr.length; j++) {
//         console.log(firstArr[i] + secondArr[j]);
//     }
// }
