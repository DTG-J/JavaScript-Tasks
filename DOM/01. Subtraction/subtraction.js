function subtract() {
    
    const num1 = document.querySelector('#firstNumber'); 
    const num2 = document.querySelector('#secondNumber'); 
    const resultEl = document.querySelector('#result');
    const result = Number(num2.value)- Number(num1.value);
    resultEl.textContent = result;
    
}