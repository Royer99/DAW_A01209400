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
        let square=i*i
        let cube=i*i*i
        tdSquare.appendChild(document.createTextNode(square))
        tdCube.appendChild(document.createTextNode(cube))
        tr.appendChild(tdSquare)
        tr.appendChild(tdCube)
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

let givenNumber=prompt("Dame un numero: ");
power_Table(givenNumber)
let randomNumbers=new Array(2)
random_Numbers(randomNumbers);
let startTime=new Date();
let userGuess=prompt("Cuanto es :"+randomNumbers[0]+"+"+randomNumbers[1]);
let finishTime=new Date();
let dateDiff= Math.floor((finishTime.getTime()-startTime.getTime())/1000 % 60);
alert(evalSum(userGuess,randomNumbers)+", te tomo:"+dateDiff+"segundos");
let countZeros=0;
let countNegatives=0;
let countGreaterZero=0;