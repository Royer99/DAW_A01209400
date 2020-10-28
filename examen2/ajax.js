$(document).ready(function(){
    //querylugar();
    //querytipo();
    //updateTable();
    $('select').formSelect();
    M.updateTextFields();
    
  });


  function querynombre(){
    console.log("registro nuevo zombie");
    //obtern el ultimo paciente
    let lastid=0;
    let id
    $.get("./controllerzombies.php", {})
    .done(function( data ) {
       lastid=data;
       console.log("data"+data);
       console.log("LASTID"+lastid);
       lastid=Number(lastid);
        id=lastid++;
        id++;
        console.log("id"+id);
  })
  setTimeout(function () {
  console.log($("#nombrezombie").val())
    $.post("./controllernewzombies.php", {id:id,nombre:$("#nombrezombie").val()})
    .done(function( data) {
        console.log(data);
       console.log("se inserto en tabla");
  })
  },1000);
  setTimeout(function () {
    $.post("./controllernewzombies_estado.php", {id:id})
    .done(function( data) {
        console.log(data);
       console.log("se inserto en tabla");
       loadtable();
  })
  },1000);
}

function loadtable(){
    $.get("./controllertabla.php", {})
    .done(function( data ) {
        $("#tablabody").html(data);
    })
}
$("#enviarzombi").on("click",querynombre);
loadtable();
$("#tablabody").change(function(){
    loadtable()
})