// scripts.js
document.getElementById('adorableContactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        fullName: document.getElementById('fullName').value,
        emailAddress: document.getElementById('emailAddress').value,
        messageText: document.getElementById('messageText').value
    };

    localStorage.setItem('contactFormData', JSON.stringify(formData));

    window.location.href = 'submit.html';
});
