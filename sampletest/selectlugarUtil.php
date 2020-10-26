<?php
    include("./util.php");
    $con=connectDB();
    $query="SELECT id, descripcion FROM lugar";
    $result=mysqli_query($con,$query);
    disconnectDB($con);
    if(mysqli_num_rows($result)>0){
        while($row=mysqli_fetch_assoc($result)){
            echo '<option value="'.$row["id"].'">'.$row["descripcion"].'</option>';
        }
    }
?>