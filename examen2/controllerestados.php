<?php
    include("./util.php");
    //$numero=$_POST["numero"];
    $numero=3;
    for($i=1;$i<=$numero;$i++){
        $con=connectDB();
        $query="SELECT  estado.descripcion as estado, zombis_estado.fecha as fecha FROM zombis_estado,estado WHERE zombis_estado.idestado=estado.id AND zombis_estado.idzombi= '".$i."'";
        $result=mysqli_query($con,$query);
        $string="button";
        disconnectDB($con);
        if(mysqli_num_rows($result)>0){
            while($row=mysqli_fetch_assoc($result)){
                echo "<tr>";
                //echo "<td>".$row["nombre"]."</td>";
                echo "<td>".$row["estado"].$row["fecha"]."<button class='btn waves-effect waves-light' type='button'>agregar un cambio</button></td>";
                echo "</tr>";
                echo "<br>";
            }
        }
    }
    
?>