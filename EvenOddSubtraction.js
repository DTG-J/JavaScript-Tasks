function solve(arr) {
    let evenNums = 0;
    let oddNums = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //         evenNums += arr[i];
    //     } else {
    //         oddNums += arr[i];
    //     }
    // }

    arr.forEach(element => {
        if (element % 2 === 0) {
                    evenNums += element;
                } else {
                    oddNums += element;
                }
    });

    console.log(evenNums - oddNums);
}

solve([1, 2, 3, 4, 5, 6]);
solve([3,5,7,9]);
solve([2,4,6,8,10])