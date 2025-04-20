<?php
$insert = false;
// Set connection variables
$server = "localhost:4306";
$username = "root";
$password = "";

// Create a database connection
$con = mysqli_connect($server, $username, $password);


if(isset($_POST['prn'])){
    // Check for connection success
    if(!$con){
        die("connection to this database failed due to" . mysqli_connect_error());
    }
    // echo "Success connecting to the db";

    // Collect post variables
    $name = $_POST['name'];
    $prn = $_POST['prn'];
    $dept = $_POST['dept'];
    $year = $_POST['year'];
    $sql = "INSERT INTO `cia_report`.`add_students` (`name`, `prn`, `dept`, `year`) VALUES ('$name', '$prn', '$dept', '$year');";
    // echo $sql;

    // Execute the query
    if($con->query($sql) == true){
        // echo "Successfully inserted";

        // Flag for successful insertion
        $insert = true;
    }
    else{
        echo "ERROR: $sql <br> $con->error";
    }
}





if(isset($_POST['id'])){
    // Check for connection success
    if(!$con){
        die("connection to this database failed due to" . mysqli_connect_error());
    }
    // echo "Success connecting to the db";

    // Collect post variables
    $name = $_POST['name'];
    $id = $_POST['id'];
    $dept = $_POST['dept'];
    $email = $_POST['email'];
    $sql = "INSERT INTO `cia_report`.`add_facultys` (`name`, `id`, `dept`, `email`) VALUES ('$name', '$id', '$dept', '$email');";


    // Execute the query
    if($con->query($sql) == true){
        // echo "Successfully inserted";

        // Flag for successful insertion
        $insert = true;
    }
    else{
        echo "ERROR: $sql <br> $con->error";
    }
}



// Close the database connection
$con->close();

?>



