
window.onload=function(){
    var low = lowAvg();
    var med = medAvg();
    var high = highAvg();
    var total = totalTime();
    document.getElementById('name').innerHTML += sessionStorage.getItem('name');
    document.getElementById('age').innerHTML += sessionStorage.getItem('age');
    document.getElementById('sex').innerHTML += sessionStorage.getItem('sex');
    document.getElementById('time1').innerHTML += low + " seconds";
    document.getElementById('time2').innerHTML += med + " seconds";
    document.getElementById('time3').innerHTML += high + " seconds";
    document.getElementById('total').innerHTML += total + " seconds";

    console.log(sessionStorage.getItem('name'));
    console.log(sessionStorage.getItem('age'));
    console.log(sessionStorage.getItem('sex'));

    for(i=0;i<23;i++){
        console.log(sessionStorage.getItem(i));
    }
  
}

function lowAvg(){
    var sum=0;
    sum= sessionStorage.getItem(0) + sessionStorage.getItem(4) +
    sessionStorage.getItem(5) + sessionStorage.getItem(10) +
    sessionStorage.getItem(14) + sessionStorage.getItem(15) +
    sessionStorage.getItem(17) + sessionStorage.getItem(19);
    var avg = sum/8;
    return avg.toFixed(2);
}

function medAvg(){
    var sum=0;
    sum= sessionStorage.getItem(1) + sessionStorage.getItem(7) +
    sessionStorage.getItem(8) + sessionStorage.getItem(11) +
    sessionStorage.getItem(13) + sessionStorage.getItem(18) +
    sessionStorage.getItem(20) + sessionStorage.getItem(22);
    var avg = sum/8;
    return avg.toFixed(2);
}

function highAvg(){
    var sum=0;
    sum= sessionStorage.getItem(2) + sessionStorage.getItem(3) +
    sessionStorage.getItem(6) + sessionStorage.getItem(9) +
    sessionStorage.getItem(12) + sessionStorage.getItem(16) +
    sessionStorage.getItem(21) + sessionStorage.getItem(23);
    var avg = sum/8;
    return avg.toFixed(2);
}

function totalTime(){
    var sum=0;
    for(i=0;i<23;i++){
        sum += sessionStorage.getItem(i);
    }
}