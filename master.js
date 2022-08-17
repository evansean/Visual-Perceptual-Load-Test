var button = document.getElementById("start");


button.onclick = function(){
    if ((document.getElementById("name").value != "") && (document.getElementById("age").value != "")
    && (((document.getElementById("male").checked) === (!document.getElementById("female").checked))) === (!document.getElementById("nonbinary").checked)){
        alert("Find the bee in the photo\nPress OK to start");
        sessionStorage.setItem('name',document.getElementById("name").value);
        sessionStorage.setItem('age',document.getElementById("age").value);
        if (document.getElementById("male").checked){
            sessionStorage.setItem('sex','Male');
        }
        else if(document.getElementById("female").checked){
            sessionStorage.setItem('sex','Female');
        }
        else{
            sessionStorage.setItem('sex','Non-Binary');
        }
        window.location.href ='pg1.html';
    }
    else{
        alert("Please fill in all the necessary details.");
    }
};

