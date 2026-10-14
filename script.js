// Select the form
const form = document.querySelector('.contact-form');

// When the form is submitted
form.addEventListener('submit', function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values from the inputs
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Success message
    alert('Thank you, ' + name + '! Your message has been sent.');

    // Clear the form
    form.reset();
});