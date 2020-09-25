<?php
    session_start(); 
    include_once("verifyAccount.php");

    if(veryAccount()&&veryPasswrd()){
        include_once("dashboard.php");
    }else{
        include_once("invalidUser.php");
    }

    
?>