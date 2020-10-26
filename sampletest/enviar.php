<?php
    include("./util.php");
    $idlugar=$_POST["idlugar"];
    $idtipo=$_POST["idtipo"];
    $con=connectDB();
    $query="INSERT INTO incidencias (tipo,lugar) VALUES(\"".$idtipo."\",\"".$idlugar."\");";
    $result=mysqli_query($con,$query);
    disconnectDB($con);
?>