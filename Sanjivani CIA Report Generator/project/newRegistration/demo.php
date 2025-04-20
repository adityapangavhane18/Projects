<?php
$insert = false;
if (isset($_POST['prn'])) {
    // Set connection variables
    $server = "localhost:4306";
    $username = "root";
    $password = "";

    // Create a database connection
    $con = mysqli_connect($server, $username, $password);

    // Check for connection success
    if (!$con) {
        die("Connection to this database failed due to: " . mysqli_connect_error());
    }

    // Collect POST variables
    $name = $_POST['name'];
    $prn = $_POST['prn'];
    $dob = $_POST['dob'];
    $class = $_POST['class'];
    $dept = $_POST['dept'];
    $sql = "INSERT INTO `cia_report`.`new_registration`(name, prn, dob, class, dept) 
            VALUES ('$name', '$prn', '$dob', '$class', '$dept');";

    // Execute the query
    if ($con->query($sql) === true) {
        // Flag for successful insertion
        echo "Data saved successfully";
    } else {
        echo "ERROR: $sql <br> $con->error";
    }

    // Close the database connection
    $con->close();
}
?>