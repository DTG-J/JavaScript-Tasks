function addItem() {
    
        const inputEl = document.querySelector('#newItemText'); // Select the input element
        const listEl = document.querySelector('#items'); // Select the <ul> element
    
        if (inputEl.value === '') return; // Check if input is empty
    
        // Create a new <li> element
        const newListItem = document.createElement('li');
    
        // Set the text content for the new item
        newListItem.textContent = inputEl.value;
    
        // Create the "Delete" button
        const deleteButton = document.createElement('a');
        deleteButton.textContent = '[Delete]';
        deleteButton.href = '#';
        deleteButton.style.marginLeft = '10px';
        deleteButton.style.color = 'var(--accent-color)';
        deleteButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            listEl.removeChild(newListItem); // Remove the item from the list
        });
    
        // Append the "Delete" button to the <li> item
        newListItem.appendChild(deleteButton);
    
        // Append the new item to the list
        listEl.appendChild(newListItem);
    
        // Clear the input
        inputEl.value = '';
    }
       
        
        

