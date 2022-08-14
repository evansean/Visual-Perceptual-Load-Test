var button = document.getElementById("start");
var find = document.getElementById("find");
var timer;
var response;

button.onclick = function(){
    if ((document.getElementById("name").value != "") && (document.getElementById("age").value != "")
    && (((document.getElementById("male").checked) === (!document.getElementById("female").checked))) === (!document.getElementById("nonbinary").checked)){
        alert("Find the bee in the photo\nPress OK to start");
        window.location.href ='exp.html';
        start_timer();
    }
    else{
        alert("Please fill in all the necessary details.");
    }
};

find.onclick = 


function start_timer(){
    var start = Date.now();
}