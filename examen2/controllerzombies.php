<?php
    include("util.php");
    $con=connectDB();
    $query="SELECT id
            FROM zombis
            ORDER BY id DESC
            LIMIT 1";
    $result=mysqli_query($con,$query);
    disconnectDB($con);
    if(mysqli_num_rows($result)>0){
        $row=mysqli_fetch_assoc($result);
            echo $row["id"];
    }
?>