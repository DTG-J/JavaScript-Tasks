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
             Object.assign(optionEl.dataset, post);  //copies all  properties from post and sets them to dataset
                             // Those are equal expressions ===
        //    optionEl.dataset.id = post.id;
        //    optionEl.dataset.title = post.title;
        //    optionEl. dataset.body = post.body;
             optionEl.textContent = post.title;
             selectPosts.append(optionEl);
          
         });
    })
    .catch(error => console.error('Error: ', error)); 
}

function viewHandler(e) {
    fetch(baseUrl + '/comments')
        .then(response => response.json())
        .then(comments => {
            console.log(comments); 

            const optionEl = selectPosts.querySelector('option:checked');

            postTitleEl.textContent = optionEl.dataset.title;
            postBodyel.textContent = optionEl.dataset.body; 

          Object.values(comments).forEach(comment => {
            if ( comment.postId === optionEl.dataset.id ){
            const commentEl = document.createElement('li');
            commentEl.textContent = comment.text;
            postCommentsEl.append(commentEl)
            }
          })
        })
        .catch(error => console.error('Error: ', error));
    }
}

attachEvents();