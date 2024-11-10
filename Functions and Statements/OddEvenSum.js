// function oddEvenSum (num){
  
//     const digits = Math.abs(num).toString().split('').map(Number);
//     const evenSum = digits.filter(d => d % 2 === 0).reduce ((sum, d) => sum + d, 0);
//     const oddSum = digits.filter(d => d % 2 !== 0).reduce ((sum, d) => sum + d, 0);

// console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
// }


function oddEvenSum (num){

    const digits = Math.abs(num).toString().split('').map(Number);

    let evenSum = 0; oddSum = 0; 
    digits.forEach(d => (d % 2 === 0) ? evenSum += d : oddSum += d);
  
    
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
    

oddEvenSum (1000435);