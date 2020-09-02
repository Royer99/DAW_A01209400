var quesoList = new Array();
var migajasList = new Array();
var flag = 0;

function registerTrans(){

    aux = 0;
    document.getElementById("counter").value = (aux);
    generaCuenta();
    obj = document.getElementById("show-guisados").classList.remove("is-active");
    
}

function appendToList(string) {
    aux = document.getElementById("counter").value;
    if(!flag) {
        if(aux>quesoList.length){
            quesoList.push(string);
        }else{
            alert("No más");
        }
    }else{
        if(aux>migajasList.length){
            migajasList.push(string);
        }else{
            alert("No más");
        }
    }
}

function show_Guisados(type) {
    obj = document.getElementById("show-guisados").classList.add("is-active");
    if (type == '0') {
        flag = 0;
        aux=quesoList.length;
        document.getElementById("counter").value = (aux);
    } else {
        flag = 1;
        aux=migajasList.length;
        document.getElementById("counter").value = (aux);
    }
}

function suma(id) {

    let counter = document.getElementById(id).value;
    counter = parseInt(counter);
    counter += 1;
    document.getElementById(id).value = (counter);
}

function resta(id) {

    let counter = document.getElementById(id).value;
    counter = parseInt(counter);
    counter -= 1;
    document.getElementById(id).value = (counter);
}


function displayCuenta(){
    quesos=document.getElementById("noQueso");
    migajas=document.getElementById("noMigajas");
    quesos.innerHTML = "";
    migajas.innerHTML = "";
    for(let i=0;i<quesoList.length;i++){
        let li=document.createElement("li");
        li.appendChild(document.createTextNode(quesoList[i]));
        quesos.appendChild(li);
    }
    for(let i=0;i<migajasList.length;i++){
        let li=document.createElement("li");
        li.appendChild(document.createTextNode(migajasList[i]));
        migajas.appendChild(li);
    }
}

function generaCuenta(){
    let total = 0;
    let subtotal = 0;
    let envio=false;
    let totalQueso=0;
    let totalMigajas=0;
    
    totalQueso=quesoList.length*25;
    totalMigajas=migajasList.length*25;
    subtotal=totalQueso+totalMigajas;
    sub=document.getElementById("subtotal");
    sub.innerHTML = "";
    sub.appendChild(document.createTextNode("$"+subtotal));
    envio=document.getElementById("envio")
    if(envio.checked==true){
        total+=25;
    }
    total+=subtotal
    //console.log(quesoList);
    displayCuenta();
    tot=document.getElementById("total");
    tot.innerHTML="";
    tot.appendChild(document.createTextNode("$"+total));
}
