<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    include_once("util.php");
    include_once("_head.html");
    include_once("_header.html");
    function main(){
        $dataset1=array();
        $dataset2=array();
        displayContent($dataset1);
        displayContent($dataset2);
        powerTable();
        include_once("_footer.html");
        
    }
main();
    
?>
