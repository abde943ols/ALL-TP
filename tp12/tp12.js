function calcul_moyenne()
{
    var a = prompt("Donner la première note sur 20 :");
    var b = prompt("Donner la deuxième note sur 20 :");
    var c = prompt("Donner la troisième note sur 20 :");

    var moyenne =(Number(a) + Number(b) + Number(c)) /3;

    document.write("voici la moyenne : " + moyenne +"<br>");

    if(moyenne < 10) {
        document.write("Redoublant");
        document.write('<a href="tp12.html">Retour</a>')
}
    else if(moyenne < 12) {
        document.write("admis - passable");
        document.write('<a href="tp12.html">Retour</a>')
    }
    else if(moyenne < 14) {
        document.write("admis - bien");
        document.write('<a href="tp12.html">Retour</a>')
    }
    else {
        document.write("admis - Très bien");
        document.write('<a href="tp12.html">Retour</a>')
    }
}   
 function test_temperature() {
     let temp = Number(prompt("Entrez la température"));

 document.write("voici la température : <br>");
 
 if(temp < 10) {
    document.write("Froid" + "<br>");
    document.write('<a href="tp12.html">Retour</a>')
}
else if(temp <= 25) {
    document.write("Normal" + "<br>");
    document.write('<a href="tp12.html">Retour</a>')
}
else {
    document.write("Chaud" + "<br>");
    document.write('<a href="tp12.html">Retour</a>')
}
 }
   
function comparaison_nombre() {
    var num1 = prompt("Donner un premier nombre :");
    var num2 = prompt("Donner un deuxième nombre :");

    document.write("voici les deux nombre : " + num1 + " et " + num2 + "<br>");

    if (Number(num1) < Number(num2)) {
    document.write(num2 + " est plus grand que " + num1 + "<br>");
    document.write('<a href="tp12.html">Retour</a>')
    }
    else {
        document.write(num1 + " est plus grand que " + num2 + "<br>");
        document.write('<a href="tp12.html">Retour</a>')
    }
}   
