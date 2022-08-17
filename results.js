
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
    sum= parseFloat(sessionStorage.getItem(0)) + parseFloat(sessionStorage.getItem(4)) +
    parseFloat(sessionStorage.getItem(5)) + parseFloat(sessionStorage.getItem(10)) +
    parseFloat(sessionStorage.getItem(14)) + parseFloat(sessionStorage.getItem(15)) +
    parseFloat(sessionStorage.getItem(17)) + parseFloat(sessionStorage.getItem(19));
    var avg = sum/8;
    return avg.toFixed(2);
}

function medAvg(){
    var sum=0;
    sum= parseFloat(sessionStorage.getItem(1)) + parseFloat(sessionStorage.getItem(7)) +
    parseFloat(sessionStorage.getItem(8)) + parseFloat(sessionStorage.getItem(11)) +
    parseFloat(sessionStorage.getItem(13)) + parseFloat(sessionStorage.getItem(18)) +
    parseFloat(sessionStorage.getItem(20)) + parseFloat(sessionStorage.getItem(22));
    var avg = sum/8;
    return avg.toFixed(2);
}

function highAvg(){
    var sum=0;
    sum= parseFloat(sessionStorage.getItem(2)) + parseFloat(sessionStorage.getItem(3)) +
    parseFloat(sessionStorage.getItem(6)) + parseFloat(sessionStorage.getItem(9)) +
    parseFloat(sessionStorage.getItem(12)) + parseFloat(sessionStorage.getItem(16)) +
    parseFloat(sessionStorage.getItem(21)) + parseFloat(sessionStorage.getItem(23));
    var avg = sum/8;
    return avg.toFixed(2);
}

function totalTime(){
    var sum=0;
    sum= parseFloat(sessionStorage.getItem(0)) + parseFloat(sessionStorage.getItem(1)) +
    parseFloat(sessionStorage.getItem(2)) + parseFloat(sessionStorage.getItem(3)) +
    parseFloat(sessionStorage.getItem(4)) + parseFloat(sessionStorage.getItem(5)) +
    parseFloat(sessionStorage.getItem(6)) + parseFloat(sessionStorage.getItem(7))+ parseFloat(sessionStorage.getItem(8)) +
    parseFloat(sessionStorage.getItem(10)) + parseFloat(sessionStorage.getItem(9)) +
    parseFloat(sessionStorage.getItem(12)) + parseFloat(sessionStorage.getItem(11)) +
    parseFloat(sessionStorage.getItem(13)) + parseFloat(sessionStorage.getItem(14))+ parseFloat(sessionStorage.getItem(15)) +
    parseFloat(sessionStorage.getItem(16)) + parseFloat(sessionStorage.getItem(17)) +
    parseFloat(sessionStorage.getItem(18)) + parseFloat(sessionStorage.getItem(19)) +
    parseFloat(sessionStorage.getItem(21)) + parseFloat(sessionStorage.getItem(20))+ parseFloat(sessionStorage.getItem(22)) +
    parseFloat(sessionStorage.getItem(23)); 
    return sum;
}