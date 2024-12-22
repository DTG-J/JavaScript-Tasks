// The Number 10 is converted to
// string '10' and then '+'
// concatenates both strings   
let x = 10 + '20';
let y = '20' + 10;

// The Boolean value true is converted
// to string 'true' and then '+'
// concatenates both the strings
let z = true + '10';

console.log(x);
console.log(y);
console.log(z);




// String to Number Conversion
// When an operation like subtraction (-), multiplication (*), division (/), or modulus (%) is performed, all the values that are not numbers are converted into the number data type, as these operations can be performed between numbers only. Some examples of this are shown below.
// The string '5' is converted
// to number 5 in all cases
// implicitly
let w1 = 10 - '5';
let x1 = 10 * '5';
let y1 = 10 / '5';
let z1 = 10 % '5';

console.log(w1);
console.log(x1);
console.log(y1);
console.log(z1);