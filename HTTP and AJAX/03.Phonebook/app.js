function attachEvents() {
    /* 
    REST API Methods

        loadContacts
        createContact
        deleteContact

    DOM API Methods

        createEntry
        deleteEntry

        loadEntriesHandler
        createEntryHandler
        deleteEntryHandler

*/

const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

function loadContacts(baseUrl, onSuccess){
    fetch(baseUrl)
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error));
}

function createContact(baseUrl, contact, onSuccess){
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(contact)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error))
}

}

attachEvents();