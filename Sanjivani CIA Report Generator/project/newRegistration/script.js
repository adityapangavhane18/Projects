function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Create FormData object to send the form data
    var formData = new FormData(document.getElementById("student-reg-form"));

    // Make an AJAX request to send the data to demo.php
    fetch('demo.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // Assuming the server returns a plain text response
    .then(data => {
        // Check if the response indicates success
        if (data.includes("Data saved successfully")) {
            // Show success message
            document.getElementById("success-message").style.display = "block";
            
            // Clear form fields
            document.getElementById("student-reg-form").reset();
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}