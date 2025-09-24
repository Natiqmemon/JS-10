// // Functions
// // type of programming
// // 1) procedural programming

// // let a = 7;
// // a= 6;
// // console.log(a);



// // Fucntional Programming
// // block of code -- repeat (different value)
// // engine - particaular task perform

// // parameter --- variables
// // arguements --- values

// // Types of Functions

// // Declaration 
// // Function declaration

// // 1) Named Function
// // function greet(paramenter(varaibles)){
//     // block of code
//     // code statement
// // }
// // funtional call
// // greet(arg)

// // function greet(name){
// //     console.log(Hello ${name});
// // }
// // console.log(greet('ALi'));



// // sum of two numbers
// // function sum(a,b){
// //     console.log(a+b);
// //     // returning the value
// //     // function always returns value at the end
    
// // }
// // console.log(sum(50,10));




// function sum(a,b){
//     console.log("console output",a+b);
//     // returning the value
//     // function always returns value at the end
//     return a+b; // when we call the function in log then we get return value as a log
// }
// // console.log(sum(50,10));
// sum(50,10)

// /**
//  * @param {number} num 
//  */
// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }

// const userInput = prompt("Please enter a number:");

// const number = parseInt(userInput, 10);

// if (!isNaN(number)) {
//     checkEvenOdd(number);
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }


// const userInput = prompt("Please enter a number to calculate its square root:");
// const number = parseFloat(userInput);

// if (isNaN(number) || number < 0) {
//     console.log("Invalid input. Please enter a non-negative number.");
// } else {
//     const result = Math.sqrt(number);
//     console.log(The square root of ${number} is: ${result});
// }




// const userInput = prompt("Please enter a number:");
// const number = parseFloat(userInput);

// if (number > 0) {
//     console.log("Positive");
// } else if (number < 0) {
//     console.log("Negative");
// } else if (number === 0) {
//     console.log("Zero");
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }

// function findMax(a, b) {
//     return (a > b) ? a : b;
// }

// const input1 = prompt("Please enter the first number:");
// const input2 = prompt("Please enter the second number:");

// const num1 = parseFloat(input1);
// const num2 = parseFloat(input2);

// if (isNaN(num1) || isNaN(num2)) {
//     console.log("Invalid input. Please enter two valid numbers.");
// } else {
//     const maxNumber = findMax(num1, num2);
//     console.log(`The larger number is: ${maxNumber}`);
// }

const userInput = prompt("Please enter a number to print its multiplication table:");
const number = parseFloat(userInput);

if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}







