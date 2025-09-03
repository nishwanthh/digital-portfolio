// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Grab the input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    // Simple validation
    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
        return;
    }

    // Simulate successful submission
    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = 'green';

    // Reset the form
    document.getElementById('contactForm').reset();
});
