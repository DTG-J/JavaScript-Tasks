document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const emailEl = document.querySelector('#email');
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    emailEl.addEventListener('input', (event) => {
        const value = event.currentTarget.value;

        if (!pattern.test(value)) {
            event.currentTarget.classList.add('error');
        } else {
            event.currentTarget.classList.remove('error');
        }
    });
}
