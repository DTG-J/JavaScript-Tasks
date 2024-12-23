//https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/?fbclid=IwY2xjawGOETBleHRuA2FlbQIxMAABHUuK91hELs9g3AgmyDt5alhUt8w_i9oq1rC_WATgiJK87kumAyt9jVT0Lw_aem_0V3o6h8HXDZ9AgZO3_FJUw
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

// String conversion
// To explicitly convert values to a string apply the String() function. Implicit coercion is triggered by the binary + operator, when any operand is a string:
String(123) // explicit
123 + ''    // implicit




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


// Numeric conversion
// For an explicit conversion just apply the Number() function, same as you did with Boolean() and String() .

// Implicit conversion is tricky, because it’s triggered in more cases:

// comparison operators (>, <, <=,>=)
// bitwise operators ( | & ^ ~)
// arithmetic operators (- + * / % ). Note, that binary+ does not trigger numeric conversion, when any operand is a string.
// unary + operator
// loose equality operator == (incl. !=).
// Note that == does not trigger numeric conversion when both operands are strings.



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




// The Equality Operator
// The equality operator (==) can be used to compare values irrespective of their type. This is done by coercing a non-number data type to a number. 
// Should output 'true' as string '10'
// is coerced to number 10
let x3 = (10 == '10');

// Should output 'true', as boolean true
// is coerced to number 1
let y3 = (true == 1);

// Should output 'false' as string 'true'
// is coerced to NaN which is not equal to
// 1 of Boolean true
let z3 = (true == 'true');

console.log(x3);
console.log(y3);
console.log(z3);


//   In JavaScript, Map coercion refers to the automatic conversion of an object or an iterable (such as an array) into a Map using the Map constructor. This coercion happens implicitly when an object or iterable with key-value pairs is provided as an argument to the Map constructor.

// Example: Here, the array keyValuePairs contains nested arrays representing key-value pairs. When this array is passed as an argument to the Map constructor, it is coerced into a Map, and the resulting Map (myMap) contains the key-value pairs from the array.
  // Map coercion using the Map constructor

const keyValuePairs = [
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
  ];
  
  const myMap = new Map(keyValuePairs);
  
  console.log(myMap);


  