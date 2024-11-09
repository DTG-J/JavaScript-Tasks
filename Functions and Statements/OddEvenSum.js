function oddEvenSum (num){
    let evenSum = 0;
    let oddSum = 0; 
    const stringnum = num.toString().split('').map(Number);

    for (let i = stringnum [0]; i < stringnum - 1, i++;){

    if (stringnum % 2 == 0){
        evenSum +=stringnum
    }else {
        oddSum +=stringnum
    }
}
    return(evenSum, oddSum)
}

console.log (oddEvenSum (1000435));