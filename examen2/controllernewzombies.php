<?php
    include("util.php");
    $id=$_POST["id"];
    $nombre=$_POST["nombre"];
    $con=connectDB();
    $query="INSERT INTO zombis (id,nombre) VALUES(\"".$id."\",\"".$nombre."\");";
    $result=mysqli_query($con,$query);
    disconnectDB($con);
?>