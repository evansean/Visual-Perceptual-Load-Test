var button = document.getElementById("start");
// var find = document.getElementById("find");
var start;
var duration;

button.onclick = function(){
    if ((document.getElementById("name").value != "") && (document.getElementById("age").value != "")
    && (((document.getElementById("male").checked) === (!document.getElementById("female").checked))) === (!document.getElementById("nonbinary").checked)){
        alert("Find the bee in the photo\nPress OK to start");
        window.location.href ='pg1.html';
        // start_timer();
    }
    else{
        alert("Please fill in all the necessary details.");
    }
};

var find = document.getElementById("find");

find.onclick = function(){
    // duration = Date.now() - start;
    // alert("Time taken is " + duration);
    alert("You found the bee!\nPress OK to proceed to the next page");
    // window.location.href ='result.html';
}



function start_timer(){
     start = Date.now();
}