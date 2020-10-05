<?php

    //this procedure calls the util php query the Users table and displays in table format
    require_once("util.php");
    $result=getUsers();
    if(mysqli_num_rows($result)>0){
        echo "<table>";
        while($row=mysqli_fetch_assoc($result)){
            $pass=$row["password"];
        }
    }
    var_dump(hash_equals($pass,crypt('12345','RoyerDonneArenasCamacho')));
?>
<img class="materialboxed" width="650" src="<?php echo $_SESSION['imagePath'];?>">