<?php
    //session_start();
    function veryAccount(){
        if(isset($_POST["user"])=="Royer99"){
            return true;
        }
    }

    function veryPasswrd(){
        if(isset($_POST["passwrd"])=="12345"){
            return true;    
        }
    }
?>