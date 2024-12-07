function attachEvents() {
// Posts - http://localhost:3030/jsonstore/blog/posts
// Comments - http://localhost:3030/jsonstore/blog/comments

const baseUrl = 'http://localhost:3030/jsonstore/blog';

const selectPosts = document.querySelector('#posts');

const postTitleEl = document.querySelector('#post-title');
const postBodyel = document.querySelector('#post-body');
const postCommentsEl = document.querySelector('#post-comments'); 

document.querySelector('#btnLoadPosts').addEventListener('click', loadHandler);
document.querySelector('#btnViewPost').addEventListener('click', viewHandler);

function loadHandler(e) {

    selectPosts.innerHTML = '';

fetch(baseUrl + '/posts')
    .then(response => response.json())
    .then(posts =>{

        Object.values(posts).forEach(post => {
            const optionEl = document.createElement('option'); 
        })
    })

}






}

//attachEvents();