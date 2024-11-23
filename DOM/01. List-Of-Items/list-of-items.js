function addItem() {
const inputEl = document.querySelector('#newItemText');
const listEl = document.querySelector('#items');

    if (inputEl === '') return;

const newListItems = document.createElement('li');
newListItems.textContent = inputEl.value;
listEl.appendChild(newListItems);
inputEl.value = '';     
}
