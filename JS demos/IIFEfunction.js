// What is the (function() { } )() construct in JavaScript?
// Last Updated : 22 Dec, 2023
// If you've ever played around with JavaScript, you might have seen this expression. It's like a strange set of symbols, but it has a special name that is an immediately invoked function expression, or IIFE. In this article, we will understand each element of the expression as well as the functionalities with the help of examples.

// Let's start with the detailed definition of the expression to understand its functionalities.

// (function() { } )() Construct
// This expression is immediately invoked function expression. It has two parts - function declaration (function() {}) and invocation (). This (function() {}) defines an anonymous function. This is enclosed by () indicates the function() {} is an expression not just a declaration. The () immediately invokes the function.

// Although the (function() { } )() may appear to be an odd combination of curly braces and parenthesis, it has a specific function in JavaScript.

// Syntax:
// (function() { } )() 
// Parameters:
// (function() { } ): An anonymous function expression is denoted by the function() { } enclosed in parenthesis.
// (): The function's expression is invoked or called right away by the following pair of parentheses(), which are outside the first set.
// Example 1: In this example, this expression creates a local scope, preventing the counter variable from polluting the global scope. This encapsulation is beneficial, especially in larger applications where avoiding global variable conflicts is crucial.