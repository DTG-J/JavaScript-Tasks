let numbers = [1, 4, 9];
let roots = numbers.map(function(num, i, arr) {
return Math.sqrt(num)
});
console.log (roots);

let nums = [10, 20, 30, 40, 50, 60, 70];
console.log(nums.length); // 7
console.log(nums.shift()); // 10 (removed element)
console.log(nums);



function solve(text, startIndex, count) {
let substring = text.substring(startIndex, startIndex + count);
console.log(substring);
}
solve("Hello world!", 6, 5)