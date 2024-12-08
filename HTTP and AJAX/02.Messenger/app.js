function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    const outputEl = document.querySelector('#messages');                   //textAreaEL
    const inputs = document.querySelectorAll('#controls input[name]');     //Both elements name and message
    const submitBtnEl = document.querySelector('#submit');
    const refreshBtnEl = document.querySelector('#refresh');

    submitBtnEl.addEventListener('click', (e) => {
        const [author, content] = [...inputs].map(field => field.value);
        if (!author || !content) return; 

        const body = {author, content}

        fetch(baseUrl, {
            method: 'POST', 
            body: JSON.stringify(body)
        })
    })

    
 
    

    
}

attachEvents();