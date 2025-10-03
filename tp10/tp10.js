
function addition()
{
    var a =document.getElementById("t1").value;
    var b =document.getElementById("t2").value;
    var c =Number(a) + Number(b);
    document.getElementById("resultat").value = c;

}
function soustraction()
{
    var a =document.getElementById("t1").value;
    var b =document.getElementById("t2").value;
    var c =Number(a) - Number(b);
    document.getElementById("resultat").value = c;

}
function multiplication()
{
    var a =document.getElementById("t1").value;
    var b =document.getElementById("t2").value;
    var c =Number(a) * Number(b);
    document.getElementById("resultat").value = c;

}
function division()
{
    var a =document.getElementById("t1").value;
    var b =document.getElementById("t2").value;
    var c =Number(a) / Number(b);
    document.getElementById("resultat").value = c;

}
function parite()
{
    var x =document.getElementById("t2").value
    if(x % 2 == 0) {
    document.getElementById("parite").value = "paire"
}
    else{
    document.getElementById("parite").value = "impaire"

    }
}
function permutation()
{
    var k =document.getElementById("t1").value;
    var f =document.getElementById("t2").value;
    var n =Number(0)
n = f
f = k
k = n

document.getElementById("t1").value = n
document.getElementById("t2").value = f

}
function supp()
{
document.getElementById("t1").value = ""
document.getElementById("t2").value = ""
document.getElementById("parite").value = ""
document.getElementById("resultat").value = ""


}

