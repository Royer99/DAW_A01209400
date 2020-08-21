/*
    @author:Royer Donnet Arenas Camacho
    @Date: 20/08/2020
    @Description: Lab04
*/
function power_Table(givenNumber){

    let tbl = document.getElementById('powerTable');
    let tbdy = document.createElement('tbody');
    for (let i=1; i<=givenNumber; i++) {
    var tr = document.createElement('tr');
        let tdSquare = document.createElement('td');
        let tdCube = document.createElement('td');
        let square=i*i;
        let cube=i*i*i;
        tdSquare.appendChild(document.createTextNode(square));
        tdCube.appendChild(document.createTextNode(cube));
        tr.appendChild(tdSquare);
        tr.appendChild(tdCube);
    tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
}
function random_Numbers(randomNumbers){
    let randomNum1=Math.floor(Math.random() * 1000);
    let randomNum2=Math.floor(Math.random() * 1000);
    randomNumbers[0]=randomNum1;
    randomNumbers[1]=randomNum2;
    return randomNumbers;
}

function evalSum(userGuess,randomNumbers){
    let flag;
    realResult=randomNumbers[0]+randomNumbers[1];
    if(userGuess==realResult){
        flag=true;
    }else{
        flag=false;
    }
    return flag;
}

function randomArray(auxArray){
    for(let i=0;i<auxArray.length;i++){
        let rand=Math.floor(Math.random() * 201)-100;
        auxArray[i]=rand;
    }
}
function renderArray(array){
    let p = document.getElementById('arrayCount');
    auxString=array.toString();
    p.appendChild(document.createTextNode(auxString));
}

function count(array){
    let countZeros=0;
    let countNegatives=0;
    let countGreaterZero=0;
    for(let i=0;i<array.length;i++){
        if(array[i]<0){
            countNegatives++;
        }else if(array[i]==0){
            countZeros++;
        }else{
            countGreaterZero++;
        }
    }
    let p = document.getElementById('countResult');
    let arrayResults=new Array(3);
    arrayResults[0]=countNegatives;
    arrayResults[1]=countZeros
    arrayResults[2]=countGreaterZero;
    let auxString=arrayResults.toString();
    p.appendChild(document.createTextNode(auxString));
}



let givenNumber=prompt("Dame un numero: ");
power_Table(givenNumber)
let randomNumbers=new Array(2)
random_Numbers(randomNumbers);
let startTime=new Date();
let userGuess=prompt("Cuanto es :"+randomNumbers[0]+"+"+randomNumbers[1]);
let finishTime=new Date();
let dateDiff= Math.floor((finishTime.getTime()-startTime.getTime())/1000 % 60);
alert(evalSum(userGuess,randomNumbers)+", te tomo: "+dateDiff+" segundos");
let auxArray= new Array(10);
randomArray(auxArray);
renderArray(auxArray);
count(auxArray);

