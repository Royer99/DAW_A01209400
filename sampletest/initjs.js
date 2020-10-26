
$(document).ready(function(){
  querylugar();
  querytipo();
  updateTable();
  $('select').formSelect();
});

function querylugar(){
    console.log("entro");
    $.post("./selectlugarUtil.php", {})
    .done(function( data ) {
        $("#lugar").append(data);
        $('select').formSelect();
  })
}

function querytipo(){
  console.log("entro");
  $.post("./selecttipoUtil.php", {})
  .done(function( data ) {
      $("#tipo").append(data);
      $('select').formSelect();
  })
}
function updateTable(){
  $.post("./queryIncidencias.php", {})
  .done(function( data ) {
    $("#tabla").html(data);
  })
  
}

function enviar(){
  console.log("enviar");
  $.post("./enviar.php", {idlugar:$("#lugar").val(),idtipo:$("#tipo").val()})
  .done(function( data ) {
    console.log("insertado");
      //show alert dbchanged
      //$("#alert").append(data);
      updateTable();
  })
}
$("#enviar").on("click",enviar);




