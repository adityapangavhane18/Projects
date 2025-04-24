// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get the login form and register form
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('farmerRegisterForm');
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');
    const registerFormDiv = document.getElementById('registerForm');

    // Admin credentials
    const adminUsername = 'admin123';
    const adminPassword = '12345';

    // Show the register form when the register link is clicked
    registerLink.addEventListener('click', function () {
        loginForm.style.display = 'none';
        registerFormDiv.style.display = 'block';
    });

    // Show the login form when the login link is clicked
    loginLink.addEventListener('click', function () {
        registerFormDiv.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Validate login form
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const role = document.getElementById('role').value;

        // Check if username and password are empty
        if (username === "" || password === "") {
            alert("Username and password are required.");
            return;
        }

        // Admin login validation
        if (username === adminUsername && password === adminPassword && role === 'admin') {
            alert("Logged in as Admin successfully!");
            // You can redirect to admin dashboard or take other actions here
            // Example: window.location.href = '/admin-dashboard'; 
            return;
        }

        // Farmer login validation (optional, can be added if you have farmer credentials)
        if (role === 'farmer') {
            alert("Logged in as Farmer successfully!");
            // Perform actions for farmer login here
            // Example: window.location.href = '/farmer-dashboard';
            return;
        }

        // If the credentials are incorrect or the role is invalid
        alert("Invalid username, password, or role selected.");
    });

    // Validate registration form
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('registerName').value.trim();
        const username = document.getElementById('registerUsername').value.trim();
        const password = document.getElementById('registerPassword').value.trim();

        // Check if the required fields are empty
        if (fullName === "" || username === "" || password === "") {
            alert("All fields are required.");
            return;
        }

        // Optionally, you can add more validation (e.g., password strength, etc.)
        if (password.length < 6) {
            alert("Password should be at least 6 characters long.");
            return;
        }

        // If everything is valid, submit the registration form (or perform further actions)
        alert("Registration successful!");
        // Example of form submission (you can replace with actual submission)
        // registerForm.submit();
    });
});
