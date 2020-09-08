<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    include_once("_header.html");
    include_once("util.php");
    function main(){
        $dataset1=array();
        $dataset2=array();
        displayContent($dataset1);
        displayContent($dataset2);
        powerTable();
    }
main();
?>
