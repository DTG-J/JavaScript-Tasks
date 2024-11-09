const nestedArray = [[1, 2], [3, 4], [5]];
const flatArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatArray); // Outputs [1, 2, 3, 4, 5]
