<?php
    include("./util.php");
        $con=connectDB();
        $query="SELECT COUNT(id) AS counter from zombis";
        $result=mysqli_query($con,$query);
        $string="button";
        disconnectDB($con);
        if(mysqli_num_rows($result)>0){
            $row=mysqli_fetch_assoc($result);
                //echo "<td>".$row["nombre"]."</td>";
                echo "<p>".$row["counter"]."</p>";
        }
    
?>