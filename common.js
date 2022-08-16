var find = document.getElementById("find");
var start;
var duration;
var counter=0;
let timings = new Array(24);

find.onclick = function(){
    duration = (Date.now() - start)/1000;
    alert("Time taken is " + duration + " seconds\n value is " + find.value);
    timings[find.value + 1] = duration;
    counter++;
    alert("You found the bee!\nPress OK to proceed to the next page");
    window.location.href = find.innerHTML + '.html';
}

window.onload=function(){
    start = Date.now();
}