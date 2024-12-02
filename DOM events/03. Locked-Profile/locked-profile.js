document.addEventListener('DOMContentLoaded', solve);

function solve() {
    document.querySelector('main').addEventListener('click', (e) => {

        if (e.target.nodeName !== 'BUTTON') return;

        const profileEl = e.target.closest('.profile'); 
        const state = profileEl.querySelector('input:checked').getAttribute('id');

        if (state.includes('Lock'))return;
        
        console.log(e.target);

    });
}