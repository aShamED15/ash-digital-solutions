const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    // Remove old message if exists
    const oldMsg = document.querySelector('.form-message');
    if (oldMsg) oldMsg.remove();

    // Create message element
    const msg = document.createElement('p');
    msg.classList.add('form-message');

    if (name === '' || email === '' || message === '') {
        msg.textContent = 'Please fill in all fields.';
        msg.style.color = '#e74c3c';
    } else {
        msg.textContent = `Thank you, ${name}! Your message has been sent.`;
        msg.style.color = '#27ae60';
        form.reset();
    }

    // Show the message below the form
    form.appendChild(msg);
});