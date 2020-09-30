<main>
    <div class="container" width="70%" >
    <h3>Bienvenido  <?php
        //session_start();
        if(isset($_SESSION["user"])){
          
        echo $_SESSION["user"];
      }else{
        echo $_SESSION["user"];
      }
    ?></h3>
    <h3>
    </h3>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        Select image to upload:
        <input type="file" name="fileToUpload" id="fileToUpload">
        <input type="submit" value="Upload Image" name="submit">
    </form>
    </div>
</main>