function One() {
    document.getElementById("diplay").innerHTML += 1;
    return 1;
}
function Two() {
    document.getElementById("diplay").innerHTML += 2;
    return 2;
}
function Three() {
    document.getElementById("diplay").innerHTML += 3;
}
function Four() {
    document.getElementById("diplay").innerHTML += 4;
}
function Five() {
    document.getElementById("diplay").innerHTML += 5;
}
function Six() {
    document.getElementById("diplay").innerHTML += 6;
}
function Seven() {
    document.getElementById("diplay").innerHTML += 7;
}
function Eight() {
    document.getElementById("diplay").innerHTML += 8;
}
function Nine() {
    document.getElementById("diplay").innerHTML += 9;
}
function Clear() {
    document.getElementById("diplay").innerHTML = "";
}
function Div() {
    document.getElementById("diplay").innerHTML += " / ";
}
function Mul() {
    document.getElementById("diplay").innerHTML += "*";
}
function Subs() {
    document.getElementById("diplay").innerHTML += "-";
}
function Dot() {
    document.getElementById("diplay").innerHTML += ".";
}
function Zero() {
    document.getElementById("diplay").innerHTML += "0";
}
function Add() {
    document.getElementById("diplay").innerHTML += "+";
}
function Equal() {
    result = document.getElementById("diplay").innerHTML;
    console.log(eval(result));
    finre = eval(result)
    document.getElementById("diplay").innerHTML = finre;
}
