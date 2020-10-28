$(document).ready(function(){
    //querylugar();
    //querytipo();
    //updateTable();
    $('select').formSelect();
    //M.AutoInit();
    //loadtable();
    totalzombis();
    M.updateTextFields();
    
  });


  function loadestados(){
    $.get("./controllertabla.php", {numero:3})
    .done(function( data ) {
      //console.log(data);
        $("#tablabody").html(data);
    })
  }

  function totalzombis(){
    $.get("./controllertotalzombies.php", {})
    .done(function( data ) {
      console.log(data);
        $("#consulta2").append(data);
    })
  }

  function totalzombisporestado(){
    $.get("./controllerzombiesporestado.php", {})
    .done(function( data ) {
      //console.log(data);
        $("#consulta2").append(data);
    })
  }