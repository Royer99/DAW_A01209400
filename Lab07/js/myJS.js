var quesoList = new Array();
var migajasList = new Array();
var flag = 0;

function registerTrans(){
    aux = document.getElementById("counter").value;
    aux = parseInt(aux)
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
    } else {
        flag = 1;
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
    for(let i=0;i<quesoList.length;i++){
        let li=document.createElement("li");
        console.log(quesoList[i]);
        li.appendChild(document.createTextNode(quesoList[i]));
        quesos.appendChild(li);
    }
    for(let i=0;i<migajasList.length;i++){
        let li=document.createElement("li");
        console.log(migajasList[i]);
        li.appendChild(document.createTextNode(migajasList[i]));
        migajas.appendChild(li);
    }
}

function generaCuenta() {
    let total = 0;
    let subtotal = 0;
    let envio=false;
    let totalQueso=0;
    let totalMigajas=0;
    
    totalQueso=quesoList.length*25;
    totalMigajas=migajasList.length*25;
    subtotal=totalMigajas+totalMigajas;
    if(envio){
        total+=25;
    }
    total+=subtotal
    //console.log(quesoList);
    displayCuenta();
}