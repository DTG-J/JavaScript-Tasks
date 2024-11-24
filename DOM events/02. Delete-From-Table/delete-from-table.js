function deleteByEmail() {
   // Correctly select the input element
   const inputEl = document.querySelector('input[name="email"]');
   const searchStr = inputEl.value.trim().toLowerCase(); // Trim whitespace and convert to lowercase
   const people = document.querySelectorAll('table tbody tr td:nth-child(2)'); // Correct selector
   const resultEl = document.querySelector('#result');

   if (searchStr === '') return;

   // Search for a match
   const matchedEl = Array.from(people).find(person => 
       person.textContent.toLowerCase() === searchStr
   );

   if (matchedEl) {
       matchedEl.parentElement.remove(); // Remove the parent row
       resultEl.textContent = 'Deleted';
   } else {
       resultEl.textContent = 'Not found';
   }

   inputEl.value = ''; // Clear the input field
}
