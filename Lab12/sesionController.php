<?php
    session_start(); 
    include_once("verifyAccount.php");

    if(veryAccount()&&veryPasswrd()){
        header("Location: http://127.0.0.1/dashboard.php");
    }else{
        //include_once(_invalidUser.html);
    }

    
?>