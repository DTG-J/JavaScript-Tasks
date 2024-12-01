document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputDaysEl = document.querySelector('#days-input');
    const inputHoursEl = document.querySelector('#hours-input');
    const inputMinutesEl = document.querySelector('#minutes-input');
    const inputSecondsEl = document.querySelector('#seconds-input');

    // Conversion values (in seconds)
    const values = {
        days: 86400,   // seconds in a day
        hours: 3600,   // seconds in an hour
        minutes: 60,   // seconds in a minute
        seconds: 1     // seconds in a second
    };

    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', handleSubmitEvent);
    });

    function handleSubmitEvent(e) {
        e.preventDefault();

        const currentInputEl = e.target.querySelector('input[type="number"]');
        const currentValue = Number(currentInputEl.value);

        if (isNaN(currentValue) || currentValue < 0) return;

        const key = currentInputEl.getAttribute('id').split('-input')[0];
        const multiplier = values[key];

        updateValues(currentValue * multiplier, key);
    }

    function updateValues(secondsAmount, skipKey) {
        if (skipKey !== 'days') {
            inputDaysEl.value = Number(secondsAmount / values.days).toFixed(2);
        }
        if (skipKey !== 'hours') {
            inputHoursEl.value = Number(secondsAmount / values.hours).toFixed(2);
        }
        if (skipKey !== 'minutes') {
            inputMinutesEl.value = Number(secondsAmount / values.minutes).toFixed(2);
        }
        if (skipKey !== 'seconds') {
            inputSecondsEl.value = Number(secondsAmount / values.seconds).toFixed(2);
        }
    }
}
