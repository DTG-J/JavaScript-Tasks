function smallestNum(num1, num2, num3) {
    let result = 0; 
    if (num1 < num2 && num1 < num3) {
        result = num1;
    } else if (num2 < num3 && num2 < num1) {
        result = num2;
    } else {
        result = num3;
    }
    return result;
}








console.log (smallestNum (2, 5, 3)      ) //2
console.log (smallestNum (600, 342, 123))	//123
console.log (smallestNum (25, 21, 4)	   ) //4
console.log (smallestNum (2, 2, 2)	    )//2