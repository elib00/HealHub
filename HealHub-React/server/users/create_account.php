<?php
include("../index.php");

$method = $_SERVER["REQUEST_METHOD"];

if($method === "POST"){
    //get the data from the request body
    $userData = json_decode(file_get_contents('php://input'), true);

    //sanitize the input data
    $name = mysqli_real_escape_string($connection, $userData["firstName"] . " " . $userData["lastName"]);
    $email = mysqli_real_escape_string($connection, $userData["email"]);
    $hashedPassword = password_hash($userData["password"], PASSWORD_BCRYPT);
    $password = mysqli_real_escape_string($connection, $hashedPassword);

    //check if the email is already taken
    $query = "SELECT * FROM user WHERE email = '$email'";

    //check if the credentials are already taken and if they are, kill the script
    $result = mysqli_query($connection, $query);
    if(mysqli_num_rows($result) > 0){
        die("Email address already in use.");
    }

    $query = "INSERT INTO user (name, email, password) VALUES ('$name', '$email', '$password')";

    if(mysqli_query($connection, $query)) {
        // If insertion succeeds, return a success response
        header('Content-Type: application/json');
        http_response_code(200);

        $userId = mysqli_insert_id($connection);
        $result = mysqli_query($connection, "SELECT created_at FROM user WHERE id = '$userId'");
        
        $row = mysqli_fetch_assoc($result);
        $createdAt = null;
        while($row){
            $createdAt = $row["created_at"];
            $row = mysqli_fetch_assoc($result);
        }

        $response = [
            "message" => "User created successfully!",
            "data" => [
                "name" => $name,
                "email" => $email,
                "created_at" => $createdAt
            ]
        ];

        echo json_encode($response, JSON_PRETTY_PRINT);
    } else {
        // If insertion fails, return an error response
        http_response_code(500); // Internal Server Error
        echo json_encode(array('error' => 'Error creating user'));
    }

    // Close the database connection
    // mysqli_close($connection);
}
