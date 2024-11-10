
function checkForPalindrome(numbers){

    const isPalindrome = (num) => {
        const strNum = num.toString(); 
        const strNumReverced = strNum.split('').reverse().join('');

        return strNum===strNumReverced;

    }

    numbers.forEach(num => console.log (isPalindrome (num)));
    
}



checkForPalindrome ([123,323,421,121])	//false true false true
