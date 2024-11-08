
// function addSubtract (num1, num2, num3){
//     const sum = num1 + num2;
//     const result = sum - num3;
//     return result;
// }

function addSubtract (num1, num2, num3){
    const sum = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    return subtract (sum (num1, num2), num3);
}

console.log (addSubtract (23, 6, 10)  )   //19
console.log (addSubtract (1, 17, 30)  )   //-12
console.log (addSubtract (42, 58, 100))	//0
