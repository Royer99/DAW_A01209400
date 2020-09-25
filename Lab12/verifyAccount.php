<?php
    function veryAccount(){
        if(isset($_SESSION["user"])=="Royer99"){
            return true;
        }
    }

    function veryPasswrd(){
        if(isset($_SESSION["passwrd"])=="12345"){
            return true;    
        }
    }
?>