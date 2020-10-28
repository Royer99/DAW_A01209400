<?php
    include("util.php");
    $id=$_POST["id"];
    $estado=1;
    $con=connectDB();
    $query="INSERT INTO zombis_estado (idzombi,idestado) VALUES(\"".$id."\",\"".$estado."\");";
    $result=mysqli_query($con,$query);
    disconnectDB($con);
?>