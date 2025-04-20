<?php
session_start();

// Database connection
$servername = "localhost:4306";
$username = "root"; 
$password = ""; 
$dbname = "cia_report";  // Add database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    header('Content-Type: application/json');
    echo json_encode(["success" => false, "message" => "Database connection failed"]);
    exit();
}

// Retrieve form data
$inputUsername = $_POST['username'];
$inputPassword = $_POST['password'];
$response = ["success" => false]; // Default response

// Admin login validation
if ($inputUsername === 'Admin' && $inputPassword === 'Admin@123') {
    $response = ["success" => true, "role" => "admin"];
} else {
    // Faculty login validation
    $sqlFaculty = "SELECT * FROM add_facultys WHERE email = ? AND id = ?";
    $stmtFaculty = $conn->prepare($sqlFaculty);
    $stmtFaculty->bind_param("ss", $inputUsername, $inputPassword);
    $stmtFaculty->execute();
    $resultFaculty = $stmtFaculty->get_result();

    if ($resultFaculty->num_rows === 1) {
        $response = ["success" => true, "role" => "faculty"];
    } else {
        // Student login validation
        $sqlStudent = "SELECT * FROM add_students WHERE prn = ? AND prn = ?";
        $stmtStudent = $conn->prepare($sqlStudent);
        $stmtStudent->bind_param("ss", $inputUsername, $inputPassword);
        $stmtStudent->execute();
        $resultStudent = $stmtStudent->get_result();

        if ($resultStudent->num_rows === 1) {
            $response = ["success" => true, "role" => "student"];
        } else {
            $response = ["success" => false, "message" => "Invalid credentials"];
        }
        $stmtStudent->close();
    }
    $stmtFaculty->close();
}

// Send JSON response
header('Content-Type: application/json');
echo json_encode($response);

// Close connection
$conn->close();
?>
