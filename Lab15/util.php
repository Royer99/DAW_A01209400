<?php
    function connectDb(){
        $serverName="127.0.0.1";
        $userName="royer";
        $password='Royito01$_';
        $dbName="app1";

        $con=mysqli_connect($serverName,$userName,$password,$dbName);
        //check connection
        if(!$con){
            die("Connection failed: ".mysqli_connect_error());
        }
        return $con;
    }

    function disconnectDb($con){
        mysqli_close($con);
    }

    function isUser($user){
        $con=connectDb();
        $query="SELECT user FROM Users WHERE user='".$user."'";
        $result=mysqli_query($con,$query);
        disconnectDb($con);
        if(mysqli_num_rows($result)>0){
            $row=mysqli_fetch_assoc($result);
                if($row["user"]==$user){
                    echo"ok";
                    return true;
                }else{
                    echo"nel";
                    return false;
                }
        }
    }
    
    function veryPass($user,$passwrd){
        $con=connectDb();
        $query="SELECT password FROM Users WHERE user='".$user."'";
        $result=mysqli_query($con,$query);
        disconnectDb($con);
        if(!empty($result)&&mysqli_num_rows($result)>0){
            while($row=mysqli_fetch_assoc($result)){
                $pass=$row["password"];
                if(hash_equals($pass,crypt($passwrd,'RoyerDonneArenasCamacho'))){
                    echo"ok";
                    return(true);
                }else{
                    echo"nel";
                    return false;
                }
            }
        }
    }
?>