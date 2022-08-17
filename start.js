var consent = document.getElementById('consent');
var exit = document.getElementById('exit');

consent.onclick = function(){
    window.location.href = 'index1.html';
}

exit.onclick = function(){
    alert("Thank you for your time.");
    window.close();
}