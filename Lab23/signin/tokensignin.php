<?php
    require_once '../vendor/autoload.php';
    $id_token=$_POST["token"];
    $CLIENT_ID="1028174393144-f27s244dnos84avt9p9dkkb6hppffmvp.apps.googleusercontent.com";
    $client = new Google_Client(['client_id' => $CLIENT_ID]);  // Specify the CLIENT_ID of the app that accesses the backend
    $payload = $client->verifyIdToken($id_token);
    if ($payload) {
        $userid = $payload['sub'];
        echo ($payload['email']);
        echo ($payload['email_verified']);
        echo ($payload['name']);
        echo ($payload['given_name']);
        // If request specified a G Suite domain:
        //$domain = $payload['hd'];
        
    } else {
        // Invalid ID token
    }
?>