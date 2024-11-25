document.addEventListener('DOMContentLoaded', solve);

function solve() {
   function focusedEventHandler(event){
    event.currenTarget.parentElement.classList.add('focused');
   }
    function blurredEventHandler(event){
        event.currenTarget.parentElement.classList.remove('focused');
   }

   const inputFields = document.querySelectorAll('input[type="text"]'); 

   [...inputFields].forEach(el => {
    el.addEventListener('focus', focusedEventHandler);
    el.addEventListener('blur', blurredEventHandler); 
   })

   
}