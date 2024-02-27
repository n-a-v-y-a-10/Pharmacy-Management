document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.querySelector('nav a[href="#login"]');
    const loginContainer = document.querySelector('.login-container');

    // Hide login form initially
    loginContainer.style.display = 'none';

    // Toggle login form visibility when login link is clicked
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (loginContainer.style.display === 'none') {
            loginContainer.style.display = 'block';
        } else {
            loginContainer.style.display = 'none';
        }
    });

    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form data
        const userId = document.getElementById('userId').value;
        const userType = document.getElementById('userType').value;
        const password = document.getElementById('password').value;

        // Example validation - You should implement proper validation
        if (userId.trim() === '' || password.trim() === '') {
            alert('Please enter user ID and password.');
            return;
        }

        // Example authentication - You should implement proper authentication
        if (userType === 'admin') {
            // Check if user is admin
            // Perform authentication logic for admin
            console.log('Admin login:', { userId, password });
        } else if (userType === 'customer') {
            // Check if user is customer
            // Perform authentication logic for customer
            console.log('Customer login:', { userId, password });
        }

        // Reset form after login attempt
        loginForm.reset();
        // Hide login form
        loginContainer.style.display = 'none';
    });
});
