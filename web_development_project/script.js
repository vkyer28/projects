document.getElementById("myBtn").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("display").innerHTML = "Request Submitted!";
}

document.getElementById('myBtn2').onclick = function () { clear() };

function clear() {
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    document.getElementById('notes').value = '';
    document.getElementById('display').innerHTML = '';
}