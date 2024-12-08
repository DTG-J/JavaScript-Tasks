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
        .then(response => response.json())
        .then(result => {
            refreshBtnEl.click();
        })
        .catch(error => console.error('Error: ', error));
    });

    refreshBtnEl.addEventListener('click', (e) =>{

        outputEl.textContent = '';

        fetch(baseUrl)
            .then(response => response.json())
            .then(messages => {
                Object.values(messages).forEach(message => {
                    console.log(messages);
                    outputEl.textContent = outputEl.textContent.trimEnd()
                })
            .catch(error => console.error('Error: ', error));
            })

    })

    
 
    

    
}

attachEvents();