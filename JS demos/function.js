function solve (num1, num2) {
    console.log(num1 + num2);
}

solve (5, 6);


function text (fullName, grade) {
   console.log (`The name is: ${fullName}, with grade: ${grade.toFixed(2)}`)  
   console.log('The name is: '+ fullName + ", with grade: " + grade.toFixed(2) );
   
}

text ('Koko', 5.3545);


let name = 'Dobro';
const age = 45;

name = 'Dobry Ivanov';

//age = 44;

console.log(name, age);

if (name == 'Dobry Ivanov') {
    var test = 123; 
    
}

console.log(test);  //we can use var outside the block of scope so it is not reconmmeded because of that.                   



