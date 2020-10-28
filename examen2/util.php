<?php
    function connectDB(){
        $serverName="localhost";
        $userName="root";
        $password='Royito01$_';
        $dbName="Zombis";

        $connection=mysqli_connect($serverName,$userName,$password,$dbName);
        if(!$connection){
            die("Connection failed: ".mysqli_connect_error());
        }
        return $connection;
    }

    function disconnectDB($connection){
        mysqli_close($connection);
    }
?>