/*
    @author:Royer Donnet Arenas Camacho
    @Date: 20/08/2020
    @Description: Lab04
*/
function power_Table(givenNumber){

    var tbl = document.getElementById('powerTable');
    var tbdy = document.createElement('tbody');
    for (var i=1; i<=givenNumber; i++) {
    var tr = document.createElement('tr');
        var tdSquare = document.createElement('td');
        var tdCube = document.createElement('td');
        var square=i*i
        var cube=i*i*i
        tdSquare.appendChild(document.createTextNode(square))
        tdCube.appendChild(document.createTextNode(cube))
        tr.appendChild(tdSquare)
        tr.appendChild(tdCube)
    tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);

}
function quick_Quiz(){
    let randomNum1=Math.floor(Math.random() * 1000);
    let randomNum2=Math.floor(Math.random() * 1000);
    document.write("<h3>"+randomNum1+"+"+randomNum2+"= ?</h3>");
}

let givenNumber=prompt("Dame un numero: ");
power_Table(givenNumber)
//quick_Quiz()


/*
  document.getElementById("powerTable").append="<table><tr><td>Number</td><td>Square</td><td>Cube</td></tr>";
    for(let i=1;i<=givenNumber;i++){
        document.write("<tr><td>"+i+"</td>"+"<td>"+i*i+"</td>"+"<td>"+i*i*i+"</td><tr>");
    }
    document.write("</table>");
*/