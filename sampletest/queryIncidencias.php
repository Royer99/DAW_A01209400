<?php
    include("./util.php");
    $con=connectDB();
    $query="SELECT fecha,lugar.descripcion as lugar ,tipos.descripcion as tipo FROM incidencias,lugar,tipos WHERE incidencias.tipo=tipos.id AND incidencias.lugar=lugar.id";
    $result=mysqli_query($con,$query);
    disconnectDB($con);
    if(mysqli_num_rows($result)>0){
        while($row=mysqli_fetch_assoc($result)){
            echo "<tr>";
            echo "<td>".$row["fecha"]."</td>";
            echo "<td>".$row["lugar"]."</td>";
            echo "<td>".$row["tipo"]."</td>";
            echo "</tr>";
        }
    }
?>