function add_Queso(){
    console.log("hola");
    obj=document.getElementById("show-guisados").classList.add("is-active"); 
}

function suma(id){
    
    let counter=document.getElementById(id).value;
    counter=parseInt(counter)
    counter+=1;
    document.getElementById(id).value=(counter);
}

function resta(id){
    
    let counter=document.getElementById(id).value;
    counter=parseInt(counter)
    counter-=1;
    document.getElementById(id).value=(counter);
}

function generaCuenta(){
    let total=0;
    let subtotal=0;
    let ham=parseInt(document.getElementById("counter1").value);
    let hot=parseInt(document.getElementById("counter2").value);
    let fri=parseInt(document.getElementById("counter3").value);
    let cuenta=document.getElementById("cuenta");
    let li1 = document.createElement('li');
    li1.setAttribute("class","collection-item");
    li1.appendChild(document.createTextNode(ham+" Hambuger             "+ham*80));
    let li2 = document.createElement('li');
    li2.setAttribute("class","collection-item");
    li2.appendChild(document.createTextNode(hot+" Hot-dog             "+hot*80)); 
    let li3 = document.createElement('li');
    li3.setAttribute("class","collection-item");
    li3.appendChild(document.createTextNode(fri+" fries             "+fri*80)); 
    cuenta.appendChild(li1);
    cuenta.appendChild(li2);
    cuenta.appendChild(li3);
}