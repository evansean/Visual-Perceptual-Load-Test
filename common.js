var find = document.getElementById("find");
var start;
var duration;
var counter=0;
var results = document.getElementById('time');

find.onclick = function(){
    duration = (Date.now() - start)/1000;
    // alert("Time taken is " + duration + " seconds\n value is " + find.value);
    sessionStorage.setItem(find.value,duration);
    alert("You found the bee!\nPress OK to proceed to the next page");
    window.location.href = find.innerHTML + '.html';
}

window.onload=function(){
    start = Date.now();
    console.log(sessionStorage.getItem('name'));
    console.log(sessionStorage.getItem('age'));
    console.log(sessionStorage.getItem('sex'));

    for(i=0;i<24;i++){
        console.log(sessionStorage.getItem(i));
    }
  
}

function printResult(){
    alert(timings);
}