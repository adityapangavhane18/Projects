// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const message = document.getElementById('message');
    const loginButton = document.getElementById('loginButton');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get values from the form fields
        const email = document.getElementById('email').value.trim();
        const name = document.getElementById('name').value.trim();
        const city = document.getElementById('city').value.trim();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation

        // Check if any field is empty
        if (email === "" || name === "" || city === "" || username === "" || password === "") {
            message.textContent = "All fields are required!";
            message.style.color = "red";
            return;
        }

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            message.textContent = "Please enter a valid email address!";
            message.style.color = "red";
            return;
        }

        // Password strength check (at least 6 characters, one uppercase, one number)
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordPattern.test(password)) {
            message.textContent = "Password must be at least 6 characters long, with at least one uppercase letter and one number.";
            message.style.color = "red";
            return;
        }

        // If everything is valid
        message.textContent = "Registration successful!";
        message.style.color = "green";

        // Display the "Click here to login" button
        loginButton.style.display = "block";
    });
});
