// Number to String Conversion
// When any string or non-string value is added to a string, it always converts the non-string value to a string implicitly. When the string ‘Rahul’ is added to the number 10 then JavaScript does not give an error. It converts the number 10 to string ’10’ using coercion and then concatenates both strings.
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



// Boolean to Number
// When a Boolean is added to a Number, the Boolean value is converted to a number as it is safer and easier to convert Boolean values to Number values. A Boolean value can be represented as 0 for ‘false’ or 1 for ‘true’. 
// The Boolean value true is
// converted to number 1 and
// then operation is performed
let x2 = true + 2;

// The Boolean value false is
// converted to number 0 and
// then operation is performed
let y2 = false + 2;

console.log(x2);
console.log(y2);