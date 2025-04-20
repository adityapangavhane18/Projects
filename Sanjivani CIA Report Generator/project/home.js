// Function to redirect based on role
function redirectToDashboard(role) {
    if (role === 'admin') {
        window.location.href = 'adminDashboard/index.html';
    } else if (role === 'faculty') {
        window.location.href = 'facultyDashboard/index.html';
    } else if (role === 'student') {
        window.location.href = 'studentDashboard/index.html';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("pass");
    const loginBoxHeading = document.querySelector(".loginBox h1");
    let selectedRole = "Student";

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Clear any previous error messages
        let errorMsg = document.getElementById("error-message");
        if (!errorMsg) {
            errorMsg = document.createElement("p");
            errorMsg.id = "error-message";
            errorMsg.style.color = "red";
            errorMsg.style.fontSize = "14px";
            errorMsg.style.marginTop = "16px";
            errorMsg.style.marginLeft = "0px";
            passwordInput.parentNode.insertBefore(errorMsg, passwordInput.nextSibling);
        }
        errorMsg.textContent = ""; // Clear old error messages

        // Prepare form data for sending
        const formData = new URLSearchParams();
        formData.append("username", usernameInput.value);
        formData.append("password", passwordInput.value);

        // Send data to PHP file using Fetch API
        fetch("login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData.toString()
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                redirectToDashboard(data.role); // Redirect based on the role
            } else {
                errorMsg.textContent = "Invalid username or password.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            errorMsg.textContent = "An error occurred. Please try again.";
        });
    });


    const loginAsButton = document.querySelector(".loginAs .btn");
    const contentDiv = document.querySelector(".content");

    loginAsButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Clear the existing content in the `content` div
        contentDiv.innerHTML = ""; 

        // Create a container for the new role buttons
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("role-button-container");

        // Create the "Login As Admin", "Login As Faculty", and "Login As Student" buttons
        const roles = ["Admin", "Faculty", "Student"];
        roles.forEach(role => {
            const roleButton = document.createElement("button");
            roleButton.textContent = `Login As ${role}`;
            roleButton.classList.add("roleBtn"); // Apply existing btn class for consistent styling
            roleButton.addEventListener("click", function() {
                // Update the loginBox heading and set selected role based on the clicked button
                selectedRole = role;
                loginBoxHeading.textContent = `LOGIN AS ${role.toUpperCase()}`;
            });
            buttonContainer.appendChild(roleButton);
        });

        // Add the button container to `content` div
        contentDiv.appendChild(buttonContainer);
    });
});
