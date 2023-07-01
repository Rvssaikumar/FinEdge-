// Get form elements
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Validate form inputs
    if (validateForm()) {
        // Form inputs are valid, perform form submission logic here
        console.log('Form submitted');
        // You can add code here to send the form data to a server or perform any other desired action
        // Note: This is a placeholder, the form submission logic needs to be implemented
    }
});

// Form input validation
function validateForm() {
    let isValid = true;

    // Reset input error styles
    nameInput.classList.remove('error');
    emailInput.classList.remove('error');
    messageInput.classList.remove('error');

    // Validate name
    if (nameInput.value.trim() === '') {
        isValid = false;
        nameInput.classList.add('error');
    }

    // Validate email
    if (!isValidEmail(emailInput.value.trim())) {
        isValid = false;
        emailInput.classList.add('error');
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        isValid = false;
        messageInput.classList.add('error');
    }

    return isValid;
}

// Email validation
function isValidEmail(email) {
    // Simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
