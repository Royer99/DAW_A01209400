<?php
    include("./util.php");

    $con=connectDB();
    $query="SELECT fecha,idzombi,zombis.nombre as nombre ,estado.descripcion as estado FROM zombis_estado,zombis,estado WHERE zombis_estado.idzombi=zombis.id AND zombis_estado.idestado=estado.id";
    $result=mysqli_query($con,$query);
    $string="button";
    disconnectDB($con);
    if(mysqli_num_rows($result)>0){
        while($row=mysqli_fetch_assoc($result)){
            echo "<tr>";
            echo "<td>".$row["nombre"]."</td>";
            echo "<td>".$row["estado"].$row["fecha"]."<button class='btn waves-effect waves-light' type='button' id=".$string.$row["idzombi"].">"."agregar un </button></td>";
            echo "</tr>";
        }
    }
?>