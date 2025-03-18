let inputuser = document-getElementById('inputuser');
let intputpass = document.getElementById('inputpass');
let btnlogin = document.getElementById('btnlogin');

btnlogin.addEventListener ("click", function(e) {
e.preventDefault ()
if (inputuser.value == "Viosly") {
if (inputpass.value == "143"){
location.href = "main.html";
} else {
alert ("Invalid Password");
}
} else {
alert ("Invalid Username");
}

});