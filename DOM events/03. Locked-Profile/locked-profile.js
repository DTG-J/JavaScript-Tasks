document.addEventListener('DOMContentLoaded', solve);

function solve() {
    document.querySelector('main').addEventListener('click', (e) => {

        if (e.target.nodeName !== 'BUTTON') return;

        const profileEl = e.target.closest('.profile'); 
        const state = profileEl.querySelector('.radio-group input:checked').getAttribute('id');

        if (state.includes('Lock'))return;

        const hiddenFieldEl = profileEl.querySelector('hidden-fields');

        if (hiddenFieldEl.classList.contains('active')){
            hiddenFieldEl.classList.remove('active');
            e.target.textContent = 'Show less'
        }else{
            hiddenFieldEl.classList.add('active');
            e.target.textContent = 'Show more'
        }
        
       

    });
}