document.addEventListener("DOMContentLoaded", function () {
    // booking inputs
    let nameInput = document.getElementById('name-input');
    let peopleInput = document.getElementById('people-input');
    let phoneInput = document.getElementById('phone-input');
    let timeInput = document.getElementById('time-input');
    let submitInput = document.getElementById('book-button');

    // booking form
    let bookingForm = document.getElementById('booking');

    function logSubmit(event) {
        const bookingBody = {
            name: nameInput.value,
            people: peopleInput.value,
            phone: phoneInput.value,
            time: timeInput.value
        }
    
        console.log(JSON.stringify(bookingBody));
    }

    bookingForm.addEventListener("submit", logSubmit);
});