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








}

//attachEvents();